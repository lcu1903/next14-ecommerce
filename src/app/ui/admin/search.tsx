import { SearchIcon } from "@/app/public";
function Search({placeholder } : {placeholder: string}) {
    return ( 
        <div className="flex items-center bg-sub-content scale-90 justify-between w-[70%] rounded-md p-1 ">
        <SearchIcon/>
        <input type="text" className=" bg-admin-main-content outline-none w-full p-1 rounded-md  " placeholder={placeholder}>
          
        </input>
      </div>
     );
}

export default Search;