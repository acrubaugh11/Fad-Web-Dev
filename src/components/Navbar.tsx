import { Disclosure } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';

const navigation = [
  { name: 'HOME', to: '/' },
  { name: 'ABOUT', to: '/about' },
  { name: 'WORK', to: '/work' },
  { name: 'CONTACT', to: '/#contact' },
];

function classNames(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(true);
  const [isOverlayLocked, setIsOverlayLocked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY <= 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const handleNavClick = (path: string, close: () => void) => {
  setIsOverlayLocked(true);

  setTimeout(() => {
    if (path.startsWith('/#')) {
      // For hash links (e.g. /#contact)
      navigate('/'); // Make sure we're on the homepage
      // After navigating, scroll to section
      setTimeout(() => {
        const id = path.split('#')[1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOverlayLocked(false);
        close();
      }, 100); // slight delay to ensure navigation happened
    } else {
      // For normal routes
      navigate(path);
      setTimeout(() => {
        setIsOverlayLocked(false);
        close();
      }, 200); // match fade duration
    }
  }, 200); // overlay fade out before navigation
};

  return (
    <>
      {/* Desktop Navbar */}
      <Disclosure
        as="nav"
        className={classNames(
          "fixed overflow-x-hidden hidden md:block w-full pt-5 z-50 bg-black transition-transform duration-500",
          showNavbar ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className='grid grid-cols-0 sm:grid-cols-1 md:grid-cols-3 justify-items-center w-full gap-18'>
          <div className="flex space-x-3 hidden md:block">
            {navigation.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    "px-3 py-2 rounded-md text-[14px] cinzel-font text-white",
                    isActive && "!underline font-bold"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className='text-center !flex w-max mx-auto cinzel-font text-[50%]'>
            <h1>A3 Web Studios</h1>
          </div>

          <Link to={'/quote'} className='hidden md:block'>
            <button className="justify-center px-6 cinzel-font py-3 !bg-white text-black rounded-md !border !border-white hover:!bg-black hover:!text-white !transition !duration-300">
              Request Quote
            </button>
          </Link>
        </div>
      </Disclosure>

      {/* Mobile Navbar */}
      <div className="w-screen !overflow-x-hidden md:hidden">
        <Disclosure as="nav" className="relative top-0 pt-5 z-50 bg-black">
          {({ open, close }) => (
            <>
              <div
                className={`fixed inset-0 bg-black transition-opacity duration-500 ${
                  open || isOverlayLocked ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                aria-hidden="true"
              />

              <div className="flex justify-between items-center px-4 relative z-20">
                <h2 className="cinzel-font text-white text-3xl whitespace-nowrap">A3 Web Studios</h2>

                <Disclosure.Button
                  className="relative w-8 h-8 flex flex-col justify-between items-center group"
                  aria-label="Toggle menu"
                >
                  <span className={`block h-1 m-[1px] !w-6 !bg-white rounded-sm transform transition duration-300 ease-in-out ${open ? 'rotate-45 translate-y-1 -translate-x-[1px] !w-10' : ''}`} />
                  <span className={`block h-1 m-[1px] !w-6 !bg-white rounded-sm transition duration-300 ease-in-out ${open ? 'opacity-0' : 'opacity-100'}`} />
                  <span className={`block h-1 m-[1px] !w-6 !bg-white rounded-sm transform transition duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-1 -translate-x-[1px] !w-10' : ''}`} />
                </Disclosure.Button>
              </div>

              <Disclosure.Panel
                static
                className={`fixed inset-0 flex flex-col justify-center items-center space-y-6
                bg-black text-white text-lg cinzel-font
                transition-all duration-300 transform
                ${open || isOverlayLocked ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}
              >
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.to, close)}
                    className="block px-4 py-2 rounded-md hover:underline duration-500"
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={() => handleNavClick('/quote', close)}
                  className="mt-6 px-6 py-3 bg-white text-black rounded-md border border-white hover:bg-black hover:text-white transition duration-300"
                >
                  Request Quote
                </button>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
