const data = require("../../../../products.json");
export default function handler(req, res) {
  let product = data.find((o) => o.sku === req.query.sku);
  res.status(200).json({
    product,
  });
}
