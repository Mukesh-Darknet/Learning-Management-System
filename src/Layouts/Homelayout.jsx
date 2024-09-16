
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseSquare } from "react-icons/ai";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function HoemLayout({children}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogIn =useSelector((state) => state?.auth?.isLogIn);
  const roll = useSelector((state) => state?.auth?.roll);

  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = 'auto';
  }


  function hideDrawer(){
    const element = document.getElementsByName('rawer-toggle');
    element[0].checked = false;

    // changeWidth();
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = '0';
  
  }


  function handlLogOut(e){
    e.preventDefault();

    // const res  = await dispatch(logout);
    // if(res?.payload?.success)
    navigate("/")

  }

  return (
    <>
    <Navbar/>
      <div className="min-h-[90vh]  ">
        <div className="drawer absolute w-fit left-0 z-50">
          <input className="drawer-toggle " id="my-drawer" type="checkbox" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="cursor-pointer relative">
              <GiHamburgerMenu
                onClick={changeWidth}
                size={"25px"}
                className="font-bold text-white m-4"
              />
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu w-48 h-[30%] p-4 sm:w-80 bg-base-100 text-base-content relative">
              <li className="w-fit absolute right-2 z-50">

                <button onClick={hideDrawer}>
                  <AiFillCloseSquare
                  size={"30px"}
                  />

                </button>
              </li>
              <li>
                <a href="/">Home</a>
              </li>

              {isLogIn && roll == 'ADMIN' &&(
                <li>
                  <a href="/admin/dashboard">Admin dash board</a>
                </li>

              )}



              <li>
               <a href="/cources">All Cources</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>

              {!isLogIn && (
                <li className="absolute t-20 bottom-4 w-[80%] ">
                <div className="w-full flex item-center justify-center">
                  <button className="btn-primary font-semibold rounded-md w-full bg-sky-400 px-4 py-1 ">
                    <a href="/login">LogIn</a>

                  </button>
                  <button className="btn-secondary font-semibold rounded-md w-full bg-orange-500 ml=20 px-4 py-1">
                    <a href="/login">Sign In</a>

                  </button>

                </div>
                </li>
              )}

              {!isLogIn && (
                <li className="absolute bottom-4 w-[80%] ">
                <div className="w-full flex item-center justify-center">
                  <button className="btn-primary font-semibold rounded-md w-full bg-sky-400 px-4 py-1 ">
                    <a href="/user/rofile">Profile</a>

                  </button>
                  <button className="btn-secondary font-semibold rounded-md w-full bg-orange-500 ml=20 px-4 py-1">
                    <a href="/user/logout" onClick={handlLogOut}>LogOut</a>

                  </button>

                </div>
                </li>
              )}

            </ul>

          </div>
        </div>

        {children}
        <Footer/>


      </div>


    </>
  )

}
export default HoemLayout