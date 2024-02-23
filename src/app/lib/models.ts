import mongoose, { Schema, Document } from "mongoose";

// User Schema
interface IUser extends Document {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  createdAt: Date | string;
  role: "admin" | "customer" | "guest";
}
const userSchema: Schema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  role: { type: String, enum: ["admin", "customer", "guest"], required: true },
});

const User = mongoose.models.Users || mongoose.model<IUser>("User", userSchema);

// Product Schema
interface IProduct extends Document {
  id: number;
  name: string;
  description: string;
  amount: number;
  price: string;
  type: string;
}

const productSchema: Schema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  price: { type: String, required: true },
  type: { type: String, required: true },
});

const Product =
  mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export { User, Product };
