import { useEffect } from "react";
import "./blogshero.css";
import Navbar from "../../Navbar";

const BlogsHero = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#0A253B";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <div>
      <Navbar background="transparent" />
      <div className="blogs-hero">
        <div className="blogs-route">
          <p>Home/Blogs</p>
        </div>
        <div className="blogs-title">
          <h2>Blogs</h2>
        </div>
        <div className="blogs-subtitle">
          <p>Insights and Updates</p>
        </div>
      </div>
    </div>
  );
};

export default BlogsHero;
