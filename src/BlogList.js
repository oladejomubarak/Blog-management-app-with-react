const BlogList = (props) => {
  const blogs = props.blogs
  const title = props.title
  // const handleBlogDelete = props.handleBlogDelete
  return ( 
    <div className="blog-list">
      <h1>{title}</h1>
       {blogs.map((blog) => (
        <div className="blog preview" key= {blog.id}>
          <h1>The blog title is {blog.title}</h1>
          <p>{blog.body}</p>
          <p>written by {blog.author}</p>
          {/* <button onClick={()=> handleBlogDelete(blog.id)}>delete blog</button> */}
        </div>
      )
      )}
    </div>
   );
}
 
export default BlogList;