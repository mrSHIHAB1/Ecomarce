import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../contact"; 

import Home from "../pages/Home/Home";

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
        path: "/contact",
        element: <Contact />
      }
    ]
  }
]);
export default router;