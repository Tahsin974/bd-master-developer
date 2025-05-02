import { useEffect, useState } from "react";
import UseAxiosPublic from "../../../Utils/AxiosPublic/UseAxiosPublic";
import "./Articles.css";
import { FaArrowRight } from "react-icons/fa6";
const Articles = () => {
  const axiosPublic = UseAxiosPublic();
  const [articles, setArticles] = useState([]);
  const [displayArticles, setDisplayArticles] = useState([]);
  const [category, setCategory] = useState("Development");
  const categories = [
    "Development",
    "Design",
    "Marketing",
    "Career & Freelancing",
  ];
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchText = form.search.value;
    if (!searchText) {
      alert("Please enter a search term");
      return;
    }
    const matchedArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayArticles(matchedArticles);
  };
  useEffect(() => {
    axiosPublic.get(`/articles/${category}`).then((res) => {
      setArticles(res.data);
      setDisplayArticles(res.data);
    });
  }, [category]);

  return (
    <div className="bg-[#F8FDFE] min-h-screen ">
      <div className="max-w-[1280px] mx-auto  space-y-5 flex flex-col xl:flex-row lg:flex-row gap-10 ">
        <aside className="xl:min-h-screen lg:min-h-screen  m-0 xl:w-80 lg:w-80 bg-[#e0e3e4]  border-r py-20  px-6 space-y-3.5">
          <h1 className="inter-bold text-xl text-center">Category</h1>
          <div className="space-y-2.5">
            {categories.map((cate, index) => (
              <button
                key={index}
                onClick={() => setCategory(`${cate}`)}
                className={`btn btn-sm md:btn-md lg:btn-lg xl:btn-lg btn-block  rounded-full ${
                  cate === category
                    ? "bg-[#F8FDFE] text-[#1D2345]"
                    : "category - button"
                }`}
              >
                {cate}
              </button>
            ))}
          </div>
        </aside>

        <article className="flex-1 py-20 xl:px-0 lg:px-0 md:px-12 px-6 space-y-6">
          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="bg-[#e0e3e4] p-2.5 join w-full"
          >
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="input input-bordered join-item w-full bg-[#F8FDFE]"
            />
            <button className="btn join-item bg-[#1D2345] text-[#F8FDFE] btn-md">
              Search
            </button>
          </form>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-2.5">
            {displayArticles.map((article) => (
              <div
                key={article._id}
                className="card article-card custom-shadow xl:h-[700px] lg:h-[700px] h-[650px] p-4"
              >
                <figure>
                  {/* Displaying article image */}
                  <img src={article.image} className="" alt={article.title} />
                </figure>
                <div className="card-body ">
                  {/* Article tag */}
                  <div className="article-tag w-[max-content] text-center px-3 py-1.5 ">
                    <p className="ruluko-regular text-gray-500">
                      {article.tag}
                    </p>
                  </div>

                  {/* Article title */}
                  <h2 className="xl:text-xl text-base ruluko-bold">
                    {article.title}
                  </h2>

                  {/* Article description */}
                  <p className="xl:text-lg test-sm ruluko-regular text-gray-500">
                    {article.description.split(" ").slice(0, 10).join(" ")}
                    ...
                  </p>

                  {/* Read More button */}
                  <div className="card-actions justify-start ">
                    <button className="btn bg-transparent border-transparent shadow-none text-[#1D2345] ruluko-bold btn-link items-center flex">
                      Read More
                      <FaArrowRight /> {/* Right arrow icon */}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default Articles;
