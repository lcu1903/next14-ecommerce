"use client";
import { createProduct } from "@/app/lib/actions/products/actions";
function AddProduct() {
  return (
    
      <form
        action={createProduct}
        className="grid grid-cols-2 gap-4 p-4 "
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="h-10 rounded-md bg-sub-content"
          required
        />
        
        <select name="type" id="type" className="rounded-md bg-sub-content">
          <option value="general">Choose a Category</option>
          <option value="Electric">Electric</option>
          <option value="Acoustic">Acoustic</option>
          <option value="Classic">Classic</option>
          <option value="Bass">Bass</option>
        </select>

        <input
          name="price"
          id="price"
          type="text"
          placeholder="Price"
          className="h-10 rounded-md bg-sub-content"
          required
        />
        <select name="brand" id="brand" className="rounded-md bg-sub-content">
          <option value=" ">Choose a Brand</option>
          <option value="Yamaha">Yamaha</option>
          <option value="Fender">Fender</option>
          <option value="Epiphone">Epiphone</option>
          <option value="Rosen">Rosen</option>
        </select>
        <input
          name="amount"
          id="amount"
          type="text"
          placeholder="Stock"
          className="h-10 rounded-md bg-sub-content "
        />
        <input
          name="tag"
          id="tag"
          type="text"
          placeholder="Tag"
          className="h-10 rounded-md bg-sub-content "
        />
        <textarea
          name="description"
          id="description"
          cols={30}
          rows={10}
          placeholder="Description"
          className="col-span-2 h-40 resize-none rounded-md bg-sub-content p-2"
        ></textarea>
        <button
          type="submit"
          className="h-10 w-20 rounded-md bg-violet-500 hover:bg-opacity-70"
        >
          Submit
        </button>
      </form>
    
  );
}

export default AddProduct;
