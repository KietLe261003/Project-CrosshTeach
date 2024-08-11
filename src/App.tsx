import "./App.css";
import NavBar from "./layout/NavBar";
import HomePage from "./pages/homePage";
import ListCatLeg from "./component/ListCatLeg";


function App() {
  return (
    <div className="w-[98vw] flex flex-col items-center ">
        <NavBar/>
        <ListCatLeg/>
        <HomePage/>
    </div>
  );
}

export default App;
