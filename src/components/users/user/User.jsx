import { Link } from "react-router-dom"

const User = ({user}) => {
  return (
    <div className="border-2 rounded-md p-4">
        <h3>Name: {user.name}</h3>
        <p>email: {user.email}</p>
        <Link to={`/user/${user.id}`}>
        <button className="bg-green-100 rounded-md px-3 py-2 font-semibold my-3">More Details</button>
        </Link>
    </div>
  )
}

export default User