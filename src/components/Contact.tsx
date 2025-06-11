'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    // Handle submission logic here
  }

  return (
    <section className="px-8 py-40 cinzel-font" id='contact'>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-2">
          <div>
          <h2 className="mb-8 text-3xl">Contact Us</h2>
          <p>acrubaug***@gmail.com</p>
          <p>3362***468</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-wrap items-start gap-6 w-full">
            {/* First Name */}
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-62 rounded-md border border-white px-4 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
            />

            {/* Last Name */}
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-62 rounded-md border border-white px-4 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-62 rounded-md border border-white px-4 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-62 rounded-md border border-white px-4 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your message..."
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="flex-1 min-w-[300px] rounded-md border border-white px-4 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
            />

            {/* Centered Submit Button */}
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="text-white !bg-black text-[14px] px-4 py-2 rounded-md border !border-white hover:!bg-white hover:!text-black !transition !duration-300 cinzel-font"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
