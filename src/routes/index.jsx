import { Outlet } from "react-router-dom";
import { HomePage, DemoPage, ErrorPage } from "../screens";

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
      children: [
        { path: "", element: <DemoPage /> },
        { path: "bolus", element: <DemoPage /> },
        { path: "dve", element: <DemoPage /> },
        { path: "dte", element: <DemoPage /> },
      ],
    },
    {
      path: "/",
      element: <ViewWithNavAndFooter />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "contact", element: <DemoPage /> },
        { path: "about", element: <DemoPage /> },
        { path: "resources", element: <DemoPage /> },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];
};

export default paths;
