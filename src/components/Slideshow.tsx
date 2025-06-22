import slide2 from '../assets/flouer.jpg';
import slide5 from '../assets/f.jpg';
import slide6 from '../assets/11.jpg';
import { useEffect, useState, type SetStateAction } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Slideshow() {
  const images = [slide2, slide2, slide2];

  const mobileImages = [
    { src: slide2, position: 'object-center' },
    { src: slide6, position: 'object-center' },
    { src: slide5, position: 'object-right' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-screen mx-auto h-[65vh] overflow-hidden border border-gray-900">
      {/* Desktop images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className={`w-full h-full hidden md:block object-cover absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Mobile images */}
      {mobileImages.map((imgObj, index) => (
        <img
          key={index}
          src={imgObj.src}
          alt=""
          className={`w-full h-full md:hidden object-cover ${imgObj.position} absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Buttons */}
      <button
        onClick={handlePrev}
        className="hidden sm:block absolute top-1/2 left-5 transform border !border-white -translate-y-1/2 !bg-black/60 p-2 rounded-full text-white hover:bg-black transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="hidden sm:block absolute top-1/2 right-5 transform border !border-white -translate-y-1/2 !bg-black/60 p-2 rounded-full text-white hover:bg-black transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 sm:!w-[50px] sm:!h-[50px] scale-40 !rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-40' : 'bg-gray-900'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
