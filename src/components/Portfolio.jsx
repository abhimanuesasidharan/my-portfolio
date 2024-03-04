import React from 'react';
import linenbed from '../assets/projects/linenbed.png';
import coke from '../assets/projects/cocacola.png';
import oreo from '../assets/projects/oreo.png';
import cleanconnect from '../assets/projects/cleanconnect.png';
import divine from '../assets/projects/divine.png';
import netflix from '../assets/projects/netflix.png';

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: cleanconnect,
            demoLink: 'https://drive.google.com/file/d/1EmWoAWcgxCC8mx45H_xvoDqVIG983kES/view?usp=sharing', 
            codeLink: 'https://github.com/abhimanuesasidharan/cleanconnect' 
        },
        {
            id: 2,
            src: divine,
            demoLink: 'https://abhimanuesasidharan.github.io/divine-consultancy/', 
            codeLink: 'https://github.com/abhimanuesasidharan/divine-consultancy' 
        },
        {
            id: 3,
            src: netflix,
            demoLink: 'https://github.com/abhimanuesasidharan/netflix-clone',
            codeLink: 'https://github.com/abhimanuesasidharan/netflix-clone'
        },
        {
            id: 4,
            src: linenbed,
            demoLink: 'https://abhimanuesasidharan.github.io/LinenBed/',
            codeLink: 'https://github.com/abhimanuesasidharan/LinenBed'
        },
        {
            id: 5,
            src: coke,
            demoLink: 'https://abhimanuesasidharan.github.io/sample/',
            codeLink: 'https://github.com/abhimanuesasidharan/netflix-clone'
        },
        {
            id: 6,
            src: oreo,
            demoLink: 'https://example.com/demo5',
            codeLink: 'https://github.com/yourusername/repo5'
        },
    ];
  
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <h2 className='text-3xl font-bold inline border-b-4 border-gray-500'>Portfolio</h2>
                <p className='py-6'>Check Out My Works Here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {portfolios.map(({id, src, demoLink, codeLink}) => (
                    <div key={id} className='shadow-md shadow-gray-500 rounded-lg'>
                        <img src={src} alt="cocacola" className='rounded-md duration-200 hover:scale-105'/>
                        <div className='flex items-center justify-center'>
                            <a href={demoLink} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                            <a href={codeLink} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Portfolio;
