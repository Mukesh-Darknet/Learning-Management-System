import HomeLayout from "../Layouts/Homelayout";
import HomeImage from "../Assets/Image/image1.png"



function HomePage(){
  return(
    <HomeLayout>
      <div className="pt-10 flex items-center justify-center text-white gap-10 max-15 h-[90vh] "> 
        <div className="w-1/2 space-y-6">
        <h1 className=" text-sky-500 text-5xl font-semibold">
          Find Out Best
          <span className="text-orange-500 font-bold m-9" > 
           Online Courses

        </span>
        </h1>
        <p className="text-2xl text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam soluta blanditiis harum aliquam, commodi ullam nam, qui perspiciatis suscipit dolorum perferendis incidunt voluptates neque earum id dicta, impedit nostrum distinctio.
        </p>
        <div className="">
          <a href="/contact">
          <button className=" text-black text-xl font-bold h-14 w-60 bg-orange-400 rounded-lg ml-20 mt-20 hover:bg-sky-500 transition-all ease-in-out duration-5000">Contact Us</button>
          </a>

          <a href="/courses">
          <button className="text-black text-xl font-bold h-14 w-60 bg-orange-400 ml-20 rounded-lg hover:bg-sky-500 transition-all ease-in-out">Explore Courses</button>
          </a>
        </div>
        </div>

        <div className="w-1/2 flex items-center justify-center">

        <img src={HomeImage} alt="homePage image" />
        
        </div>

      </div>

    </HomeLayout>

  )
}
export default HomePage;