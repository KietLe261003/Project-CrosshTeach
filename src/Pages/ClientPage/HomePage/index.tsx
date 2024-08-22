import TitlePage from "./components/title";
import ConnectAccount from "./components/connectAccount";
import ListCard from "./components/listCard";
import TableUser from "./components/tableUser";
import { useAppDispatch } from "../../../Hooks/store";
import { setOpenModal } from "../../../Redux/slice/homeSlice";
import ModalHome from "../../../Component/Modal/Modal";
function HomePage() {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col items-center">
      <TitlePage/>
      <ConnectAccount/>
      <ListCard/>
      <div>Xin chào</div>
      <button onClick={()=>{dispatch(setOpenModal())}}>Open modal</button>
      <ModalHome></ModalHome>
      <TableUser/>
    </div>
  );
}

export default HomePage;
