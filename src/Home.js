import { useState, useEffect} from "react";
import BlogList from "./BlogList";

function Home(){
  const [blogs, setBlogs] = useState(null);
  const handleBlogDelete=(blogId)=>{
    const newBlogs = blogs.filter(blog=>blog.id !== blogId)
    setBlogs(newBlogs)
  }
  useEffect(()=>{
fetch("http://localhost:8000/blogs").then(res =>{
 return res.json();
}).then(data=>{
  setBlogs(data);
})
  }, [])
  return(
    <div className="home">
     {blogs && <BlogList blogs={blogs} title="List of Blogs"/>}
     {/* <BlogList blogs={blogs.filter((blog)=>blog.author === "Mubarak")} title="Mubarak's blogs" handleBlogDelete={handleBlogDelete}/> */}
    </div>
  );
}
export default Home;