"use client"

import { BellIcon, InboxIcon, SearchIcon } from "@/app/public";
import { usePathname } from "next/navigation";


export default function AdminNavBar() {
  const pathname = usePathname();

  return (
    <div className="flex items-center  bg-sub-content text-text rounded-md px-2 justify-between ">
      <div className="capitalize w-[10%]">{pathname === "/admin" ? "Dashboard" : pathname.split("/").pop()}</div>
      <div className="flex items-center bg-admin-main-content scale-90 justify-between w-[70%] rounded-md p-1 ">
      <SearchIcon/>
        <input type="text" className=" bg-admin-main-content outline-none w-full p-1  ">
          
        </input>
      </div>
      <div className="flex w-[5%] justify-evenly ">
        <InboxIcon/>
        <BellIcon/>
      </div>
    </div>
  );
}
