import { useNavigate, useRouteError } from "react-router-dom";


const Error = () => {

    const navigate= useNavigate()
    const error = useRouteError()
    // console.log(error);

    const handlegoback=()=>{
        navigate('/')
    }
  return (
    <div className="text-center flex flex-col justify-center items-center min-h-screen ">
        <div className="text-2xl font-bold">Sorry!!! page not found</div>
        <p>{error.data}</p>
        <p>Status Text: {error.statusText}</p>
        <button onClick={handlegoback} className="bg-green-100 px-4 py-2 rounded-lg my-5 font-bold">Home</button>
    </div>
  )
}

export default Error