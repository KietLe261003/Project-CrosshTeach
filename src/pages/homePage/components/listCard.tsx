import IconX from "../../../assets/LogoX.svg";
import IConDiscord from "../../../assets/IconDiscord.svg";
import CartItem from "../../../component/cartItem/cartItem";
function ListCard() {
  const listCard = [
    {
      title: "Follow Tapos X",
      content: "Follow Tapos X to earn Points",
      icon: IconX,
    },
    {
      title: "Retweet post on X",
      content: "Retweet Tapos post on X to earn Points",
      icon: IconX,
    },
    {
      title: "Joint VibrantX Discord",
      content: "Retweet a daily tweet to earn HEART",
      icon: IConDiscord,
    },
  ];
  return (
    <>
      <div className="gap-6 flex mt-16">
        {listCard.map((item, index) => {
          return (
            <CartItem
              key={index}
              title={item.title}
              content={item.content}
              icon={item.icon}
            ></CartItem>
          );
        })}
      </div>
    </>
  );
}

export default ListCard;
