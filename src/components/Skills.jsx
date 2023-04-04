import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#005C5B] text-[#FFC745]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#FFC745]'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#007A78] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-2' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#007A78] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-2' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#007A78] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-2' src={JavaScript} alt="JS icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#007A78] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-2' src={ReactImg} alt="React icon" />
                    <p className='my-4'>React JS</p>
                </div>
                <div className='shadow-md shadow-[#007A78] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-2' src={GitHub} alt="GitHub icon" />
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#007A78] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-2' src={Node} alt="Node icon" />
                    <p className='my-4'>Node JS</p>
                </div>
                <div className='shadow-md shadow-[#007A78] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-2' src={FireBase} alt="Firebase icon" />
                    <p className='my-4'>Firebase</p>
                </div>
                <div className='shadow-md shadow-[#007A78] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-2' src={Tailwind} alt="Tailwind icon" />
                    <p className='my-4'>Tailwind CSS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills