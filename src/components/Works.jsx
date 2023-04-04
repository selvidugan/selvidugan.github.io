import React from 'react'
import workimg from '../assets/workimg.png'

const Works = () => {
  return (
    <div name='works' className='w-full md:h-screen bg-[#005C5B] text-[#FFC745]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#FFC745]'>Works</p>
                <p className='py-6'>Check out some of my recent works</p>
            </div>

                    {/* container for projects */}

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* grid item */}

                <div style={{backgroundImage: `url(${workimg})`}}
                className='shadow-lg shadow-[#6fc2b0]
                group container rounded-md
                flex justify-center items-center
                mx-auto content-div'>
                    
                    {/* Hover effects */}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                    <div style={{backgroundImage: `url(${workimg})`}}
                        className='shadow-lg shadow-[#6fc2b0]
                        group container rounded-md
                        flex justify-center items-center
                        mx-auto content-div'>
                    
                    {/* Hover effects */}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Online Therapist
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* grid item */}

                <div style={{backgroundImage: `url(${workimg})`}}
                className='shadow-lg shadow-[#6fc2b0]
                group container rounded-md
                flex justify-center items-center
                mx-auto content-div'>
                    
                    {/* Hover effects */}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* grid item */}

                <div style={{backgroundImage: `url(${workimg})`}}
                className='shadow-lg shadow-[#6fc2b0]
                group container rounded-md
                flex justify-center items-center
                mx-auto content-div'>
                    
                    {/* Hover effects */}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* grid item */}

                <div style={{backgroundImage: `url(${workimg})`}}
                className='shadow-lg shadow-[#6fc2b0]
                group container rounded-md
                flex justify-center items-center
                mx-auto content-div'>
                    
                    {/* Hover effects */}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* grid item */}

                <div style={{backgroundImage: `url(${workimg})`}}
                className='shadow-lg shadow-[#6fc2b0]
                group container rounded-md
                flex justify-center items-center
                mx-auto content-div'>
                    
                    {/* Hover effects */}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Works