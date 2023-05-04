import { useState } from "react";
import BlogList from "./BlogList";

function Home(){
  const [blogs, setBlogs] = useState(
    [{id:"1", title: "I am good", body: "life is good", author:"Mubarak"},
    {id:2, title: "I am bad", body: "life is bad", author: "Oladejo"},
  {id:3, title : "I am hard", body: "life is hard", author:"Adeshina"}]
  );
  return(
    <div className="home">
     <BlogList blogs={blogs} title="List of Blogs" />
     <BlogList blogs={blogs} title="List of Blogs" />
    </div>
  );
}
export default Home;