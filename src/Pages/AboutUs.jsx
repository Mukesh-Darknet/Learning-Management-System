import HoemLayout from "../Layouts/Homelayout";
import HomeImage from "../Assets/Image/aboutimg.png"
import APJ from "../Assets/Image/Apj.png"
import Steve from "../Assets/Image/steve.png"
import Fb from "../Assets/Image/fb.png"


function AboutUs() {
  return (
    <>
      <HoemLayout>
        <div className="pl-20 pt-20 flex flex-col text-white">
          <div className="flex items-center gap-5 mx-10">
            <section className="w-1/2">
              <h1 className="text-5xl text-yellow-300 font-bold">Wellcome to  Affordable Education</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quos officia tempora corporis error adipisci quod ducimus nobis pariatur, et velit qui facilis, sint nulla quisquam veritatis quasi. Eum quasi adipisci incidunt, tenetur corrupti reprehenderit blanditiis assumenda. Officia fuga, illo explicabo debitis omnis numquam deleniti ducimus maiores in facilis iure.
              </p>

            </section>
            <div className="w-1/2 flex items-center justify-center h-1/2 w-1/2">
              <img
                id="test1"

                src={HomeImage}
                alt="" />
            </div>
          </div>

          {/* crousel */}

          <div className=" m-auto carousel  rounded-2xl mb-5 w-64">
            <div id="slide1" className="carousel-item relative h-60 w-72">
              <img
                src={APJ}
                className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2  transform justify-between">
                <a href="#slide4" className="btn btn-circle  ">❮</a>
                <a href="#slide2" className="btn btn-circle ">❯</a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative h-60 w-72">
              <img
                src={Steve}
                className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle  ">❮</a>
                <a href="#slide3" className="btn btn-circle ">❯</a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative h-60 w-72">
              <img
                src={Fb}
                className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle ">❮</a>
                <a href="#slide4" className="btn btn-circle ">❯</a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative h-60 w-72">
              <img
                src={APJ}
                className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle ">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>






        </div>
      </HoemLayout>


    </>
  )
}
export default AboutUs