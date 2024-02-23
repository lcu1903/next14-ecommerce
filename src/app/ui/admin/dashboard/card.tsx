import { TotalUsersIcon } from "@/app/public";
import clsx from "clsx";

function Card() {
  return (
    <div className="flex py-4 w-full">
      <div className="hover:scale-105 mr-4 flex w-full justify-center rounded-md bg-sub-content  p-2 transition-all  hover:bg-opacity-70 ">
        <div className="pt-4">
          <TotalUsersIcon />
        </div>
        <div className="flex flex-col p-2">
          <div className="py-2">
            <h3>Total Users</h3>
          </div>
          <div className="py-2 text-lg font-bold">
            <p>11.025</p>
          </div>
          <span className="py-2">
            {" "}
            <span className={clsx("text-green-400")}>12%</span> more than
            previous week
          </span>
        </div>
      </div>
      <div className="hover:scale-105 mr-4 flex w-full justify-center rounded-md bg-sub-content  p-2 transition-all  hover:bg-opacity-70 ">
        <div className="pt-4">
          <TotalUsersIcon />
        </div>
        <div className="flex flex-col p-2">
          <div className="py-2">
            <h3>Total Users</h3>
          </div>
          <div className="py-2 text-lg font-bold">
            <p>11.025</p>
          </div>
          <span className="py-2">
            {" "}
            <span className={clsx("text-green-400")}>12%</span> more than
            previous week
          </span>
        </div>
      </div>
      <div className="hover:scale-105 mr-4 flex w-full justify-center rounded-md bg-sub-content  p-2 transition-all  hover:bg-opacity-70 ">
        <div className="pt-4">
          <TotalUsersIcon />
        </div>
        <div className="flex flex-col p-2">
          <div className="py-2">
            <h3>Total Users</h3>
          </div>
          <div className="py-2 text-lg font-bold">
            <p>11.025</p>
          </div>
          <span className="py-2">
            {" "}
            <span className={clsx("text-green-400")}>12%</span> more than
            previous week
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
