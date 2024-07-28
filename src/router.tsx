import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Motivation from "./pages/Motivation/Motivation";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/motivation",
    element: <Motivation />
  }
]);
