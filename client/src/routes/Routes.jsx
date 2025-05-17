import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../components/Home";
import AddSchedule from "../components/AddSchedule";
import AllSchedule from "../components/AllSchedule";
import Login from "../components/Login";
import Register from "../components/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/addSchedule",
        Component: AddSchedule,
      },
      {
        path: "/allSchedule",
        loader: () => fetch("http://localhost:3000/schedule"),
        Component: AllSchedule,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
