import {  createHashRouter, createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import CartPages from "../pages/cart";
import ProductPages from "../pages/product";
import StorePages from "../pages/store";
import ProtectedRoute from "./ProtectedRoute";

const base = "store-shop"
const router =  createHashRouter([
    // {
    //   path: "/",
    //   element: <Main />,
    // },
    {
      path: `${base}/cart`,
      element: <CartPages />,
    },
    {
      path: `/`,
      element:<Main />,
    },
    {
      path: `/store`,
      element: <StorePages />,
    },
    {
      path: `/${base}/products`,
      element:<ProtectedRoute><ProductPages /></ProtectedRoute>,
    },
  ]);

export default router;  