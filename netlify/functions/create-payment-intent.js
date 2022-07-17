require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const {
      amount = 0,
      currency = "usd",
      receipt_email = "",
      description = "",
    } = body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: ["card"],
      receipt_email,
      description,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: err.message,
    };
  }
};
