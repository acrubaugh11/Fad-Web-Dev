import Contact from "../components/Contact";
import FeaturedWork from "../components/FeaturedWork";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Slideshow from "../components/Slideshow";
import Part2 from "../components/Text";

function Home() {
    return (
        <>
        <Navbar>
        </Navbar>
        
        <Hero>
        </Hero>

        <Slideshow>
        </Slideshow>

        <div className="h-10"></div>
        <Part2>
        </Part2>
        
        <div className="h-10"></div>
        <FeaturedWork>
        </FeaturedWork>
        <div className="h-20"></div>

        <Contact>
        </Contact>
        <div className="h-40"></div>

        </>
    )
}

export default Home