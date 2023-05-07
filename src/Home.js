import { useState, useEffect} from "react";
import BlogList from "./BlogList";

function Home(){
  const [blogs, setBlogs] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);
  // const handleBlogDelete=(blogId)=>{
  //   const newBlogs = blogs.filter(blog=>blog.id !== blogId)
  //   setBlogs(newBlogs)
  // }
  useEffect(()=>{
    setTimeout(()=>{
      fetch("http://localhost:8000/blogss").then(res =>{
        if(!res.ok){
          throw Error("Can't fecth data");
        }
 return res.json();
}).then(data=>{
  setBlogs(data);
  setPending(false);
}).catch(err =>{
  setError(err.message);
})

    }, 1000)
  }, [])
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