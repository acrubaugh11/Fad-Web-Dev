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
        
<>
            <Navbar>
            </Navbar>

            {/* <img src={logo} alt="" className='absolute top-[60vh] left-1/2 transform -translate-x-1/2'   data-aos="fade-up" data-aos-duration='1500'/> */}
            <div className="max-w-2/3 mx-auto h-[75vh] mt-30 md:mt-[30vh]">
                <h1 className="text-center !leading-20 cinzel-font text-shadow-lg">
                    <strong>fast</strong>, <strong>modern</strong> websites to empower your local businesses. 
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

                <div className="border border-white mx-auto w-1/2 my-20"/>

                <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 cinzel-font h-[100vh] pt-40 px-10 ">
                    <p className="hidden md:block text-center leading-9 px-10 ">
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
                    <img src={flouer} alt="Decorative Flower" className="mx-auto md:h-1/2" />
                    <p className="md:hidden mt-10 text-center leading-9 px-10 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores illum saepe. A accusamus, dolorem ex harum debitis eligendi natus ipsum vitae fugiat voluptatem nulla? Iusto odio a vitae beatae?
                    </p>
                </div>

                <div className="border border-white mx-auto w-1/2 my-20"/>
                <div className="h-10"></div>
                <Process></Process>
                <div className="h-10"></div>

        </>
    )
}
export default About