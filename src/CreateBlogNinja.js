import { useState } from "react";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  return (  
    <div className="create-blog">
      <h2>Add a new blog</h2>
      <form>
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
        <select>
          <option value="Mubarak">Mubarak</option>
          <option value="Oladejo">Oladejo</option>
          <option value="Adeshina">Adeshina</option>
        </select>
        <button>Add blog</button>
        <p>{title}</p>
        <p>{body}</p>
      </form>
      

    </div>
  );
}
 
export default CreateBlog;