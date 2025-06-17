import { Disclosure } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'HOME', to: '/' },
  { name: 'ABOUT', to: '/about' },
  { name: 'WORK', to: '/work' },
  { name: 'CONTACT', to: '/#contact' },
]

function classNames(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const location = useLocation()
  const [showNavbar, setShowNavbar] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY <= 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
    <Disclosure
      as="nav"
      className={classNames(
        "fixed overflow-x-hidden hidden md:block w-full pt-5 z-50 bg-black transition-transform duration-500",
        showNavbar ? "translate-y-0" : "-translate-y-full"
      )}
    >
        <div className='grid grid grid-cols-0 sm:grid-cols-1 md:grid-cols-3 justify-items-center w-full gap-18'>
            <div className="flex space-x-3 hidden md:block">
              {navigation.map((item) => {
                const isActive = location.pathname === item.to
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
                )
              })}
            </div>



            <div className='text-center !flex w-max mx-auto cinzel-font text-[50%]'>
                <h1 className="">
                    A3 Web Studios
                </h1>
            </div>
            
            <Link to={'/quote'} className='hidden md:block'>
                <button className=" justify-center px-6 cinzel-font py-3 !bg-white text-black rounded-md !border !border-white hover:!bg-black hover:!text-white !transition !duration-300">
                    Request Quote
                </button>
            </Link>
        </div>

    </Disclosure>


{/* Mobile Navbar */}
<div className="w-screen !overflow-x-hidden md:hidden">
  <Disclosure as="nav" className="fixed top-0 left-0 pt-5 z-50 bg-black">
    {({ open }) => (
      <>
        <div className="grid grid-cols-1 text-center px-5">
          <div className="cinzel-font text-sm">
            <h1 className=''>A3 Web Studios</h1>
          </div>

          <Disclosure.Button className="text-black !bg-white mx-auto  rounded-md focus:outline-none focus:ring-2 focus:ring-white">
            {open ? 'Close' : 'Menu'}
          </Disclosure.Button>
        </div>

        <Disclosure.Panel className="bg-black text-center space-y-2 py-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="block text-white px-3 py-2 rounded-md text-sm"
            >
              {item.name}
            </Link>
          ))}
          <Link to="/quote">
            <button className="mt-2 px-4 py-2 !bg-white text-black rounded-md border border-white hover:bg-black hover:text-white transition duration-300">
              Request Quote
            </button>
          </Link>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
</div>



    </>
  )
}
