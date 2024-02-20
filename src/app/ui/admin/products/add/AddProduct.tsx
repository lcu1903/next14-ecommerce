function AddProduct() {
  return (
    
      <div>
        <form action="" className="grid grid-cols-2 gap-4 p-4 ">
          <input
            type="text"
            placeholder="Name"
            className="h-10 rounded-md bg-sub-content"
          />
          <select name="cat" id="cat" className="rounded-md bg-sub-content">
            <option value="general">Choose a Category</option>
            <option value="Electric">Electric</option>
            <option value="Acoustic">Acoustic</option>
            <option value="Classic">Classic</option>
            <option value="Bass">Bass</option>
          </select>

          <input
            type="text"
            placeholder="Price"
            className="h-10 rounded-md bg-sub-content"
          />
          <select name="cat" id="cat" className="rounded-md bg-sub-content">
            <option value="general">Choose a Brand</option>
            <option value="Yamaha">Yamaha</option>
            <option value="Fender">Fender</option>
            <option value="Epiphone">Epiphone</option>
            <option value="Rosen">Rosen</option>
          </select>
          <input
            type="number"
            placeholder="Stock"
            className="h-10 rounded-md bg-sub-content "
          />
          <input
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
          <button type="submit" className="h-10 w-20 rounded-md bg-violet-500 hover:bg-opacity-70">
            Submit
          </button>
        </form>
      </div>
    
  );
}

export default AddProduct;
