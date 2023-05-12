import {useHistory, useParams} from 'react-router-dom';
import useFetch from './useFetch';
const BlogDetails = () => {
  const { id } = useParams();
  const {data: blog, error, isPending} = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handleBlogDelete = () =>{
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/')
    })
  }
  return ( 
    <div className="blog-details">
      {error && <div> {error}</div>}
      {isPending && <div>Loading.....</div>}
      { blog && (
      <article>
        <h2>{blog.title}</h2>
        <p>written by {blog.author}</p>
        <div>{blog.body}</div>
        <button onClick={handleBlogDelete}>Delete blog</button>
      </article>
      )

      }

    </div>
   );
}
 
export default BlogDetails;