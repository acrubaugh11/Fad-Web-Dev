import Navbar from "../components/Navbar";
import hand from '../assets/hand.jpg';
import flouer from '../assets/flouer.jpg';
import { useEffect, useState } from "react";
import Process from "../components/Process";
import { Link } from "react-router-dom";

function About() {
        const [, setIsVisible] = useState(false);

        useEffect(() => {
            // Trigger after mount
            const timeout = setTimeout(() => {
            setIsVisible(true);
            }, 10);  // small delay to ensure browser paints opacity-0 first

            return () => clearTimeout(timeout);
        }, []);

    return(
        
<div className="overflow-x-hidden">
  <Navbar />

  {/* Hero section */}
  <div className="max-w-[90%] mx-auto h-[75vh] mt-10 md:mt-[30vh] flex items-center">
    <h1 className="text-center leading-snug text-xl md:text-3xl lg:text-4xl cinzel-font text-shadow-lg">
      <strong>fast</strong>, <strong>modern</strong> websites to empower your local businesses.
    </h1>
  </div>

  {/* Decorative blurred hand image */}
  <img
    src={hand}
    alt=""
    className="absolute opacity-50 inset-0 top-1/3 left-1/2 transform -translate-x-1/2 md:left-[62vh] md:h-1/2 z-[-1]"
    style={{ filter: 'blur(3px)' }}
  />

  <div className="border border-white mx-auto w-1/2 my-10 md:my-20" />

  {/* Content grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 cinzel-font px-6 md:px-10 py-10">
    
    {/* Text block for desktop */}
    <div className="hidden md:flex flex-col justify-center text-center leading-7 md:leading-9">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aliquam odit reiciendis saepe officia eaque numquam commodi
        eligendi facere sint, vitae cumque suscipit alias voluptatibus
        earum consectetur maiores libero laboriosam natus?
      </p>
      <p className="mt-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aliquam odit reiciendis saepe officia eaque numquam commodi
        eligendi facere sint, vitae cumque suscipit alias voluptatibus
        earum consectetur maiores libero laboriosam natus?
      </p>
      <p className="mt-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aliquam odit reiciendis saepe officia eaque numquam commodi
        eligendi facere sint, vitae cumque suscipit alias voluptatibus
        earum consectetur maiores libero laboriosam natus?
      </p>
      <Link to="/quote">
        <button className="mt-8 px-6 py-3 bg-white text-black rounded-md border border-white hover:bg-black hover:text-white transition duration-300">
          Get Started With Us Now
        </button>
      </Link>
    </div>

    {/* Flower image */}
    <img src={flouer} alt="Decorative Flower" className="mx-auto w-full max-w-xs md:max-w-sm lg:max-w-md" />

    {/* Mobile text block */}
    <div className="md:hidden text-center leading-7 mt-6">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores illum saepe. A accusamus, dolorem ex harum debitis eligendi natus ipsum vitae fugiat voluptatem nulla? Iusto odio a vitae beatae?
      </p>
      <Link to="/quote">
        <button className="mt-6 px-6 py-3 bg-white text-black rounded-md border border-white hover:bg-black hover:text-white transition duration-300">
          Get Started With Us Now
        </button>
      </Link>
    </div>

  </div>

  <div className="border border-white mx-auto w-1/2 my-10 md:my-20" />

  <div className="h-10" />

  <Process />

  <div className="h-10" />
</div>

    )
}
export default About