import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Markdown from "markdown-to-jsx";

const BlogPost = () => {
  const { slug } = useParams();
  const [markdown, setMarkdown] = useState(" ");
  const [dots, setDots] = useState("");

  useEffect(() => {
    import(`../blogs/${slug}.md`)
      .then((res) => {
        fetch(res.default)
          .then((response) => response.text())
          .then((text) => {
            setMarkdown(text.toString());
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [slug]);

  // Loading dots effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  if (markdown === "")
    return (
      <div className="blogpost-loading-container">
        <div className="blogpost-loading-text"> Loading {dots} </div>{" "}
      </div>
    );

  return (
    <div className="blogpost-container">
      <div className="blogpost-content">
        <Markdown
          remarkPlugins={[remarkGfm]}
          options={{
            overrides: {
              code: {
                component: ({ className, children, ...props }) => {
                  const isInline = !className;
                  if (isInline) {
                    return <code className="inline-code"> {children} </code>;
                  }
                  const language = className
                    ? className.replace("lang-", "")
                    : "javascript";
                  return (
                    <div className="code-block" data-language={language}>
                      <SyntaxHighlighter language={language} style={dracula}>
                        {children}
                      </SyntaxHighlighter>
                    </div>
                  );
                },
              },
              a: {
                component: ({ children, href, ...props }) => (
                  <a
                    href={href}
                    {...props}
                    style={{
                      color: "#58a6ff",
                      textDecoration: "underline",
                      transition: "color 0.2s ease",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
              },
            },
          }}
        >
          {markdown}
        </Markdown>
      </div>
    </div>
  );
};

export default BlogPost;
