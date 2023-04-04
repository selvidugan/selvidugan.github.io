import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#005C5B]'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-xl py-4 text-[#FFC745]'>
                Hi, my name is
            </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#FFC745]'>
                Selvi Ece DUGAN
            </h1>
            <h2 className='text-[#FFC745] text-4xl sm:text-5xl py-4 max-w-[700px]'>
                I'm a Front-End Developer.
            </h2>
            <p className='text-[#FFC745] text-xl py-4 max-w-[700px]'>
            Well-versed in HTML, CSS, JavaScript and React
            to build responsive web pages and applications,
            with a strong skill set in communication and teamwork.
            </p>
            <div>
                <button className='text-gray-300 group border-2 px-6 py-3 my-2 flex items-center
                 hover:bg-[#FFC745] hover:border-[#FFC745]'>
                    View Works 
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' /> 
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home