import Pagination from "@/app/ui/admin/pagination";
import Search from "@/app/ui/admin/search";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Admin Users",
  description: "Admin Users",
};
const users = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    createdAt: "2022-01-01",
    role: "admin",
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "987-654-3210",
    createdAt: "2022-01-02",
    role: "customer",
  },
  {
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
    phone: "555-123-4567",
    createdAt: "2022-01-03",
    role: "customer",
  },
  // Add more user data here if needed
];

// Render the user data

function Users() {
  return (
    <div>
      <div className=" p-2">
        <Search placeholder={"Search for a user"} />
      </div>
      <div className="bg-sub-content p-4 rounded-md">
        <div className="italic">Customers</div>
        <table className="w-[70%] rounded-md border-2 border-gray-500 bg-sub-content  ">
          <thead>
            <tr className="rounded-md text-left text-sm font-normal">
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Role</th>
              <th scope="col">Created At</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0
                    ? "bg-sub-content"
                    : "bg-admin-main-content bg-opacity-70"
                }`}
              >
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td>{user.createdAt}</td>
                <td>
                  <Link href={"/"}>
                    <button className="rounded-sm bg-green-400 bg-opacity-70 p-2">
                      View
                    </button>
                  </Link>
                  <button className="ml-2 rounded-sm bg-red-400 bg-opacity-70 p-2 ">
                    Delete
                  </button>
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

export default Users;
