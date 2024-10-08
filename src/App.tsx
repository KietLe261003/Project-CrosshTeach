import "./App.css";
import { Route, Routes } from "react-router-dom";
import { homeRoute } from "./Router";
import DefaultLayout from "./Layout/DefaultLayout";
import PrivateRoute from "./Common/context/Private";
function App() {
  return (
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          {homeRoute.map((route,index)=>(
              <Route key={index} element={<PrivateRoute roles={route.private}/>}>
                <Route key={index} path={route.path} element={<route.element/>}/>
              </Route>
          ))}
        </Route>
      </Routes>
  );
}

export default App;
