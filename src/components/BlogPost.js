import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const markdownFiles = "";
const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../blogs/${slug}.md`)
      .then((module) => fetch(module.default))
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error("Error loading Markdown file:", err));
  }, [slug]);

  console.log(content);

  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  if (!content)
    return (
      <div className="flex justify-center mt-12 mb-32">
        <div className="w-1/2 text-xl "> Loading {dots} </div>{" "}
      </div>
    );

  return (
    <div className="flex justify-center mt-12 mb-32 ">
      <article className="w-1/2 prose prose-invert leading-8  space-y-12">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-4xl font-bold mb-4" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-3xl font-semibold mb-3" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-2xl font-medium mb-2" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="text-lg mb-4" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="ml-5 list-disc" {...props} />
            ),
            a: ({ node, ...props }) => (
              <a
                className="underline text-[#58a6ff]"
                target="_blank"
                {...props}
              />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default BlogPost;
