import { UserType } from "@/app/lib/definition";
import Image from "next/image";

function SingleUserProfile({ users }: { users: UserType[] }) {
  console.log(users);

  return (
    <div>
      <div className="my-4 flex rounded-md bg-sub-content bg-opacity-30 py-4">
        <div className="rounded-md p-4">
          <Image
            src="/no-avatar.jpg"
            alt="siu"
            width={250}
            height={250}
          ></Image>
        </div>
        <div className="w-full pl-10  pr-2">
          {users.map((user, index) => (
            <div key={index} className="rounded-md bg-sub-content p-2 ">
              <div className="flex h-20 flex-col">
                <label className="">Name</label>
                <input
                  type="text"
                  placeholder={user.name}
                  className="h-10 w-full rounded-md bg-admin-main-content p-2 outline"
                ></input>
              </div>
              <div className="flex h-20 flex-col">
                <label>email</label>
                <input
                  type="email"
                  placeholder={user.email}
                  className="h-10 w-full rounded-md bg-admin-main-content p-2 outline"
                ></input>
              </div>
              <div className="flex h-20 flex-col">
                <label>phone</label>
                <input
                  type="text"
                  placeholder={user.phone}
                  className="h-10 w-full rounded-md bg-admin-main-content p-2 outline"
                ></input>
              </div>
              <div className="flex h-20 flex-col">
                <label>Created At</label>
                <input
                  type="text"
                  placeholder={user.createdAt.toString()}
                  className="h-10 w-full rounded-md bg-admin-main-content p-2 outline"
                ></input>
              </div>
              <div className="flex h-20 flex-col">
                <label>Role</label>
                <select className="h-10 w-full rounded-md bg-admin-main-content p-2 outline">
                  <option value="admin">Admin</option>
                  <option value="customer">Customer</option>
                </select>
              </div>
              <button className="h-10 w-20 rounded-md bg-violet-500 hover:bg-opacity-70">
                Update
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleUserProfile;
