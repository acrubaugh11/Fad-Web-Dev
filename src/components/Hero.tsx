import logo from '../assets/a4.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


function Hero() {

   
   useEffect(() => {
 AOS.init({
   once: true,
 })
}, [])


   return (
       <>
            <img
            src={logo}
            alt=""
            className="absolute top-[40vh] left-1/2 transform -translate-x-1/2 scale-50 z-0 hidden md:block"
            data-aos="fade-up"
            data-aos-duration="1500"
            />

            <img
            src={logo}
            alt=""
            className="absolute top-[40vh] left-1/2 transform -translate-x-1/2 scale-50 z-0 md:hidden !opacity-20"
            data-aos="fade-up"
            data-aos-duration="1500"
            />

            <div className="relative max-w-2/3 mx-auto h-[75vh] mt-[30vh] z-10 hidden md:block">
            <h1 className="text-center !leading-20 cinzel-font">
                We create <strong>beautiful</strong>, <strong>responsive</strong> websites that turn visitors into customers.
            </h1>
            </div>
            <div className='md:hidden w-screen h-[100vh]'>
                <h1 className="text-center cinzel-font scale-50 w-full !leading-20 h-full">
                    We create <strong>beautiful</strong>, <strong>responsive</strong> websites that turn visitors into customers.
                </h1>

            </div>

           {/* <img
           src={compu}
           alt=""
           className="absolute !opacity-15 top-20 inset-0 w-full h-full object-cover z-[-1]"
           data-aos="fade-up"
           data-aos-duration='1500'
           />        */}
        </>
   )
}

export default Hero