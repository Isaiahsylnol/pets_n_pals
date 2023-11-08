import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51JPZmqBNWulKDnZk8mATnfnLJQlqhUBFvpcpJEOFcgb5kKOsygvTuXqYZs4JnaAUOptSYUstr5Rdb3Hkof6YN28100hTboobTC"
);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const params = {
        mode: "subscription",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        line_items: [{ price: req.body, quantity: 1 }],
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/subscriptions/?canceled=true`,
      };
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
