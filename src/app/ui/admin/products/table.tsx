import Pagination from "@/app/ui/admin/pagination";
import Search from "@/app/ui/admin/search";
import Link from "next/link";
import { Product } from "@/app/lib/definition";
import { PlusIcon } from "@/app/public";

const products: Product[] = [
  {
    id: 1,
    name: "Guitar 1",
    description: "description A",
    amount: 5,
    price: "100",
    type: "Electric",
  },
  {
    id: 2,
    name: "Guitar 2",
    description: "description B",
    amount: 3,
    price: "150",
    type: "Acoustic",
  },
  {
    id: 3,
    name: "Guitar 3",
    description: "description C",
    amount: 2,
    price: "200",
    type: "Electric",
  },
  {
    id: 4,
    name: "Guitar 4",
    description: "description D",
    amount: 7,
    price: "120",
    type: "Acoustic",
  },
  {
    id: 5,
    name: "Guitar 5",
    description: "description E",
    amount: 4,
    price: "180",
    type: "Electric",
  },
];
function ProductTable() {
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
              <th scope="col">Type</th>
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
                <td>{product.type}</td>
                <td>{product.amount}</td>
                <td>{product.price}</td>
                <td>
                  <Link href={"/"}>
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
