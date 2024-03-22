export type ProductType = {
  _id: string;
  name: string;
  description: string;
  amount: number;
  price: string;
  tag: string;
  brand: string;
  type: string;
};

export type UserType  = {
  _id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  createdAt: Date | string;
  role: "admin" | "customer" | "guest";
};

export type OrderType = {
  _id: string;
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
};

