export type Product = {
  id: number;
  name: string;
  description: string;
  amount: number;
  price: string;
  type: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  createdAt: Date | string;
  role: 'admin' | 'customer' | 'guest';
};
