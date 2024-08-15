import TitlePage from "./components/title";
import ConnectAccount from "./components/connectAccount";
import ListCard from "./components/listCard";
import TableUser from "./components/tableUser";
function HomePage() {
  
  
  return (
    <div className="flex flex-col items-center">
      <TitlePage/>
      <ConnectAccount/>
      <ListCard/>
      <div>Xin chào</div>
      <TableUser/>
    </div>
  );
}

export default HomePage;
