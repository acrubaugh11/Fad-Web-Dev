import Navbar from "../components/Navbar";
import logo from '../assets/logu.jpg';
import hand from '../assets/hand.jpg';
import flouer from '../assets/flouer.jpg';
import { useState } from "react";
import Process from "../components/Process";
import { Link } from "react-router-dom";

function About() {
      const images = [logo, logo];
      const [currentIndex] = useState(0);
    return(
        
        <>
            <Navbar>
            </Navbar>

            {/* <img src={logo} alt="" className='absolute top-[60vh] left-1/2 transform -translate-x-1/2'   data-aos="fade-up" data-aos-duration='1500'/> */}
            <div className="max-w-2/3 mx-auto h-[75vh] mt-[30vh]">
                <h1 className="text-center !leading-20 cinzel-font text-shadow-lg">
                    We are passionate about crafting <strong>fast</strong>, <strong>modern</strong> websites that help local businesses. 
                </h1>
            </div>
            <img
            src={hand}
            alt=""
            className="absolute !opacity-50 m-0 top-1/3 inset-0 left-[62vh] h-1/2 z-[-1]"
            style={
                {filter: 'blur(3px)',}
            }
            />      

                <div
                className="relative max-w-screen mx-auto h-[10vh] overflow-hidden bg-black"
                style={{
                    backgroundImage: `url(${images[currentIndex]})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                }}
                ></div>


                <div className="grid justify-items-center grid-cols-2 cinzel-font h-[100vh] pt-40 px-10 ">
                    <p className=" text-center leading-9 px-10 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam odit reiciendis saepe officia eaque numquam commodi
                        eligendi facere sint, vitae cumque suscipit alias voluptatibus
                        earum consectetur maiores libero laboriosam natus?
                        <br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam odit reiciendis saepe officia eaque numquam commodi
                        eligendi facere sint, vitae cumque suscipit alias voluptatibus
                        earum consectetur maiores libero laboriosam natus?
                        <br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam odit reiciendis saepe officia eaque numquam commodi
                        eligendi facere sint, vitae cumque suscipit alias voluptatibus
                        earum consectetur maiores libero laboriosam natus?
                        <br />
                        <Link to={'/quote'}>
                            <button className="mt-8 px-6 py-3 !bg-white text-black rounded-md !border !border-white hover:!bg-black hover:!text-white !transition !duration-300">
                            Get Started With Us Now
                            </button>
                        </Link>
                    </p>
                    <img src={flouer} alt="Decorative Flower" className="mx-auto h-1/2" />
                </div>

                                <div
                className="relative max-w-screen mb-40 mx-auto h-[10vh] overflow-hidden bg-black"
                style={{
                    backgroundImage: `url(${images[currentIndex]})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                }}
                ></div>

                <Process></Process>
        </>

    )
}
export default About