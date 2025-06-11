import logo from '../assets/logu.png'
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
           <img src={logo} alt="" className='absolute top-[60vh] left-1/2 transform -translate-x-1/2'   data-aos="fade-up" data-aos-duration='1500'/>
           <div className="max-w-2/3 mx-auto h-[75vh] mt-[30vh]">
               <h1 className="text-center !leading-20 cinzel-font">
                   We create <strong>beautiful</strong>, <strong>responsive</strong> websites that turn visitors into customers. 

               </h1>
               <h2 className="text-center !leading-20 cinzel-font">
                   Stand out online with a design that works.
               </h2>
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