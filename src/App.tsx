import { useState } from "react";
import "./App.css";
import NavBar from "./layout/NavBar";
import HomePage from "./pages/homePage";
import ListCatLeg from "./component/ListCatLeg";

function App() {
  const [active, setIsActive] = useState<boolean>(false);
  return (
    <div className="">
        <NavBar/>
        <ListCatLeg/>
        <HomePage/>
    </div>
  );
}

export default App;
