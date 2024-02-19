import { UserIcon } from "@/app/public";
import clsx from "clsx";
import Image from "next/image";

const transactions = [
  {
    name: "John",
    email: "johndoe@gmail.com",
    phoneNumber: "123-456-7890",
    amount: "$3.52",
    status: "Paid",
    itemName: "Shirt",
    itemId: "123",
  },
  {
    name: "Jane",
    email: "janedoe@gmail.com",
    phoneNumber: "987-654-3210",
    amount: "$5.99",
    status: "Paid",
    itemName: "Pants",
    itemId: "456",
  },
  {
    name: "Alice",
    email: "alicedoe@gmail.com",
    phoneNumber: "555-123-4567",
    amount: "$7.99",
    status: "Pending",
    itemName: "Shoes",
    itemId: "789",
  },
  {
    name: "Bob",
    email: "bobdoe@gmail.com",
    phoneNumber: "111-222-3333",
    amount: "$10.99",
    status: "Cancelled",
    itemName: "Hat",
    itemId: "987",
  },
];

function Transactions() {
  return (
    <div className="flex h-[40%] w-[77.5%] flex-col rounded-md bg-sub-content md:col-span-4">
      <h1 className="text-gray-400"> Latest Transactions</h1>
      <table className="fix  hidden  rounded-md md:table">
        <thead className="rounded-md text-left text-sm font-normal">
          <tr>
            <th scope="col" className="py-5 font-medium sm:pl-6 w-[15%]">
              Name
            </th>
            <th scope="col" className="py-5 font-medium w-[15%]">
              Email
            </th>
            <th scope="col" className="py-5 font-medium w-[15%]">
              Phone
            </th>
            <th scope="col" className="py-5 font-medium w-[10%]">
              Amount
            </th>
            <th scope="col" className="py-5 font-medium ">
              Status
            </th>
            <th scope="col" className="overflow-auto py-5 font-medium">
              Item name
            </th>
            <th scope="col" className="py-5 font-medium">
              Item Id
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0
                  ? "bg-sub-content"
                  : "bg-admin-main-content bg-opacity-70"
              }`}
            >
              <td className="flex items-center py-3 pl-4 ">
                <div className="h-10 w-10"><UserIcon></UserIcon></div>
                <span className="pl-3">{transaction.name}</span>
              </td>
              <td >{transaction.email}</td>
              <td >{transaction.phoneNumber}</td>
              <td >{transaction.amount}</td>
              <td
              >
                <span className={clsx(
                  " w-20 p-2  rounded-md bg-opacity-70  text-white font-medium",
                  transaction.status == "Paid"
                    ? "bg-green-500 bg-opacity-70"
                    : transaction.status == "Pending"
                      ? "bg-yellow-500 bg-opacity-70"
                      : "bg-red-500 bg-opacity-70",
                )}>{transaction.status}</span>
              </td>
              <td >{transaction.itemName}</td>
              <td >{transaction.itemId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
