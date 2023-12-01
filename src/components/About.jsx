import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div  className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <h2 className='text-3xl font-bold inline border-b-4 border-gray-500'>About</h2>
            </div>
            <p className='text-xl mt-20'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit delectus, eveniet quasi accusantium eius incidunt beatae, quis soluta reprehenderit aut dolores mollitia debitis, nulla optio et ipsa excepturi! Explicabo, tenetur?</p>
        </div>
    </div>
  )
}

export default About