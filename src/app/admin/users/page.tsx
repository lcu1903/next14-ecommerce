
import UserTable from "@/app/ui/admin/users/table";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Admin Users",
  description: "Admin Users",
};


function UsersPage() {
  return (
    <div>
      <UserTable/>
    </div>
  );
}

export default UsersPage;
