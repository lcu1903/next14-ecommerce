import { TotalUsersIcon } from "@/app/public";
import clsx from "clsx";

function Card() {
    return ( 
        <div className="flex py-4 ">
            <div className="flex bg-sub-content rounded-md p-2 w-[25%] justify-center mr-4 ">
                <div className="pt-4"><TotalUsersIcon/></div>
                <div className="flex flex-col p-2">
                    <div className="py-2">
                        <h3>Total Users</h3>
                    </div>
                    <div className="py-2 text-lg font-bold">
                        <p>11.025</p>
                    </div>
                    <span className="py-2"> <span className={clsx('text-green-400')}>12%</span> more than previous week</span>
                </div>
            </div>
            <div className="flex bg-sub-content rounded-md p-2 w-[25%] justify-center mr-4 ">
                <div className="pt-4"><TotalUsersIcon/></div>
                <div className="flex flex-col p-2">
                    <div className="py-2">
                        <h3>Total Users</h3>
                    </div>
                    <div className="py-2 text-lg font-bold">
                        <p>11.025</p>
                    </div>
                    <span className="py-2"> <span className={clsx('text-green-400')}>12%</span> more than previous week</span>
                </div>
            </div>
            <div className="flex bg-sub-content rounded-md p-2 w-[25%] justify-center mr-4  ">
                <div className="pt-4"><TotalUsersIcon/></div>
                <div className="flex flex-col p-2">
                    <div className="py-2">
                        <h3>Total Users</h3>
                    </div>
                    <div className="py-2 text-lg font-bold">
                        <p>11.025</p>
                    </div>
                    <span className="py-2"> <span className={clsx('text-green-400')}>12%</span> more than previous week</span>
                </div>
            </div>
        </div>
     );
}

export default Card;