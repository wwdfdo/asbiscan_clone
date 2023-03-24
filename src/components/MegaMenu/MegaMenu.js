import React from "react";
import "./MegaMenu.css";
import { MdAccountCircle } from "react-icons/md";
import arbitrum from "../../images/arbitrum.svg";
import bethelsingLogo from "../../images/bethel_logo.png";

function MegaMenu() {
  return (
    <div className="group z-100 h-[100%] flex items-center">
      <ul>
        <li className="rounded-sm px-8 py-1 ">Home</li>
      </ul>
      <ul className="relative">
        <li className="rounded-sm  px-8 py-3 ">
          <button className="w-full text-left flex items-center outline-none focus:outline-none">
            <span className="pr-1 flex-1">Blockchain</span>
            <span className="mr-auto">
              <svg
                className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul
            className="bg-white border rounded-sm absolute top-[47px] 
  transition duration-150 ease-in-out
  min-w-[18rem] py-5 border-t-[3px] border-t-blue-600 z-50
  "
          >
            <li className="px-6 py-1 hover:bg-gray-100">Transactions</li>
            <li className="  px-6 py-1 hover:bg-gray-100">
              Latest L1→L2 Transactions
            </li>
            <li className="px-6 py-1 ">Latest L2→L1 Transactions</li>
            <li className="px-6 py-1 ">Contract Internal Transactions</li>
            <li className="px-6 py-1 ">View Block</li>
            <li className="px-6 py-1 ">View Batches</li>
            <li className="px-6 py-1 ">Top Accounts</li>
            <li className="px-6 py-1 ">Verify Contacts</li>
          </ul>
        </li>
      </ul>
      <ul className="relative">
        <li className="rounded-sm  px-8 py-3 ">
          <button className="w-full text-left flex items-center outline-none focus:outline-none">
            <span className="pr-1 flex-1">Tokens</span>
            <span className="mr-auto">
              <svg
                className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul
            className="bg-white border rounded-sm absolute top-[47px] 
  transition duration-150 ease-in-out
  min-w-[18rem] py-5 border-t-[3px] border-t-blue-600 z-50
  "
          >
            <li className="px-6 py-1 hover:bg-gray-100">ERC20 Top Tokens</li>
            <li className="px-6 py-1 hover:bg-gray-100">
              View ERC20 Transfers
            </li>
            <li className="px-6 py-1 ">ERC721 Top Tokens</li>
            <li className="px-6 py-1 ">View ERC721 Transfers</li>
            <li className="px-6 py-1 ">ERC1155 Top Tokens</li>
            <li className="px-6 py-1 ">View ERC1155 Transfers</li>
          </ul>
        </li>
      </ul>
      <ul className="relative">
        <li className="rounded-sm  px-8 py-3 ">
          <button className="w-full text-left flex items-center outline-none focus:outline-none">
            <span className="pr-1 flex-1">Resources</span>
            <span className="mr-auto">
              <svg
                className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul
            className="bg-white border rounded-sm absolute top-[47px] 
  transition duration-150 ease-in-out
  min-w-[18rem] py-5 border-t-[3px] border-t-blue-600 z-50
  "
          >
            <li className="px-6 py-1 ">Charts & Stats</li>
          </ul>
        </li>
      </ul>
      <ul className="relative">
        <li className="rounded-sm  px-8 py-3 ">
          <button className="w-full text-left flex items-center outline-none focus:outline-none">
            <span className="pr-1 flex-1">More</span>
            <span className="mr-auto">
              <svg
                className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul
            className="bg-white border rounded-sm absolute top-[47px] right-[-100%]
  transition duration-150 ease-in-out
  min-w-[18rem] py-5 border-t-[3px] border-t-blue-600 z-50 flex arbitrum text-sm
  "
          >
            <li className="px-8 py-1  ">
              {" "}
              <li className="  px-8 py-1 font-bold text-lg ">Developers</li>
              <li className="  px-8 py-1 ">APIs</li>
              <li className="px-8 py-1 ">Verify Contract</li>
              <li className="px-8 py-1 ">Byte to Opcode</li>
              <li className="px-8 py-1 ">Contract Diff Checker</li>
              <li className="px-8 py-1 ">Vyper Online Compiler</li>
            </li>
            <li className="px-8 py-1">
              {" "}
              <li className="  px-8 py-1 font-bold text-lg ">Tools</li>
              <li className="  px-8 py-1 ">Label Word Cloud</li>
              <li className="px-8 py-1 ">Verified Signature</li>
              <li className="px-8 py-1 ">Token Approvals</li>
              <li className="px-8 py-1 ">L2 to L1 Relayer</li>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="border-r-[1px] border-black border-opacity-50 pr-3 hover:text-blue-600 cursor-pointer">
        <li className="flex items-center gap-2">
          <div>
            <MdAccountCircle size={24} className="opacity-50" />
          </div>
          <div>Sign In</div>
        </li>
      </ul>

      <ul className="relative ">
        <li className="rounded-sm  px-3 py-1 ">
          <button className="w-full text-left flex items-center outline-none focus:outline-none">
            <span className="pr-1 py-2 flex-1">
              <img
                src={bethelsingLogo}
                className="w-[1.5rem] h-[1.5rem]"
                alt=""
              />
            </span>
          </button>
          <ul
            className="bg-white border rounded-sm absolute top-[47px] right-[100%]
  transition duration-150 ease-in-out
  min-w-[18rem] py-5 border-t-[3px] border-t-blue-600 z-50 arbitrum text-sm
  "
          >
            <li className="px-8 py-1 ">Bethel One</li>
            <li className="  px-8 py-1 ">Bethel Nova</li>
            <li className="px-8 py-1 ">Bethel Goerli</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default MegaMenu;
