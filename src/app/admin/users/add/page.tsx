import AddUser from "@/app/ui/admin/users/add/AddUser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Admin Add User',
  description: 'Admin Add User',
};
function AddUserPage() {
  return (
    <AddUser/>
  );
}

export default AddUserPage;
