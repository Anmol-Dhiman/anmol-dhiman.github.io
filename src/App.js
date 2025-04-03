import { useState } from "react";

import Navbar from "./components/NavBar.js";
import About from "./components/About.js";
import BlogRender from "./components/BlogRender.js";

function App() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-1/2">
          <About />
          <BlogRender />
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default App;
