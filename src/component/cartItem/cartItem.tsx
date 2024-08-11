import Heart from "../../assets/Hearts.svg";
import LegCat from "../../assets/CatLeg.svg";
import Ball from "../../assets/Ball.svg";
import Fish from "../../assets/Fish.svg";
interface CartItemProps {
    title: string;
    content: string;
    icon: string;
  }
const CartItem = ({title, content,icon}:CartItemProps) => {
  return (
    <div className=" relative h-[276px] w-[320px] border-[2px] border-[#EEC5C7] bg-[#FFFFFF] rounded-3xl flex flex-col items-start justify-center px-6">
      <img src={LegCat} className="absolute right-0 top-0"></img>
      <img src={Ball} className=" absolute right-[60px] top-[15px]"></img>
      <img src={Fish} className=" absolute right-[5px] top-[65px]"></img>
      <img src={icon} className="mb-5"/>
      <a href="#">
        <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="font-normal mb-10 text-gray-700 text-sm dark:text-gray-400">
        {content}
      </p>
      <div className="flex gap-5">
        <button className="inline-flex gap-2 items-center px-5 py-2 text-sm font-medium text-center text-black bg-[#F5EEEC] rounded-full hover:text-white border-none focus:outline-none">
            +20
            <img src={Heart}/>
        </button>
        <button className="inline-flex gap-2 items-center px-14 py-2 text-sm font-medium text-center text-[#b0b9c5] rounded-full border-[2px] border-[#b0b9c5] bg-white focus:outline-none">
            Follow
        </button>
      </div>
    </div>
  );
};
export default CartItem;
