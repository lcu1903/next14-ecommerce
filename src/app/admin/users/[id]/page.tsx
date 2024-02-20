
import { Metadata } from "next";
import SingleUserProfile from "@/app/ui/admin/users/SingleUserProfile";

export const metadata: Metadata = {
  title: 'Admin User',
  description: 'Admin User',
};

function UserProfilePage() {
  return (
    <SingleUserProfile/>
  );
}

export default UserProfilePage;
