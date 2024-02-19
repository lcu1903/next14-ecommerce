import { UserIcon } from "@/app/public";

const user = [
  {
    name: "John",
    role: "Admin",
  },
];
function User() {
  return (
    <div className="flex rounded-sm bg-sub-content ">
      {user.map((user) => {
        return (
          <div key={user.name} className="flex items-center justify-center">
            <div className="h-10 w-10 rounded-full"><UserIcon /></div>
            <span>
              <h1>{user.name}</h1>
              <h1 className="text-sm">{user.role}</h1>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default User;
