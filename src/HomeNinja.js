import { useState, useEffect} from "react";
import BlogList from "./BlogList";

function Home(){
 
  // const handleBlogDelete=(blogId)=>{
  //   const newBlogs = blogs.filter(blog=>blog.id !== blogId)
  //   setBlogs(newBlogs)
  // }
 
  return(
    <div className="home">
      {error && <div>{error}</div> }
      {isPending && <div>loading......</div>}
     {blogs && <BlogList blogs={blogs} title="List of Blogs"/>}
     {/* <BlogList blogs={blogs.filter((blog)=>blog.author === "Mubarak")} title="Mubarak's blogs" handleBlogDelete={handleBlogDelete}/> */}
    </div>
  );
}
export default Home;