import { useEffect } from 'react'
import laptop from '../assets/laptop.jpg'
import geasart from '../assets/f.jpg'
import carguys from '../assets/cr.jpg'
import Aos from 'aos'

const posts = [
  { id: 1, imageUrl: geasart, title: 'Geas Art', link: 'https://geasart.com' },
  { id: 2, imageUrl: carguys, title: 'Car Guys', link: 'https://example.com' },
  { id: 3, imageUrl: laptop, title: 'eCommerce Site', link: 'https://example.com/shop' },
]

export default function FeaturedWork() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div className="sm:py-10 cinzel-font">
      <div className="mx-auto max-w-8/10 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl sm:text-3xl">Featured Work</h2>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div
                className="relative group aspect-square w-full overflow-hidden rounded-xl shadow-lg"
                data-aos="fade-up"
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-100 flex items-center justify-center opacity-0 group-hover:opacity-85 transition-opacity duration-300">
                  <h3 className="text-black text-2xl cinzel-font !bg-white w-full text-center">
                    {post.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
