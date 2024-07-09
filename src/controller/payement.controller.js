import Razorpay from "razorpay";
import { asyncHandler } from "../utils/asyncHandler.js";
import axios from "axios";

var instance = new Razorpay({
  key_id: process.env.PAYEMET_KEY_ID,
  key_secret: process.env.PAYEMENT_KEY_SECRATE,
});

export const MakePayement = asyncHandler(async (req, res) => {
  try {
    const data = req.body;
    const options = {
      amount: data.amount * 100,
      currency: "INR",
      receipt: "parasjisco@gmail.com",
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
