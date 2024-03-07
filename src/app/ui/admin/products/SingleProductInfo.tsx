"use client"
import { ProductType } from "@/app/lib/definition";
import Image from "next/image";


function SingleProductInfo({ products }: { products: ProductType[] }) {
  return (
    <div>
      <div className="my-4 flex rounded-md bg-sub-content bg-opacity-30 py-4">
        <div className="rounded-md p-4">
          <Image
            src="/no-avatar.jpg"
            alt="siu"
            width={250}
            height={250}
          ></Image>
        </div>
        <div className="w-full pl-10  pr-2">
          {products?.map((product, index) => (
            <div key={index} className="rounded-md bg-sub-content p-2 ">
              <div className="flex h-20 flex-col">
                <label className="">Name</label>
                <input
                  type="text"
                  placeholder={product.name}
                  className="h-10 w-full rounded-md bg-admin-main-content p-2 outline"
                ></input>
              </div>
              <div className="flex h-20 flex-col">
                <label>Description</label>
                <textarea
                  className="h-10 w-full rounded-md bg-admin-main-content p-2 outline"
                  defaultValue={product.description}
                ></textarea>
              </div>
              <div className="flex h-20 flex-col">
                <label>Amount</label>
                <input
                  type="number"
                  placeholder={product.amount.toString()}
                  className="h-10 w-full rounded-md bg-admin-main-content p-2 outline"
                ></input>
              </div>
              <div className="flex h-20 flex-col">
                <label>Price</label>
                <input
                  type="text"
                  placeholder={product.price}
                  className="h-10 w-full rounded-md bg-admin-main-content p-2 outline"
                ></input>
              </div>
              <div className="flex h-20 flex-col">
                <label>Type</label>
                <select className="h-10 w-full rounded-md bg-admin-main-content p-2 outline">
                  <option value="Electric">Electric</option>
                  <option value="Acoustic">Acoustic</option>
                  <option value="Classic">Classic</option>
                  <option value="Bass">Bass</option>
                </select>
              </div>
              <button className="h-10 w-20 rounded-md bg-violet-500 hover:bg-opacity-70">
                Update
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleProductInfo;
