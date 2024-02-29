export type ProductType = {
  _id: number;
  name: string;
  description: string;
  amount: number;
  price: string;
  tag: string;
  brand: string;
  type: string;
};

export type UserType = {
  _id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  createdAt: Date | string;
  role: "admin" | "customer" | "guest";
};
