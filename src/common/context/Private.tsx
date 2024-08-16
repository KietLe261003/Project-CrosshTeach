import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { RouteLink } from "../../util/RouterLink";
import { ROLE } from "../constan";
interface Props {
    roles: String[]
}
const PrivateRoute : React.FC<Props>=({ roles })=> {

    if(roles.length === 1 && (roles[0]===ROLE.PUBLIC))
        return <Outlet/>
    
    const {user} = useAuth();
    if(!user)
        return <Navigate to={RouteLink.Login}/>

    if(roles && !roles.includes(user.role || "") )
        return <Navigate to={RouteLink.Home}/>
    return <Outlet/>
}

export default PrivateRoute 