import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  username: string;
  email: string;
  phone: string;
  createdAt: Date | string;
  role: "admin" | "customer" | "guest";
}
const userSchema = new Schema<IUser>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: function () {
        return new mongoose.Types.ObjectId();
      },
    },
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    role: {
      type: String,
      enum: ["admin", "customer", "guest"],
      required: true,
    },
  },
  { versionKey: false },
);

const User = mongoose.models.User ||mongoose.model<IUser>("User", userSchema);
export default User;
