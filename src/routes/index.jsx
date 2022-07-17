import { Outlet } from "react-router-dom";
import {
  HomePage,
  Bolus,
  Dte,
  Dve,
  About,
  Contact,
  Career,
  Resource,
  Dashboard,
  Login,
  Register,
  Reset,
} from "../screens";

import { Footer, NavBar } from "../components";

const ViewWithNavAndFooter = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const paths = () => {
  return [
    {
      path: "/products",
      element: <ViewWithNavAndFooter />,
      children: [
        { path: "bolus", element: <Bolus /> },
        { path: "dve", element: <Dve /> },
        { path: "dte", element: <Dte /> },
      ],
    },
    {
      path: "/",
      element: <ViewWithNavAndFooter />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "contact", element: <Contact /> },
        { path: "about", element: <About /> },
        { path: "resources", element: <Resource /> },
        { path: "career", element: <Career /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "reset", element: <Reset /> },
      ],
    },
  ];
};

export default paths;
