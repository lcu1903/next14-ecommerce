import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login",
};
function LoginPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-admin-main-content">
      <form
        action=""
        className="flex h-[40%] w-[40%] flex-col items-center justify-center gap-4 rounded-md bg-sub-content bg-opacity-40 shadow-sm  shadow-blue-400"
      >
        <h1 className="text-4xl font-bold text-text">Login</h1>
        <div className=" w-full rounded-md p-1">
          <input
            type="text"
            placeholder=" "
            className="peer  h-10 w-full rounded-md bg-sub-content"
          />
          <label
            className="pointer-events-none left-[30%] p-2
            absolute scale-75 text-gray-400 -translate-y-8 
            peer-placeholder-shown:scale-100 peer-focus:-translate-y-8  peer-placeholder-shown:translate-y-1 -translate-x-1
            peer-focus:scale-75 peer-focus:text-text
            transition-all duration-150"
            
          >
            Username
          </label>
        </div>
        <div className=" w-full rounded-md mt-2 p-1">
          <input
            type="password"
            placeholder=" "
            className="peer  h-10 w-full rounded-md bg-sub-content"
          />
          <label
            className="pointer-events-none left-[30%] p-2
            absolute scale-75 text-gray-400 -translate-y-8
            peer-placeholder-shown:scale-100 peer-focus:-translate-y-8  peer-placeholder-shown:translate-y-1 -translate-x-1
            peer-focus:scale-75 peer-focus:text-text
            transition-all duration-150"
            
            >
            Password
          </label>
        </div>
        <button className="h-10 w-full bg-violet-500 rounded-md">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
