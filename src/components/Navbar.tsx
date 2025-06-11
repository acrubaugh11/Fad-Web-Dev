import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navigation = [
    { name: 'HOME', to: '/' },
    { name: 'ABOUT', to: '/about' },
    { name: 'WORK', to: '/work' },
    { name: 'CONTACT', to: '/#contact'},
]

function classNames(...classes: (string | undefined | false | null)[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const location = useLocation()
    const[showNavbar, setShowNavbar] = useState(true);

    useEffect( () => {
        const handleNavbar = () => {
            if(window.scrollY > 300){
                setShowNavbar(false);
            }
            else{
                setShowNavbar(true);
            }
        }

        window.addEventListener('scroll', handleNavbar);

        return () => {
            window.removeEventListener('scroll', handleNavbar);
        };
    },[]);


    return (
        <Disclosure
            as="nav"
            className={classNames(
                "w-full fixed top-0 z-50 left-0 inter-font letter-colors transition-transform duration-500",
                showNavbar ? "translate-y-0" : "-translate-y-full"
            )}
            style={{ backgroundColor: 'rgb(0, 0, 0)' }}
            >
            <div className="mx-auto max-w-screen ml-4 px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Centered Title */}
                        <div className="absolute inset-x-0 top-0 bottom-0 flex items-center justify-center pointer-events-none">
                        <h1 className="text-white cinzel-font !text-[25px] !sm:text-[20px] !md:text-[25px] pointer-events-none">
                            Fad Web and Development
                        </h1>
                        </div>
                    <div className="absolute inset-y-0 right-10 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="block h-6 w-6 group-data-open:hidden" aria-hidden="true" />
                            <XMarkIcon className="hidden h-6 w-6 group-data-open:block" aria-hidden="true" />
                        </DisclosureButton>
                    </div>

                    <div className="flex flex-1 justify-start sm:items-stretch sm:justify-between">


                        <div className="hidden sm:ml-0 sm:flex space-x-3">
                            {navigation.map((item) => {
                                const isActive = location.pathname === item.to
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className={classNames(
                                            'px-3 py-2 rounded-md text-[14px] cinzel-font',
                                            isActive ? '!underline font-bold' : ''  // no underline for inactive
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            })}
                        </div>

                        {/* Right-Aligned "Request Quote" Link */}
                            <div className="hidden sm:flex absolute right-4 items-center">
                            <Link
                                to="/quote"
                                className="!text-black bg-white text-[14px] px-4 py-2 rounded-md border border-white hover:bg-black hover:!text-white transition duration-200 cinzel-font"
                            >
                                Request Quote
                            </Link>
                            </div>


                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => {
                    const isActive = location.pathname === item.to
                    return (
                        <DisclosureButton
                            key={item.name}
                            as={Link}
                            to={item.to}
                            className={classNames(
                                'block rounded-md px-3 py-2 text-base font-2xl letter-colors inter-font',
                                isActive ? 'bg-violet-300 text-white underline' : ''
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    )
                })}
            </DisclosurePanel>
        </Disclosure>
    )
}
