
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseSquare } from "react-icons/ai";
import Footer from "../Component/Footer";


function HoemLayout({children}) {

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

  return (
    <>
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
            <ul className="menu w-48 p-4 sm:w-80 bg-base-100 text-base-content relative">
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
              <li>
               <a href="/cources">All Cources</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
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