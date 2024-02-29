import Pagination from "@/app/ui/admin/pagination";
import Search from "@/app/ui/admin/search";
import Link from "next/link";
import { ProductType } from "@/app/lib/definition";
import { PlusIcon } from "@/app/public";

async function ProductTable({ products }: { products: ProductType[] }) {
  
  return (
    <div>
      <div className=" p-2">
        <Search placeholder={"Search for a product"} />
      </div>
      <div className="rounded-md bg-sub-content p-2 ">
        <div className="flex justify-between">
          <div className="pb-1 italic">Products</div>
          <Link href={"/admin/products/add"}>
            <button className="flex w-full items-center justify-center rounded-md  bg-violet-500 p-1 font-medium text-white hover:bg-opacity-70">
              <PlusIcon /> Add
            </button>
          </Link>
        </div>
        <table className="m-2 h-max w-[70%] rounded-md bg-sub-content outline outline-offset-4">
          <thead>
            <tr className="rounded-md text-left text-sm font-normal  ">
              <th scope="col ">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Amount</th>
              <th scope="col">Price</th>
              <th scope="col">Tag</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0
                    ? "bg-sub-content"
                    : "bg-admin-main-content bg-opacity-70"
                }`}
              >
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.type}</td>
                <td>{product.amount}</td>
                <td>{product.price}</td>
                <td>#{product.tag}</td>
                <td>
                  <Link href={`/admin/products/${product._id}`}>
                    <button className="button bg-green-500  ">View</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
}

export default ProductTable;
