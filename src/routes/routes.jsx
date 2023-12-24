import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Products from "../Components/Products/Products";
import ProductDetails from "../Components/Products/ProductDetails/ProductDetails";
import LogIn from "../Components/LogIn/LogIn";
import Register from "../Components/Register/Register";
import Home from "../Components/Home/Home";
import Cart from "../Components/Cart/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "logIn",
        element: <LogIn />
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path:"products/:id",
        element: <ProductDetails />,
      },
    {
      path: "/cart",
      element: <Cart />,
    }
    ]
  },
]);

export default router;
