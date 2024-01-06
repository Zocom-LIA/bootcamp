import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  
  import { Menu } from "@zocom/menu";
  import { Cart } from "@zocom/cart";
  // import { DashboardPage } from "@zocom/dashboard-page";
  // import { OrderStatusPage } from "@zocom/orderStatus-page";
  // import { ReciptPage } from "@zocom/recipt-page";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Menu />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    // {
    //   path: "/status",
    //   element: <OrderStatusPage />,
    // },
    // {
    //   path: "/dashboard",
    //   element: <DashboardPage />,
    // },
    // {
    //   path: "/recipt",
    //   element: <ReciptPage />,
    // },
    {
      path: "*",
      element: <p>Page Not Found</p>
    },
  ]);
  
  export const AppRoutes = () => {
    return <RouterProvider router={router} />;
  };