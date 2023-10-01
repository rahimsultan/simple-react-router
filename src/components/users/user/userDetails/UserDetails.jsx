import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    const details = useLoaderData();
    const {name, website, username} = details
    const navigate = useNavigate();

    const handlegoBack =()=>{
        navigate(-1)
    }

  return (
    <div className="text-center min-h-[calc(100vh-164px)] mt-5">
        <h2 className="text-xl font-semibold">welcome: {name}</h2>
        <p>username: {username}</p>
        <p>website: {website}</p>
        <button onClick={handlegoBack} className="bg-green-100 px-3 py-2 rounded-md my-5">Back</button>
    </div>
  )
}

export default UserDetails