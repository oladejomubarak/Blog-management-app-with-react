const CreateBlog = () => {
  return (  
    <div className="create-blog">
      <h2>Add a new blog</h2>
      <form>
        <label>Blog title:</label>
        <input
        type="text"
        required
        />
         <label>Blog body:</label>
       <textarea>
        required
       </textarea>
         <label>Blog author:</label>
        <select>
          <option value="Mubarak">Mubarak</option>
          <option value="Oladejo">Oladejo</option>
        </select>
        <button>Add blog</button>
      </form>

    </div>
  );
}
 
export default CreateBlog;