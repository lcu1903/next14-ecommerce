import { Metadata } from "next";
import SingleUserProfile from "@/app/ui/admin/users/SingleUserProfile";
import { getUserById } from "@/app/lib/actions/users/actions";

export const metadata: Metadata = {
  title: "Admin User",
  description: "Admin User",
};

async function UserProfilePage({ params }: { params: { id: string } }) {
  const id = params.id;
  console.log(id);

  const userProfile = await getUserById(id);
  return <SingleUserProfile users={userProfile} />;
}

export default UserProfilePage;
