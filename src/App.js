import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Post from "./pages/Post";
import { React, useState } from "react";

function App() {
const [getBlogContent, setGetBlogContent] = useState([]);
  const getData = (blog) => {
    setGetBlogContent(blog);
  }
  return (
    <div>
      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage data={getData}/>} />
          <Route path="/post/:id" element={<Post content={getBlogContent}/>} />
          <Route path="/post" element={<Post content={getBlogContent}/>} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
