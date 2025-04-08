import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Markdown from "markdown-to-jsx";
import { Helmet } from "react-helmet";
import { BlogData } from "../utils/BlogData";

const BlogPost = () => {
  const { slug } = useParams();
  const [markdown, setMarkdown] = useState(" ");
  const [dots, setDots] = useState("");

  const getBlogBySlug = (slug) => {
    return BlogData.find((blog) => blog.slug === slug);
  };

  const blog = getBlogBySlug("eip-7623");

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
    <div>
      <Helmet>
        {/* Standard SEO */}
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
        <link
          rel="canonical"
          href={`https://anmol-dhiman.vercel.app/blog/${blog.slug}`}
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sherlockvarm" />
        <meta name="twitter:creator" content="@sherlockvarm" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.description} />
        <meta
          name="twitter:image"
          content={`https://anmol-dhiman.vercel.app${blog.image}`}
        />
        <meta
          name="twitter:url"
          content={`https://anmol-dhiman.vercel.app/blog/${blog.slug}`}
        />

        {/* Open Graph (for Facebook, Discord, LinkedIn, WhatsApp, etc.) */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta
          property="og:image"
          content={`https://anmol-dhiman.vercel.app${blog.image}`}
        />
        <meta
          property="og:url"
          content={`https://anmol-dhiman.vercel.app/blog/${blog.slug}`}
        />
        <meta property="og:site_name" content="Anmol Dhiman's Blog" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
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
    </div>
  );
};

export default BlogPost;
