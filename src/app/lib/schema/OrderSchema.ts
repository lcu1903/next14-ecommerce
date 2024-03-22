//create a order product schema
import mongoose, { Schema, model } from 'mongoose';

interface OrderDocument extends Document {
    _id: mongoose.Types.ObjectId;
    productId: string;
    productName: string;
    productPrice: string;
    productQuantity: number;
    totalAmount: string;
    orderDate: string;
    deliveryDate: string;
    status: string;
    userId: string;
    address: string;
    contact: string;
    email: string;

}

const OrderSchema = new Schema<OrderDocument>({
    _id: {
        type: Schema.Types.ObjectId || String,
        default: function () {
            return new mongoose.Types.ObjectId();
        },
    },
    productId: { type: String, required: true },
    productName: { type: String, required: true },
    productPrice: { type: String, required: true },
    productQuantity: { type: Number, required: true },
    totalAmount: { type: String, required: true },
    orderDate: { type: String, required: true },
    deliveryDate: { type: String, required: true },
    status: { type: String, required: true },
    userId: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
}, { versionKey: false });

const Order = mongoose.models.Order ||model<OrderDocument>('Order', OrderSchema);

export type { OrderDocument };
export default Order;
