import { useState } from "react";
import Logo from "../Assets/logo.svg";
import { siteMenu } from "../Common/config/site";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { RouteLink } from "../Util/RouterLink";
function NavBar() {
  const [checkNet, setCheckNet] = useState<boolean>(true);
  const navigate = useNavigate();
  const clickNet = () => {
    setCheckNet(!checkNet);
  };
  const togleMenu = (item: RouteLink)=>{
    navigate(item);
  }
  const [clickMenu,setClickMenu]=useState<String>("Tapos");
  return (
    <nav className="relative px-20 py-4 w-full flex justify-between items-center h-[100px]">
      <a className="text-3xl font-bold leading-none" href="#">
        <img src={Logo} />
      </a>
      <ul className="hidden absolute gap-3 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-8">
        {siteMenu.map((item,index) => {
          return (
            <li key={index} onClick={()=>{setClickMenu(item.title); togleMenu(item.link)}}>
              <a className={clsx(
                item.title===clickMenu ? "text-gray-700" : "text-gray-400",`text-sm hover:text-gray-500`
              )} href="#">
                {item.title}
              </a>
            </li>
          );
        })}
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
          className="bg-[#EEC5C7] border-none focus:outline-none h-10 rounded-full mr-3"
        >
          Mainnet
        </button>
        <button
          onClick={clickNet}
          className=" bg-[#EEC5C7] border-none focus:outline-none h-10 rounded-full ml-3"
        >
          Testnet
        </button>
        <span
          className={`bg-[#CA5C3B]  shadow text-white flex items-center justify-center w-1/2 rounded-full h-8 transition-all top-[4px] absolute ${
            checkNet === true ? "left-1" : "left-[70px]"
          } `}
        >
          {checkNet === true ? "Mainnet" : "Testnet"}
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
