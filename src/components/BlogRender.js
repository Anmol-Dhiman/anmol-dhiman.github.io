import { BlogData } from "../utils/BlogData";

import { Link } from "react-router-dom";

const BlogRender = () => {
  return (
    <>
      <div className=" mt-12  mb-32 ">
        <div className="grid grid-cols-1 gap-6">
          {BlogData.map((post) => {
            return (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="border-b   border-gray-700 pb-6 mb-6 flex gap-4  hover:bg-[#2a3f5b] transition duration-300 rounded-sm pt-4 "
              >
                {/* Blog Image */}
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                )}

                {/* Blog Content */}
                <div>
                  <h2 className="text-2xl font-bold hover:text-[#00C853] transition duration-200">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    {formatDateWithSuperscript(post.date)}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-md text-sm font-semibold shadow-md"
                        style={{
                          backgroundColor: tag.bgColor,
                          color: tag.textColor,
                        }}
                      >
                        {tag.text}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="mt-2 test-lg  text-gray-300">
                    {post.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

const formatDateWithSuperscript = (dateString) => {
  const [day, month, year] = dateString.split("/");
  const date = new Date(`${year}-${month}-${day}`);

  const dayNumber = parseInt(day, 10);
  const suffix =
    dayNumber === 1 || dayNumber === 21 || dayNumber === 31
      ? "st"
      : dayNumber === 2 || dayNumber === 22
        ? "nd"
        : dayNumber === 3 || dayNumber === 23
          ? "rd"
          : "th";

  return (
    <span>
      {dayNumber}
      {suffix}
      &nbsp;
      {date.toLocaleString("en-US", { month: "long" })}, {year}
    </span>
  );
};

export default BlogRender;
