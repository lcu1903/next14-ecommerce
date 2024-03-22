
import { UserType } from "@/app/lib/definition";
import { fetchUserData } from "@/app/lib/fetch/users/data";
import UserTable from "@/app/ui/admin/users/table";
import { Metadata } from "next";
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
  const query = searchParams?.query || "";
  const usersTable: UserType[] = await fetchUserData();
  return (
    <div>
      <UserTable users={usersTable} query={query} />
    </div>
  );
}

export default UsersPage;
