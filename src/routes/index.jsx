import {  Outlet } from 'react-router-dom';
import {
 HomePage, DemoPage  , ErrorPage
} from "../screens"

import {   NavBar ,  Footer } from "../components"


const ViewWithNavAndFooter = () =>{
    return (
      <>
      <NavBar />
      <Outlet />
      <Footer />
      </>
    )
  }

  
export  default ()  => {
    return [
      {
        path:"/products",
        children: [
          { path: '', element: <DemoPage /> },
          { path: 'bolus', element: <DemoPage /> },
          { path: 'dve', element: <DemoPage /> },
          { path: 'dte', element: <DemoPage /> },
        ],
      },
      {
        path: '/',
        element: 
          <ViewWithNavAndFooter />,
        children: [
          { path: '', element: <HomePage  /> },
          { path: 'contactus', element: <DemoPage /> },
          { path: 'aboutus', element: <DemoPage /> },
          { path: 'resources', element: <DemoPage /> },
        ],
      },
      {
          path:"*",
          element:<ErrorPage /> 
      }
    ]
}