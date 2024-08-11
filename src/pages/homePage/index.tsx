import { useEffect, useState } from "react";
import { AppButton } from "../../component/button/AppButton";
import { homeService } from "../../services/homeServices";
import { User } from "../../type/user";
import CartItem from "../../component/cartItem/cartItem";
// import { User } from "../../type/user";
import IconX from "../../assets/LogoX.svg";
import IConDiscord from "../../assets/IconDiscord.svg";
function HomePage() {
  const [listUser, setListUser] = useState<User[]>([]);
  const getUser = async () => {
    try {
      const rq = await homeService.getAllUser();
      console.log(rq.data);
      setListUser(rq.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  const clikBtn = () => {
    alert("Click thử");
  };
  const listCard = [
    {
      title: "Follow Tapos X",
      content: "Follow Tapos X to earn Points",
      icon: IconX
    },
    {
      title: "Retweet post on X",
      content: "Retweet Tapos post on X to earn Points",
      icon: IconX
    },
    {
      title: "Joint VibrantX Discord",
      content: "Retweet a daily tweet to earn HEART",
      icon: IConDiscord
    }
  ];
  return (
    <div className="flex flex-col items-center">
      <span className="mt-16 mb-6 gap-4 text-5xl font-bold">Social Tasks</span>
      <span className="text-[#6B6B6B] text-xl mb-5">
        Complete the Social Tasks to earn extra $Heart token
      </span>
      <div className=" flex flex-col items-start justify-center w-[1008px] h-[200px] px-6 py-10 bg-white border-[2px] border-[#EEC5C7] rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Connect Your X account
          </h5>
        </a>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          You need connect your X account to join Social Task
        </p>
        <a className="mb-3 flex justify-center items-center font-normal text-blue-400 dark:text-gray-400">
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                fill="currentColor"
                d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122l5.658 5.657Z"
              />
            </g>
          </svg>
        </a>
        <AppButton onClick={clikBtn}>Connect your X account</AppButton>
      </div>
      <div className="gap-6 flex mt-16">
        {
            listCard.map((item,index)=>{
              return <CartItem key={index} title={item.title} content={item.content} icon={item.icon}></CartItem>
            })
        }
      </div>
      <div>Xin chào</div>
      {listUser.length > 0 &&
        listUser.map((item, index) => (
          <p key={index} className="text-black ">
            {item.username}
          </p>
        ))}
    </div>
  );
}

export default HomePage;
