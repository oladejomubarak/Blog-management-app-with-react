import { useState } from "react";

function Home(){
  const [blogs, setBlogs] = useState(
    [{id:"1", title: "I am good", body: "life is good", author:"Mubarak"},
    {id:2, title: "I am bad", body: "life is bad", author: "Oladejo"},
  {id:3, title : "I am hard", body: "life is hard", author:"Adeshina"}]
  );
  return(
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog preview" key= {blog.id}>
          <h1>The blog title is {blog.title}</h1>
          <p>{blog.body}</p>
          <p>written by {blog.author}</p>
        </div>
      )
      )}

    </div>
  );
}
export default Home;