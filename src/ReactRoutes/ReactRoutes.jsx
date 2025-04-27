import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import SelectedLinkProvider from "../Provider/SelectedLinkProvider/SelectedLinkProvider";
import HomePageLayOut from "../Pages/HomePage/Home-Page-LayOut/HomePageLayOut";
import ServicesPageLayout from "../Pages/ServicesPage/ServicesPageLayout/ServicesPageLayout";
import ProjectPageLayout from "../Pages/ProjectPage/ProjectPageLayOut/ProjectPageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SelectedLinkProvider>
        <MainLayOut />
      </SelectedLinkProvider>
    ),
    children: [
      {
        path: "/",
        element: <HomePageLayOut />,
      },
      {
        path: "/home",
        element: <HomePageLayOut />,
      },
      {
        path: "/services",
        element: <ServicesPageLayout />,
      },
      {
        path: "/projects",
        element: <ProjectPageLayout />,
      },
    ],
  },
]);

export default router;
