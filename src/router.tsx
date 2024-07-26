import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<HomePage/>,
    },
    // {
    //     path: "/itens",
    //     element:<EditItem/>,
    // },
    // {
    //     path: "/itens/:id",
    //     element:<EditItem/>,
    // },
  ]);