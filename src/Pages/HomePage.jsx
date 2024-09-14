import HomeLayout from "../Layouts/Homelayout";
import HomeImage from "../Assets/Image/image1.png"





function HomePage() {
  return (
    <HomeLayout>

      <div className=" ml-10 pt-10 flex items-center justify-center text-white gap-10 max-15 h-[90vh] ">

        <div className="w-1/2 space-y-6">

          <h1 className="bg-gradient-to-r from-blue-500 via-orange-500 to-green-500 bg-clip-text text-transparent   text-5xl font-semibold">
            Find Out Best

            <span className="text-orange-500 font-bold m-9 bg-gradient-to-r from-blue-600 via-orange-400 to-teal-500 bg-clip-text text-transparent opacity-90" >
              Online Courses
            </span>
          </h1>

          <p className="text-2xl text-white-400">
            Welcome to the course! Whether you're here to learn a new skill, enhance your knowledge or advance your career, this course is designed to guide you step-by-step. With engaging content, hands-on practice, and expert insights, you will gain the confidence and skills needed to succeed. Let's join on this exciting learning journey ! <br />
            <span className="text-2xl font-semibold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent ml-20 mt-20 pt-3">Let's Start Your Learning Journey!</span>
          </p>

          <div className="">

            <a href="/contact">
            <button class="px-6 py-3 text-black font-semibold bg-gradient-to-r from-green-300 to-orange-500 hover:from-green-400 hover:to-blue-500 rounded-lg transition duration-300 ease-in-out ml-20 mt-20">
              Contact Us
            </button>
            </a>

            <a href="/courses">
            <button class="px-6 py-3 text-black font-semibold bg-gradient-to-r from-green-300 to-orange-500 hover:from-green-400 hover:to-blue-500 rounded-lg transition duration-300 ease-in-out ml-20">
              Explore Courses
            </button>

            </a>

            
            

          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center h-1/3 w-1/3">

          <img src={HomeImage} alt="homePage image" />

        </div>

      </div>

    </HomeLayout>

  )
}
export default HomePage;