import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa' 
import { HiOutlineMail } from 'react-icons/hi'
import { GrNotes } from "react-icons/gr";

const SocialLinks = () => {
  return ( 
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
          <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] rounded-tr-md duration-300 bg-white'>
            <a href="https://www.linkedin.com/in/abhimanue-sasidharan-7a041819b/" target='_blank' rel="noreferrer" className='flex justify-between items-center w-full'>LinkedIn <FaLinkedin size={25}/></a>
          </li>
          <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300 bg-white'>
            <a href="https://github.com/abhimanuesasidharan" target='_blank' rel="noreferrer" className='flex justify-between items-center w-full'>GitHub <FaGithub size={25}/></a>
          </li>
          <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300 bg-white'>
          <a href="https://twitter.com/Absd_unofficial" target='_blank' rel="noreferrer" className='flex justify-between items-center w-full'>Twitter <FaTwitter size={25}/></a>
          </li>
          <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300 bg-white'>
            <a href="mailto:foo@gmail.com" target='_blank' rel="noreferrer" className='flex justify-between items-center w-full'>Mail <HiOutlineMail size={25}/></a>
          </li>
          <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] rounded-br-md duration-300 bg-white'>
            <a href="/resume.pdf" download={true} target='_blank' rel="noreferrer" className='flex justify-between items-center w-full'>Resume <GrNotes size={25}/></a>
          </li>
        </ul>
    </div>
  )
}

export default SocialLinks