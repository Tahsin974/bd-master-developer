import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import SelectedLinkProvider from "../Provider/SelectedLinkProvider/SelectedLinkProvider";
import HomePageLayOut from "../Pages/HomePage/Home-Page-LayOut/HomePageLayOut";
import ServicesPageLayout from "../Pages/ServicesPage/ServicesPageLayout/ServicesPageLayout";
import ProjectPageLayout from "../Pages/ProjectPage/ProjectPageLayOut/ProjectPageLayout";
import AboutPageLayout from "../Pages/AboutPage/AboutPageLayOut/AboutPageLayout";
import ContactPageLayOut from "../Pages/ContactPage/ContactPageLayOut/ContactPageLayOut";
import BlogPageLayOut from "../Pages/BlogPage/BlogPageLayOut/BlogPageLayOut";
import BlogDetailsPageLayout from "../Pages/BlogDetailsPage/BlogDetailsPageLayout/BlogDetailsPageLayout";

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
        path: "/blogs",
        element: <BlogPageLayOut />,
      },
      {
        path: "/blogs-details/:slug",
        element: <BlogDetailsPageLayout />,
      },
    ],
  },
]);

export default router;
