import React, { useState } from 'react'
import { Mail, Twitter, Github } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className='max-w-[1400px] mx-auto mt-20 px-8 pb-20'>
      <h1 className='text-4xl md:text-5xl font-abril text-center mb-16'>
        Get in <span className='text-[#2BC1EA] underline decoration-[#2BC1EA] decoration-2 underline-offset-4'>Touch</span>
      </h1>
      
      <div className='grid lg:grid-cols-2 gap-12 items-center bg-white/10 backdrop-blur-sm rounded-lg p-6'>
        {/* Left Section - Contact Info */}
        <div className='space-y-8'>
          <div>
            <p className='text-xl md:text-2xl leading-relaxed mb-8'>
              HI, i'd love if you reached out to me. Even if it's just to 
              say "Hey! Don't hesitate! Drop me a message and i will get 
              back to you ASAP!
            </p>
          </div>

          {/* Social Links */}
          <div className='space-y-4'>
            <a 
              href="mailto:salimshaban855@gmail.com" 
              className='flex items-center gap-4 text-[#2BC1EA] hover:text-[#1fa9cf] transition-colors duration-200'
            >
              <Mail size={24} />
              <span className='text-xl'>salimshaban855@gmail.com</span>
            </a>
            
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className='flex items-center gap-4 text-[#2BC1EA] hover:text-[#1fa9cf] transition-colors duration-200'
            >
              <Twitter size={24} />
              <span className='text-xl'>Twitter</span>
            </a>
            
            <a 
              href="https://github.com/Salim104" 
              target="_blank" 
              rel="noopener noreferrer"
              className='flex items-center gap-4 text-[#2BC1EA] hover:text-[#1fa9cf] transition-colors duration-200'
            >
              <Github size={24} />
              <span className='text-xl'>Github</span>
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className='space-y-4'>
            {/* Name and Email Row */}
            <div className='grid md:grid-cols-2 gap-4'>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name :"
                value={formData.fullName}
                onChange={handleChange}
                className='w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2BC1EA] transition-all duration-200'
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email :"
                value={formData.email}
                onChange={handleChange}
                className='w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2BC1EA] transition-all duration-200'
                required
              />
            </div>

            {/* Message Textarea */}
            <textarea
              name="message"
              placeholder="Message :"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className='w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2BC1EA] transition-all duration-200 resize-none'
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className='bg-[#2BC1EA] text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-[#1fa9cf] transition-all duration-200 transform hover:scale-105 w-full md:w-auto'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact