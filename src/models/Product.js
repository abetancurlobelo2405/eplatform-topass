import mongoose, { model, models, Schema } from "mongoose";

const ProductSchema = new Schema({
  productName: String,
  categories: String,
  media: String,
  use: String,
  description: String,
  warranty: Boolean,
  price: Number,
  date: String,
});

const Product = models.User || model("User", ProductSchema);
export default Product;
