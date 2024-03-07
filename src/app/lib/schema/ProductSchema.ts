import mongoose, { Document, Schema } from "mongoose";

interface ProductDocument extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  description: string;
  amount: number;
  price: string;
  type: string;
  tag: string;
  brand: string;
}

// UUID
const ProductSchema = new Schema<ProductDocument>(
  {
    _id: {
      type: Schema.Types.ObjectId || String,
      default: function () {
        return new mongoose.Types.ObjectId();
      },
    },
    name: { type: String, required: true },
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    price: { type: String, required: true },
    type: { type: String, required: true },
    tag: { type: String, required: true },
    brand: { type: String, required: true },
  },
  { versionKey: false },
);

const Product =
  mongoose.models.Product ||
  mongoose.model<ProductDocument>("Product", ProductSchema);

export type { ProductDocument };
export default Product;
