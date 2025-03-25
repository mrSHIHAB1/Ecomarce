import {
    createBrowserRouter,
    
  } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<App></App>,
      children:[
        {
            path: "/",
            element: <div>HOme page</div>,
          },
          {
            path: "contacts/:contactId",
            element: <Contact />,
          },
      ]
    },
  ]);