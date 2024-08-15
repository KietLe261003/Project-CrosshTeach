import { ROLE, ROLEALL } from "../common/constan";
import TestLogin from "../pages/auth";
import HomePage from "../pages/homePage";
import LeaderBoard from "../pages/homePage/leaderboard";
import Wallet from "../pages/homePage/wallet";
const homeRoute = [
    {
        path: "/",
        element: HomePage,
        private: [ROLE.ACCESS]
    },
    {
        path: "/Wallet",
        element: Wallet,
        private: ROLEALL
    },
    {
        path: "/LeaderBoard",
        element: LeaderBoard,
        private: [ROLE.ADMIN]
    },
    {
        path: "/Login",
        element: TestLogin,
        private: [ROLE.LOGIN]
    }
]
export default homeRoute;