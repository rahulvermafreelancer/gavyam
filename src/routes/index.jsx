import { Outlet } from "react-router-dom";
import {
  HomePage,
  DemoPage,
  ErrorPage,
  Bolus,
  Dte,
  Dve,
  About,
  Contact,
  Career
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
        { path: "resources", element: <DemoPage /> },
        { path: "career", element: <Career /> }
      ]
    },
    {
      path: "*",
      element: <ErrorPage />
    }
  ];
};

export default paths;
