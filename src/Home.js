import { useState, useEffect} from "react";
import BlogList from "./BlogList";

function Home(){
  const [blogs, setBlogs] = useState(
    [{id:"1", title: "I am good", body: "life is good", author:"Mubarak"},
    {id:2, title: "I am bad", body: "life is bad", author: "Oladejo"},
  {id:3, title : "I am hard", body: "life is hard", author:"Adeshina"}]
  );
  const handleBlogDelete=(blogId)=>{
    const newBlogs = blogs.filter(blog=>blog.id !== blogId)
    setBlogs(newBlogs)
  }
  useEffect(()=>{
console.log("use effect")
  }, [])
  return(
    <div className="home">
     <BlogList blogs={blogs} title="List of Blogs" handleBlogDelete={handleBlogDelete}/>
     <BlogList blogs={blogs.filter((blog)=>blog.author === "Mubarak")} title="Mubarak's blogs" handleBlogDelete={handleBlogDelete}/>
    </div>
  );
}
export default Home;