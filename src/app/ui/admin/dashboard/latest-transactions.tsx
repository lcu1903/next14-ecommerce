function Transactions() {
  return (
    <div className="flex h-[40%] w-[78.5%] flex-col rounded-md bg-sub-content md:col-span-4">
      <h1 className="text-gray-500"> Latest Transactions</h1>
      <div className="flex flex-row items-center justify-between py-4">
        <div className="flex items-center">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold md:text-base">John</p>
            <p className="hidden text-sm  sm:block">johndoe@gmai.com</p>
          </div>
        </div>
        <p className={` truncate text-sm font-medium md:text-base`}>$3.52</p>
      </div>
    </div>
  );
}

export default Transactions;
