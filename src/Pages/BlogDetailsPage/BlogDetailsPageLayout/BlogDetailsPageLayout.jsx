import PageTitle from "../../../Components/PageTitle/PageTitle";
import BlogDetails from "../BlogDetails/BlogDetails";

const BlogDetailsPageLayout = () => {
  return (
    <div>
      <PageTitle pageName={"blog-details"}>
        Exploring Trends, Sharing Knowledge
      </PageTitle>
      <BlogDetails />
    </div>
  );
};

export default BlogDetailsPageLayout;
