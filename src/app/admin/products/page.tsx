import { Metadata } from "next";
import { Product } from "@/app/lib/definition";
import ProductTable from "@/app/ui/admin/products/table";
export const metadata: Metadata = {
  title: "Admin Products",
  description: "Admin Products",
};

function ProductsPage() {
  return (
    <div>
      <ProductTable />
    </div>
  );
}

export default ProductsPage;
