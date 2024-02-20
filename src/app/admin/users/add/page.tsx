function AddUserPage() {
  return (
    <div>
      <form action="" className="grid grid-cols-2 gap-4 p-4 ">
        <input
          type="text"
          placeholder="Name"
          className="h-10 rounded-md bg-sub-content"
        />
        <input
          type="text"
          placeholder="Username"
          className="h-10 rounded-md bg-sub-content"
        />
        <input
          type="email"
          placeholder="Email"
          className="h-10 rounded-md bg-sub-content"
        />
        <input
          type="password"
          placeholder="Password"
          className="h-10 rounded-md bg-sub-content"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="h-10 rounded-md bg-sub-content"
        />
        <select
          id="role"
          name="role"
          className="h-10 rounded-md bg-sub-content"
        >
          <option value="general">Role</option>
          <option value="admin">Admin</option>
          <option value="customer">Customer</option>
        </select>
        <button type="submit" className="h-10 w-20 rounded-md bg-violet-500">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddUserPage;
