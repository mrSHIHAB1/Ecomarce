import { createBrowserRouter } from "react-router-dom";
import App from "../App";


import Home from "../pages/Home/Home";
import ProductDetails from "../pages/Product/ProductDetails";
import ProductPage from "../pages/Product/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/product", // Product details page with dynamic id
        element: <ProductDetails />, // ProductDetails component will be rendered
      },
      {
        path:"/ProductPage/:CategoryID",
        element:<ProductPage></ProductPage>
      }
      
      
    ]
  }
]);
export default router;