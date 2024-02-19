import { Metadata } from 'next';
import Pagination from "@/app/ui/admin/pagination";
import Search from "@/app/ui/admin/search";
import Link from "next/link";
export const metadata: Metadata = {
  title: 'Admin Products',
  description: 'Admin Products',
};


const products = [
  { id: 1, name: "Guitar 1", amount: 5, price: 100 },
  { id: 2, name: "Guitar 2", amount: 3, price: 150 },
  { id: 3, name: "Guitar 3", amount: 2, price: 200 },
  { id: 4, name: "Guitar 4", amount: 7, price: 120 },
  { id: 5, name: "Guitar 5", amount: 4, price: 180 },
];




function ProductsPage() {
  return (
    <div>
      <div className=" p-2">
        <Search placeholder={"Search for a product"} />
      </div>
      <div>
        <div>Customers</div>
        <table className="w-[70%] rounded-md bg-sub-content">
          <thead>
            <tr className="rounded-md text-left text-sm font-normal">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Price</th>
              
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0
                    ? "bg-sub-content"
                    : "bg-admin-main-content bg-opacity-70"
                }`}
              >
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.amount}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
         <Pagination />
          
        </table>
      </div>
    </div>
  );
}

export default ProductsPage;