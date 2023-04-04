import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#005C5B] text-[#FFC745]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                 <div className='sm:text-right pb-8 pl-4 '>
                    <p className='text-4xl font-bold inline border-b-4 border-[#FFC745]'>
                        About
                    </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>
                    Hi. I'm Selvi, nice to meet you. Please take a look around.
                    </p>
                </div>
                    <div>
                        <p>
                        I have a background in youth work, non-governmental organizations and academic career.
                        I'm skilled at designing websites that achieve 
                        a balance between functionality and aesthetics,
                        where both aspects are given equal importance, for clients 
                        ranging from individuals and small-businesses all the
                        way to large enterprise corporations. What would you do if you had
                        a front-end developer available at your fingertips?
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About