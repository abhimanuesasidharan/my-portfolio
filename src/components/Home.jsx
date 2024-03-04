import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import HeroImage from '../assets/comic.jpg'
import { Link } from 'react-scroll'

const Home = () => {
  return (
     <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className=' flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>Hey there,
I'm Abhimanue Sasidharan,
I'm a dedicated professional with a Bachelor's degree in Computer Applications (BCA) and a certified Full Stack Developer, specializing in web development and search engine optimization (SEO)</p>
          <div>
            <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 via-blue to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-200'><MdOutlineKeyboardArrowRight size={20} /></span>
            </Link>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt='heroimage' className='rounded-full mx-auto w-2/3 md:w-100'/>
        </div>
      </div>
     </div>
  )
}

export default Home