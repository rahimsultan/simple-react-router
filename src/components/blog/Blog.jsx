import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
  const blogs = useLoaderData();
  // console.log(blogs);
  return (
    <div className='grid grid-cols-3 gap-4 max-w-6xl mx-auto my-5'>
      {
        blogs.map(blog=>{
          return(
            <div key={blog.id} className="border-yellow-500 border-2 rounded-md p-2">
              <h3 className='text-2xl font-bold'>{blog.title}</h3>
              <p>{blog.body}</p>
              <Link to={`/post/${blog.id}`}><button className="bg-green-100 rounded-md px-3 py-2 font-semibold my-3">Details</button></Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Blog