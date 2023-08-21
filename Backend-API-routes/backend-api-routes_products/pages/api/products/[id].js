import { getProductById } from "../../../services/productServices";

export default function handler(req, res) {
  const { id } = req.query;
  const product = getProductById(id);
  res.status(200).json(product);

  if (!product) {
    return res.status(404).json({ status: "Product not found" });
  }
}
