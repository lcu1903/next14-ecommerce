import SingleProductInfo from "@/app/ui/admin/products/SingleProductInfo";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Admin Product Info',
    description: 'Admin Product Info',
  };
function SingleProductPage() {
    return (<div>
        <SingleProductInfo/>
    </div>  );
}

export default SingleProductPage;