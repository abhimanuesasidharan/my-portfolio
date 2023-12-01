import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <h2 className='text-3xl font-bold inline border-b-4 border-gray-500 p-2'>Contact</h2>
                <p className='py-6'>Submit to ping me !</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/f0b3fae0-d753-4ab3-b265-251a265086ad" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <input type="email" name="email" placeholder='Enter Your Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <textarea name="message" placeholder='Enter Your Message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Connect</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact