import PageTitle from "../../../Components/PageTitle/PageTitle";
import useLoading from "../../../Utils/Hooks/useLoading";
import BlogDetails from "../BlogDetails/BlogDetails";
import img from "../../../assets/Logo/logo 1.png";

const BlogDetailsPageLayout = () => {
  const { loading } = useLoading();
  return (
    <div>
      {!loading ? (
        <div>
          <PageTitle pageName={"blog-details"}>
            Exploring Trends, Sharing Knowledge
          </PageTitle>
          <BlogDetails />
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <img src={img} alt="loading" className="loading-img" />
        </div>
      )}
    </div>
  );
};

export default BlogDetailsPageLayout;
