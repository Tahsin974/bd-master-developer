import { useParams } from "react-router";
import UseAxiosPublic from "../../../Utils/AxiosPublic/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const BlogDetails = () => {
  const { slug } = useParams();

  const axiosPublic = UseAxiosPublic();
  const { data: blogDetails = {}, isPending } = useQuery({
    queryKey: ["blog-details"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/blog-details/${slug}`);
      return res.data;
    },
  });
  const { data: latestBlogs = [], isPending: latestBlogsLoad } = useQuery({
    queryKey: ["latest-blogs", axiosPublic],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/latest-blogs?status=latest&id=${blogDetails._id}`
      );
      return Array.isArray(res.data) ? res.data : res.data.data || [];
    },
  });
  console.log(latestBlogs);

  return (
    <div>
      {!isPending && !latestBlogsLoad ? (
        <div className="hero bg-[#F8FDFE] min-h-screen xl:py-20 lg:py-20 md:py-14 sm:py-12 py-10">
          <div className=" text-center">
            <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-3 xl:grid-cols-3 gap-10">
              <div className="xl:col-span-2 lg:col-span-2">
                <div className="card  bg-[#F8FDFE] space-y-7">
                  <figure>
                    <img
                      src={blogDetails.image}
                      alt={blogDetails.title}
                      className=" h-auto object-cover rounded-t-lg"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <div className="badge badge-primary text-sm">
                        {blogDetails.category}
                      </div>
                      <div className="text-sm text-gray-500 mt-2 md:mt-0">
                        By{" "}
                        <span className="font-semibold">
                          {blogDetails.author}
                        </span>{" "}
                        ·{" "}
                        {new Date(
                          blogDetails.publish_date
                        ).toLocaleDateString()}
                      </div>
                    </div>

                    <h1 className="xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-xl font-bold">
                      {blogDetails.title}
                    </h1>
                    <p className="text-gray-600 mt-4 text-justify">
                      {blogDetails.description}
                    </p>

                    <div className="prose mt-6 max-w-none space-y-10">
                      {blogDetails.content.sections.map((content, index) => (
                        <div key={index} className="space-y-3">
                          <h1 className=" xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-lg text-left inter-bold">
                            {content.heading}
                          </h1>
                          <p className="ruluko-regular text-base text-justify">
                            {content.content}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <div className="flex flex-wrap gap-2">
                        {blogDetails.tags.map((tag, index) => (
                          <div key={index} className="badge badge-outline">
                            #{tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" space-y-3">
                <h1 className="text-2xl inter-bold">Latest blogs</h1>
                <div className="space-y-3 grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-5">
                  {latestBlogs.map((blog) => (
                    <div
                      key={blog._id}
                      className="card bg-[#F8FDFE] text-[#1D2345] "
                    >
                      <figure>
                        <img src={blog.image} alt="Shoes" />
                      </figure>
                      <div className="card-body">
                        <h2 className=" xl:text-xl lg:text-xl md:text-xl sm:text-xl text-lg inter-bold xl:text-left lg:text-left ">
                          <a href={`/blogs-details/${blog.slug}`}>
                            <span className="visited:text-blue-500 link">
                              {blog.title}
                            </span>
                          </a>
                        </h2>
                        <div className="badge badge-primary">{blog.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
