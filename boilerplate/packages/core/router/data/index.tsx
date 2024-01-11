import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  
  import { LandingPage } from "@zocom/landing-page";
  import { Login } from "@zocom/login";
  import { Order } from "@zocom/order";
  import { Menu } from "@zocom/menu";
  import { Receipt } from "@zocom/receipt";
  import { Eta } from "@zocom/eta";
  import { StaffOrders } from "@zocom/staff-orders";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/menu",
      element: <Menu />,
    },
    {
      path: "/order",
      element: <Order />,
    },
    {
      path: "/order/eta",
      element: <Eta />,
    },
    {
      path: "/order/receipt",
      element: <Receipt />,
    },
    {
      path: "/staff/orders",
      element: <StaffOrders />,
    },
    {
      path: "*",
      element: <p>Page Not Found</p>,
    },
  ]);
  
  export const AppRoutes = () => {
    return <RouterProvider router={router} />;
  };