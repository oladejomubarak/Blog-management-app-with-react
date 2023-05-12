import { useState } from "react";
const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mubarak");
  const handleSubmit=(e)=>{
    e.preventDefault();
    const blog = {title, body, author};
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(()=> {
      console.log('new blog addded');
    })
  }
  return (  
    <div className="create-blog">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
        type="text"
        required
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        />
         <label>Blog body:</label>
       <textarea
       required
       value={body}
        onChange={(e)=> setBody(e.target.value)}
       >
        
       </textarea>
         <label>Blog author:</label>
        <select
        value={author}
        onChange={(e)=> setAuthor(e.target.value)}
        >
          <option value="Mubarak">Mubarak</option>
          <option value="Oladejo">Oladejo</option>
          <option value="Adeshina">Adeshina</option>
        </select>
        <button>Add blog</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
      
    </div>
  );
}
 
export default CreateBlog;