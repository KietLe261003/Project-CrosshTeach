import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import ListCatLeg from "../component/ListCatLeg";

function DefaultLayout() {
    return ( 
        <div className="mx-auto flex flex-col items-center min-h-[100vh] bg-gradient-to-b from-white to-[#EADBD7]">
            <NavBar/>
            <ListCatLeg/>
            <Outlet/>
        </div>
     );
}

export default DefaultLayout;