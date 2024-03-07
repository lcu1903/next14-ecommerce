
import { getAllUser } from "@/app/lib/actions/users/actions";
import UserTable from "@/app/ui/admin/users/table";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Admin Users",
  description: "Admin Users",
};

async function UsersPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const usersTable = await getAllUser();
  return (
    <div>
      <UserTable users={usersTable} query={query}/>
    </div>
  );
}

export default UsersPage;
