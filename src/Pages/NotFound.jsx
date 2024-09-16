
import { useNavigate } from "react-router-dom"
import Error from "../Assets/Image/error3.png"


function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center flex-col justify-center h-screen w-full bg-[#1A2238] ">
        <img
          className="h-64 w-64 mb-20 rounded-full"
          src={Error} />
        <div>
          <button onClick={() => navigate(-1)} className="btn btn-wide text-white bg-orange-400">Go Back</button>
        </div>
      </div>


    </>
  )
}
export default NotFound