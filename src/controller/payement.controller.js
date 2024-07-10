import Razorpay from "razorpay";
import { asyncHandler } from "../utils/asyncHandler.js";
import axios from "axios";

var instance = new Razorpay({
  key_id: process.env.PAYEMET_KEY_ID,
  key_secret: process.env.PAYEMENT_KEY_SECRATE,
});

export const MakePayementOnline = asyncHandler(async (req, res) => {
  try {
    const data = req.body;
    const options = {
      amount: data.amount * 100,
      currency: "INR",
      receipt: "parasjisco@gmail.com",
      notes: {
        paymentType: "Online",
      },
    };
    instance.orders.create(options, (err, order) => {
      if (err) {
        console.log(err);
      } else {
        return res.status(200).json({
          amount: order.amount,
          currency: order.currency,
          id: order.id,
        });
      }
    });
  } catch (err) {}
});

export const RefundPayement = asyncHandler(async (req, res) => {
  const { paymentId, refundAmount } = req.body;
  instance.payments
    .refund(paymentId, { amount: refundAmount })
    .then((response) => {
      console.log("Refund successful:", response);
    })
    .catch((error) => {
      console.error("Error in refund:", error);
    });
});

export const getReceipt = asyncHandler(async (req, res) => {
  const paymentId = req.body.paymentId;

  try {
    const response = await axios.get(
      `https://api.razorpay.com/v1/payments/${paymentId}`,
      {
        auth: {
          username: process.env.PAYEMET_KEY_ID,
          password: process.env.PAYEMENT_KEY_SECRATE,
        },
      }
    );

    console.log(response.data);
    res.status(200).json({
      receipt: response.data,
      message: "payment receipt",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export const createInvoice = asyncHandler(async (req, res) => {
  const { orderId, customerDetails } = req.body;
  console.log(orderId, customerDetails);
  const options = {
    type: "invoice",
    date: Math.floor(Date.now() / 1000),
    customer: customerDetails,
    line_items: [
      {
        name: "Sample Item",
        description: "Description for sample item",
        amount: 50000,
        currency: "INR",
        quantity: 1,
      },
    ],
    terms: "Terms and conditions of the invoice.",
    notes: {
      key1: "value1",
      key2: "value2",
    },
  };

  try {
    const invoice = await instance.invoices.create(options);
    console.log(invoice);
    res.status(200).json({ invoice: invoice, message: "Invoice created" });
  } catch (error) {
    console.error(error);
    throw new Error("Invoice creation failed");
  }
});

export const MakePayementCOD = asyncHandler(async (req, res) => {
  const data = req.body;
  const options = {
    amount: data.amount * 100,
    currency: "INR",
    receipt: "parasjisco@gmail.com",
    payment_capture: 0, // For COD, set payment_capture to 0
    notes: {
      paymentType: "Online",
    },
  };
  try {
    const order = await instance.orders.create(options);
    console.log(order);
    return order;
  } catch (error) {
    console.error(error);
  }
});
