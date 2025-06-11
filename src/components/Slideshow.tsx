import slide1 from '../assets/pt2.png';
import slide3 from '../assets/hand.jpg';
import slide2 from '../assets/flouer.jpg';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Slideshow() {
  const images = [slide1, slide2, slide3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto-slide effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
      if(onclick){
        setTimeout(() => {

        }, 8000)
      }
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  const handleNext = () => {
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setFade(true); 
    }, 300);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
      setFade(true);
    }, 300);
  };

  const goToSlide = (index: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 300);
  };

  return (
    <div className="relative max-w-screen mx-auto h-[65vh] overflow-hidden border border-gray-900">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt="slideshow"
        className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Arrow buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-20 transform border !border-white -translate-y-1/2 !bg-black/60 p-2 rounded-full text-white hover:bg-black transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-20 transform border !border-white -translate-y-1/2 !bg-black/60 p-2 rounded-full text-white hover:bg-black transition"
      >
        <ChevronRight size={24} />
      </button>

    {/* Dots */}
    <div className="absolute bottom-6 left-[46%]  flex gap-2">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`!w-[50px] !h-[50px] !rounded-full transition-all duration-300 ${
            index === currentIndex ? 'bg-white scale-35': '!bg-gray-900 scale-35'
          }`}
        />
      ))}
    </div>


    </div>
  );
}

export default Slideshow;
