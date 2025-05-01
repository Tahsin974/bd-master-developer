import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import SelectedLinkProvider from "../Provider/SelectedLinkProvider/SelectedLinkProvider";
import HomePageLayOut from "../Pages/HomePage/Home-Page-LayOut/HomePageLayOut";
import ServicesPageLayout from "../Pages/ServicesPage/ServicesPageLayout/ServicesPageLayout";
import ProjectPageLayout from "../Pages/ProjectPage/ProjectPageLayOut/ProjectPageLayout";
import AboutPageLayout from "../Pages/AboutPage/AboutPageLayOut/AboutPageLayout";
import ContactPageLayOut from "../Pages/ContactPage/ContactPageLayOut/ContactPageLayOut";
import ArticlePageLayOut from "../Pages/ArticlePage/ArticlePageLayOut/ArticlePageLayOut";

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
      {
        path: "/about",
        element: <AboutPageLayout />,
      },
      {
        path: "/contact",
        element: <ContactPageLayOut />,
      },
      {
        path: "/articles",
        element: <ArticlePageLayOut />,
      },
    ],
  },
]);

export default router;
