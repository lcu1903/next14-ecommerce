import { User } from "@/app/lib/definition";
import { PlusIcon } from "@/app/public";
import Pagination from "@/app/ui/admin/pagination";
import Search from "@/app/ui/admin/search";
import Link from "next/link";
const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    createdAt: "2022-01-01",
    role: "admin",
    username: "johndoe",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "987-654-3210",
    createdAt: "2022-01-02",
    role: "customer",
    username: "janesmith",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
    phone: "555-123-4567",
    createdAt: "2022-01-03",
    role: "customer",
    username: "alicejohnson",
  },
];
function UserTable() {
  return (
    <div>
      <div className=" p-2">
        <Search placeholder={"Search for a user"} />
      </div>
      <div className="rounded-md bg-sub-content p-4">
        <div className="flex justify-between">
          <div className="pb-1 italic">Customers</div>
          <Link href={"/admin/users/add"}>
            <button className="flex w-full items-center justify-center rounded-md  bg-violet-500 p-1 font-medium text-white hover:bg-opacity-70">
              <PlusIcon /> Add
            </button>
          </Link>
        </div>
        <table className="h-max w-[70%] rounded-md bg-sub-content outline outline-offset-4  ">
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
                    : "bg-admin-main-content bg-opacity-70 "
                }`}
              >
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td>{user.createdAt.toString()}</td>
                <td>
                  <Link href={`/admin/users/${user.id}`}>
                    <button className="button bg-green-500  ">View</button>
                  </Link>
                  <button className="button bg-red-400  ">Delete</button>
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

export default UserTable;
