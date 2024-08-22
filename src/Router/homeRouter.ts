import { ROLE, ROLEALL } from "../Common/constan";
import TestLogin from "../Pages/ClientPage/Auth";
import HomePage from "../Pages/ClientPage/HomePage";
import LeaderBoard from "../Pages/ClientPage/HomePage/leaderboard";
import Wallet from "../Pages/ClientPage/HomePage/wallet";

const homeRoute = [
    {
        path: "/",
        element: HomePage,
        private: [ROLE.PUBLIC]
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
        private: [ROLE.PUBLIC]
    }
]
export default homeRoute;