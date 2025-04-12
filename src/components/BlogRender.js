import { BlogData } from "../utils/BlogData";
import { Link } from "react-router-dom";

const BlogRender = () => {
  // Use BlogData directly since we're not filtering yet
  const blogs = BlogData;

  return (
    <div className="blog-container">
      <div className="blog-grid">
        {blogs.map((post) => {
          return (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="blog-card"
            >
              {/* Blog Image */}
              {post.image && (
                <img src={post.image} alt={post.title} className="blog-image" />
              )}

              {/* Blog Content */}
              <div>
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-date">
                  {formatDateWithSuperscript(post.date)}
                </p>

                {/* Tags */}
                <div className="blog-tags">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="blog-tag"
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
                <p className="blog-description">{post.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
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
      {suffix}&nbsp;
      {date.toLocaleString("en-US", { month: "long" })}, {year}
    </span>
  );
};

export default BlogRender;
