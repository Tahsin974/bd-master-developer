import React from "react";
import useLoading from "../../../Utils/Hooks/useLoading";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import Blogs from "../Blogs/Blogs";
import img from "../../../assets/Logo/logo 1.png";

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
          <img src={img} alt="loading" className="loading-img" />
        </div>
      )}
    </div>
  );
};

export default BlogPageLayOut;
