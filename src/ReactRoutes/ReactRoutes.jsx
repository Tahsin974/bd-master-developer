import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import HomePageLayOut from "../Pages/Home/Home-Page-LayOut/HomePageLayOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <HomePageLayOut />,
      },
      {
        path: "/home",
        element: <HomePageLayOut />,
      },
    ],
  },
]);

export default router;
