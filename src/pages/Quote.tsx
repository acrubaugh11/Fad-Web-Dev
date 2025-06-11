import { Link } from "react-router-dom";
import flower from '../assets/flouer.jpg';

export default function Example() {
  return (
    <>
    <img src={flower} alt="" className="absolute opacity-10 pointer-events-none overflow-x-hidden h-full w-full object-cover overflow-y-hidden"/>
    <div className="min-h-screen w-screen bg-black text-white flex items-center justify-center px-4">
      <form className="w-full max-w-xl bg-neutral-900 p-8 rounded-2xl shadow-xl space-y-6 border border-white">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">Request a Quote</h2>

        {/* Name */}
        <div>
          <label className="block mb-1 font-semibold text-sm text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full bg-neutral-800 border border-white text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-semibold text-sm text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-neutral-800 border border-white text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="you@example.com"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1 font-semibold text-sm text-gray-300">Where are you located?</label>
          <input
            type="text"
            name="location"
            required
            className="w-full bg-neutral-800 border border-white text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="City, State or Country"
          />
        </div>

        {/* Referral */}
        <div>
          <label className="block mb-1 font-semibold text-sm text-gray-300">How did you find out about us?</label>
          <input
            type="text"
            name="referral"
            required
            className="w-full bg-neutral-800 border border-white text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="e.g., Google, Instagram, Referral, etc."
          />
        </div>

        {/* Service */}
        <div>
          <label className="block mb-1 font-semibold text-sm text-gray-300">What do you need?</label>
          <select
            name="service"
            required
            className="w-full bg-neutral-800 border border-white text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Select a service</option>
            <option value="website">Website Design & Development</option>
            <option value="ecommerce">E-Commerce Setup</option>
            <option value="seo">SEO & Site Optimization</option>
            <option value="maintenance">Site Maintenance</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 font-semibold text-sm text-gray-300">Project Details</label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full bg-neutral-800 border border-white text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Include goals, timeline, etc."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="text-black bg-yellow-400 mx-5 font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition duration-200"
          >
            Request Quote
          </button>
          <Link to={'/'}>
            <button className="text-black bg-yellow-400 mx-5 font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition duration-200">
              Back
            </button>
          </Link>
        </div>
      </form>
    </div>

    </>
  );
}
