import axios from "axios";
import { asyncHandler } from "../utils/asyncHandler.js";
import { TrackModel } from "../model/treckOrder.model.js";
import { GenerateToken } from "../helper/BlueDartToken.js";

const profile = { LoginID: process.env.BLUE_DART_LoginID, Api_type: 'S', LicenceKey: process.env.BLUE_DART_LicenceKey }




export const createWaybill = asyncHandler(async(req,res)=>{

    const data = req.body
    const date = new Date();
    const PickupDate = `/Date(${date.getTime()})/`
    const token =await GenerateToken()
    
    try {
        var options = {
            method: 'POST',
            url: 'https://apigateway-sandbox.bluedart.com/in/transportation/waybill/v1/GenerateWayBill',
            headers: {
                'content-type': 'application/json',
                JWTToken: token
            },
            data: {
                Request: {
                    Consignee: {
                        ConsigneeAddress1: "Test Cngee Addr1",
                        ConsigneeAddress2: "Test Cngee Addr2",
                        ConsigneeAddress3: "Test Cngee Addr3",
                        ConsigneeAddressType: "R",
                        ConsigneeAttention: "ABCD",
                        ConsigneeEmailID: "",
                        ConsigneeGSTNumber: "",
                        ConsigneeLatitude: "",
                        ConsigneeLongitude: "",
                        ConsigneeMaskedContactNumber: "",
                        ConsigneeMobile: 9995554441,
                        ConsigneeName: "Test Consignee Name",
                        ConsigneePincode: 110027,
                        ConsigneeTelephone: ""
                    },
                    Returnadds: {
                        ManifestNumber: "",
                        ReturnAddress1: "Test RTO Addr1",
                        ReturnAddress2: "Test RTO Addr2",
                        ReturnAddress3: "Test RTO Addr3",
                        ReturnContact: "Test RTO",
                        ReturnEmailID: "",
                        ReturnLatitude: "",
                        ReturnLongitude: "",
                        ReturnMaskedContactNumber: "",
                        ReturnMobile: 9995554447,
                        ReturnPincode: 400057,
                        ReturnTelephone: ""
                    },
                    Services: {
                        AWBNo: "",
                        ActualWeight: 0.5,
                        CollectableAmount: 0,
                        Commodity: {},
                        CreditReferenceNo: data.orderId, // Added `orderId` parameter here
                        DeclaredValue: 0,
                        Dimensions: [],
                        PDFOutputNotRequired: true,
                        PackType: "",
                        PickupDate: PickupDate,
                        PickupTime: "1600",
                        PieceCount: 1,
                        ProductCode: "D",
                        ProductType: 0,
                        RegisterPickup: true,
                        SpecialInstruction: "",
                        SubProductCode: "",
                        OTPBasedDelivery: 0,
                        OTPCode: "",
                        itemdtl: [],
                        noOfDCGiven: 0
                    },
                    Shipper: {
                        CustomerAddress1: data.UserAddress1,
                        CustomerAddress2: "Test Cust Addr2",
                        CustomerAddress3: "Test Cust Addr3",
                        CustomerCode: "246525",
                        CustomerEmailID: data.UserEmail,
                        CustomerGSTNumber: "",
                        CustomerLatitude: "",
                        CustomerLongitude: "",
                        CustomerMaskedContactNumber: "",
                        CustomerMobile: data.UserPhone,
                        CustomerName: data.UserName,
                        CustomerPincode: data.Pincode,
                        CustomerTelephone: "",
                        IsToPayCustomer: false,
                        OriginArea: data.area,
                        Sender: "TestRvp",
                        VendorCode: ""
                    }
                },
                Profile: profile // Added `profile` parameter here
            }
        };

        const resp   = await axios.request(options)
        const trackDetail = {
            trackingID: resp.data.GenerateWayBillResult.AWBNo,
            TokenNumber: resp.data.GenerateWayBillResult.TokenNumber
        }
        const resp2 = await TrackModel.create({ ...trackDetail, user_id: req?.user._id,PickupDate })
        res.status(200).json({ mesage: "waybill Generated Succesfully", data:resp2})    
        
    } catch (error) {
        
        if (error.response) {

            console.error('Error response data:', error.response.data);
            console.error('Error response status:', error.response.status);
            console.error('Error response headers:', error.response.headers);
        } else if (error.request) {

            console.error('Error request:', error.request);
        } else {

            console.error('Error message:', error.message);
        }
        console.error('Error config:', error.config);
    }

})

export const CancelPickup =asyncHandler(async(req,res)=>{
    const token = await GenerateToken()
    const data = req.body
    var options = {
        method: 'POST',
        url: 'https://apigateway-sandbox.bluedart.com/in/transportation/cancel-pickup/v1/CancelPickup',
        headers: { 'content-type': 'application/json', JWTToken: token },
        data: {
            request: {
                PickupRegistrationDate: data.PickupDate,
                Remarks: null,
                TokenNumber: data.tokenNumber
            },
            profile:profile
        }
    };

    try {
        const resp = await axios.request(options)
        console.log(resp)
    } catch (error) {
        console.log(error)
    }
    
})