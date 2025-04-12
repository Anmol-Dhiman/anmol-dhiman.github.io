import About from "./components/About.js";
import BlogRender from "./components/BlogRender.js";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="app-content">
          <About />
          <BlogRender />
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default App;
