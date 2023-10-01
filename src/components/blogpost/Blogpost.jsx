import { useLoaderData, useNavigate } from "react-router-dom";


const Blogpost = () => {
    const post = useLoaderData();
    const navigate = useNavigate();

    const handlegoBack =()=>{
        navigate(-1)
    }

  return (
    <div className="text-center min-h-[calc(100vh-144px)]">
        <h3 className="text-xl font-bold">Title: {post.title}</h3>
        <p className="text-md">des: {post.body}</p>
        <p className="font-bold">post id: {post.id}</p>
        <button onClick={handlegoBack} className="bg-green-100 px-3 py-2 rounded-md my-5">Back</button>
    </div>
  )
}

export default Blogpost