import React from "react";
import useLoading from "../../../Utils/Hooks/useLoading";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import Blogs from "../Blogs/Blogs";

const BlogPageLayOut = () => {
  const { loading } = useLoading();
  return (
    <div>
      {!loading ? (
        <div>
          <PageTitle pageName={"blogs"}>
            Exploring Trends, Sharing Knowledge
          </PageTitle>
          <Blogs />
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      )}
    </div>
  );
};

export default BlogPageLayOut;
