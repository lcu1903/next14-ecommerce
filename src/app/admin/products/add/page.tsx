import AddProduct from "@/app/ui/admin/products/add/AddProduct";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Admin Add Product',
  description: 'Admin Add Product',
};
function AddProductPage() {
  return (
    <AddProduct/>
  );
}

export default AddProductPage;
