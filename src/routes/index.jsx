import { Outlet } from "react-router-dom";
import {
  HomePage,
  Bolus,
  Dte,
  Dve,
  About,
  Contact,
  Career,
  Resource
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
        { path: "dte", element: <Dte /> }
      ]
    },
    {
      path: "/",
      element: <ViewWithNavAndFooter />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "contact", element: <Contact /> },
        { path: "about", element: <About /> },
        { path: "resources", element: <Resource /> },
        { path: "career", element: <Career /> }
      ]
    }
  ];
};

export default paths;
