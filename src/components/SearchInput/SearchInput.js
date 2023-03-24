import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div className="flex flex-col gap-3 ">
      <h3 className="text-white text-2xl font-semibold tracking-widest">
        Bethel Scan
      </h3>
      <form action="" className="flex rounded-md w-[40%]">
        <select
          id="filter"
          name="filter"
          className=" outline-none  rounded-tl-md rounded-bl-md px-2 "
        >
          <option value="Addresses">All Filters</option>
          <option value="Addresses">Addresses</option>
          <option value="Tokens">Tokens</option>
          <option value="Name Tags">Name Tags</option>
          <option value="Labels">Labels</option>
          <option value="Websites">Websites</option>
        </select>
        <input
          type="search"
          id="gsearch"
          name="gsearch"
          placeholder="Search by Address / Txn Hash / Block / Token"
          className=" outline-none w-full flex-1 py-3 px-4  "
        />
        <button
          type="submit"
          className="bg-blue-500 px-4 rounded-tr-md rounded-br-md"
        >
          {" "}
          <span className="text-white font-bold">
            <FaSearch />
          </span>
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
