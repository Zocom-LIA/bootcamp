import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  
  import { LandingPage } from "@zocom/landing-page";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: ,
    },
    {
      path: "/menu",
      element: ,
    },
    {
      path: "/order",
      element: ,
    },
    {
      path: "/order/eta",
      element: ,
    },
    {
      path: "/order/receipt",
      element: ,
    },
    {
      path: "/staff/orders",
      element: ,
    },
    {
      path: "*",
      element: <p>Page Not Found</p>,
    },
  ]);
  
  export const AppRoutes = () => {
    return <RouterProvider router={router} />;
  };