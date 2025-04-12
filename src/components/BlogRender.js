import { BlogData } from "../utils/BlogData";
import { Link } from "react-router-dom";
import { useState } from "react";

const BlogRender = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  // Get all unique tags from BlogData
  const allTags = [
    ...new Set(BlogData.flatMap((blog) => blog.tags.map((tag) => tag.text))),
  ];

  // Filter blogs based on selected tag
  const filteredBlogs = selectedTag
    ? BlogData.filter((blog) =>
        blog.tags.some((tag) => tag.text === selectedTag)
      )
    : BlogData;

  return (
    <div className="blog-container">
      {" "}
      {/* Tag Sort Bar */}{" "}
      <div className="tag-sort-container">
        <div className="tag-sort-header">
          <span className="tag-sort-label"> Filter by tag: </span>{" "}
          <div className="tag-sort-dropdown">
            <button className="tag-sort-trigger">
              {" "}
              {selectedTag || "All Tags"}{" "}
              <span className="tag-sort-arrow"> ▼ </span>{" "}
            </button>{" "}
            <div className="tag-sort-options">
              <button
                className={`tag-sort-option ${!selectedTag ? "active" : ""}`}
                onClick={() => setSelectedTag(null)}
              >
                All Tags{" "}
              </button>{" "}
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`tag-sort-option ${selectedTag === tag ? "active" : ""}`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}{" "}
                </button>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="blog-grid">
        {" "}
        {filteredBlogs.map((post) => {
          return (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="blog-card"
            >
              {" "}
              {/* Blog Image */}{" "}
              {post.image && (
                <img src={post.image} alt={post.title} className="blog-image" />
              )}{" "}
              {/* Blog Content */}{" "}
              <div>
                <h2 className="blog-title"> {post.title} </h2>{" "}
                <p className="blog-date">
                  {" "}
                  {formatDateWithSuperscript(post.date)}{" "}
                </p>{" "}
                {/* Tags */}{" "}
                <div className="blog-tags">
                  {" "}
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="blog-tag"
                      style={{
                        backgroundColor: tag.bgColor,
                        color: tag.textColor,
                      }}
                    >
                      {" "}
                      {tag.text}{" "}
                    </span>
                  ))}{" "}
                </div>{" "}
                {/* Description */}{" "}
                <p className="blog-description"> {post.description} </p>{" "}
              </div>{" "}
            </Link>
          );
        })}{" "}
      </div>{" "}
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
      {suffix} {date.toLocaleString("en-US", { month: "long" })}, {year}{" "}
    </span>
  );
};

export default BlogRender;
