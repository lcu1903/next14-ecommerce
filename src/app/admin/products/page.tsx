import { Metadata } from "next";
import { ProductType } from "@/app/lib/definition";
import  ProductTable from "@/app/ui/admin/products/table";
import { getAllProduct } from "@/app/lib/actions/products/actions";
export const metadata: Metadata = {
  title: "Admin Products",
  description: "Admin Products",
};


async function ProductsPage() {
  const productTable  = await getAllProduct();
  

  return (
    <div>
      <ProductTable products={productTable} />
    </div>
  );
}

export default ProductsPage;
