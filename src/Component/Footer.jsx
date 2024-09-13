import {BsFacebook, BsInstagram,BsLinkedin, BsTwitter} from 'react-icons/bs'


function Footer(){

  const curretnDate = new Date();
  const year = curretnDate.getFullYear();
  return(
    <>
    <footer className='relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-slate-900 sm:px-20'>
      <section className='text-lg'>
        copyright{year} | All rights reserve
 
      </section>
      <section className='flex items-center justfy-center gap-5 text-2xl text-white'>
        <a className='hover:text-yellow transition-all ease-in-out duration-300'>
          <BsFacebook/>
        </a>
        <a className='hover:text-yellow transition-all ease-in-out duration-300'>
          <BsInstagram/>
        </a>
        <a className='hover:text-yellow transition-all ease-in-out duration-300'>
          <BsLinkedin/>
        </a>
        <a className='hover:text-yellow transition-all ease-in-out duration-300'>
          <BsTwitter/>
        </a>
      </section>

    </footer>
    
    
    
    </>
  )

}
export default Footer;