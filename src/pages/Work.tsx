import geasart from '../assets/cover.png'
import carguys from '../assets/carguys.png'
import zeez from '../assets/zeez.png'
import ac from '../assets/ac.png'
import Navbar from '../components/Navbar'

const websites = [
  { id: 1, imageUrl: geasart, title: 'Geas Art', link: 'https://geasart.com' },
  { id: 2, imageUrl: carguys, title: 'Car Guys', link: '/' },
  { id: 3, imageUrl: zeez, title: 'ZeezCreations', link: 'https://zeezcreations.com/' },
  { id: 4, imageUrl: ac, title: 'Alexander Crubaugh', link: 'https://acrubaugh11.github.io/alexcrubaugh.github.io/#header' },
]

function Work() {
  return (
    <>
      <Navbar />
      <div className="h-20" />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 px-40 mt-10 min-w-screen mx-auto">
        {websites.map((website) => (
        <div key={website.id} className="relative group w-full h-full rounded-md overflow-hidden">
        <a href={website.link} target="_blank" rel="noopener noreferrer">
            {/* Image */}
            <img
            src={website.imageUrl}
            alt={website.title}
            className="h-[50vh] w-full object-cover border border-gray-700 transition-transform duration-300 group-hover:scale-105"
            />

            {/* Title overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-86 transition-opacity duration-300">
            <h3 className="text-black w-full bg-white text-2xl cinzel-font text-center px-4 py-2 bg-black bg-opacity-70 rounded">
                {website.title}
            </h3>
            </div>
        </a>
        </div>

            

        ))}
      </div>
      <div className='h-20'></div>
    </>
  )
}

export default Work
