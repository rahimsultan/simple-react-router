import { useLoaderData } from "react-router-dom";
import User from "./user/User";

const Users = () => {
    const users = useLoaderData();
  return (
    <div className='flex flex-col justify-center items-center min-h-[calc(100vh-144px)]'>
      <h3 className='text-2xl font-bold'>Welcome to users page</h3>
      <h4>Users: {users.length}</h4>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, repudiandae.</p>

      <div className="grid grid-cols-3 gap-4 my-5">
        {
            users.map(user=><User key={user.id} user={user}/>)
        }
      </div>
    </div>
  )
}

export default Users