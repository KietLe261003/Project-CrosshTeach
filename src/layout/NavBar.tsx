import { useState } from "react";
import Logo from "../assets/logo.svg";
function NavBar() {
  const [checkNet, setCheckNet] = useState<boolean>(true);
  const clickNet = () => {
    setCheckNet(!checkNet);
  };
  return (
    <nav className="relative px-20 py-4 w-[100vw] flex justify-between items-center h-[100px]">
      <a className="text-3xl font-bold leading-none" href="#">
        <img src={Logo} />
      </a>
      <ul className="hidden absolute gap-3 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-8">
        <li>
          <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
            Tapos
          </a>
        </li>

        <li>
          <a className="text-sm text-blue-600 font-bold" href="#">
            Wallet
          </a>
        </li>

        <li>
          <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
            Leaderboard
          </a>
        </li>

        <li>
          <a
            className="text-sm font-semibold text-gray-400 hover:text-gray-500"
            href="#"
          >
            Shop
          </a>
        </li>
        <li>
          <select
            className="text-sm font-semibold text-red-500 hover:text-gray-500"
            content="More"
          >
            <option>More</option>
          </select>
        </li>
      </ul>
      <div className="mx-8 shadow rounded-full h-10 mt-4 flex p-2 bg-[#EEC5C7] relative items-center">
        <button
          onClick={clickNet}
          className="bg-[#EEC5C7] border-none focus:outline-none h-10"
        >
          Mainnet
        </button>
        <button
          onClick={clickNet}
          className=" bg-[#EEC5C7] border-none focus:outline-none h-10"
        >
          Testnet
        </button>
        <span
          className={`bg-[#CA5C3B]  shadow text-white flex items-center justify-center w-1/2 rounded-full h-8 transition-all top-[4px] absolute ${
            checkNet === true ? "left-1" : "left-[100px]"
          } `}
        >
          {checkNet===true ? "Mainnet" : "Testnet"}
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
