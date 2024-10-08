import { ROLE } from "../../../Common/constan";
import { useAuth } from "../../../Common/context/AuthContext";
import { AppButton } from "../../../Component/button/AppButton";

function TestLogin() {
    const {login,logout} = useAuth();
    const Login = ()=>{
        login({
            id: "12424",
            username: "Kiệt Lê",
            email: "Kiet@gmail.com",
            password: "12345678",
            role: ROLE.USER,
        });
    }
    const Logout = ()=>{
        logout();
    }
    return ( 
        <>
            <AppButton onClick={Login}>Đăng nhập nek</AppButton>
            <AppButton onClick={Logout}>Đăng xuất</AppButton>
        </>
     );
}

export default TestLogin;