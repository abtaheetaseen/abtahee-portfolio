import React from 'react'

const About = () => {

  return (
    <>
    <div className='text-center mt-[70px]'>
        <h1 className='text-4xl font-extrabold tracking-widest'>About</h1>
    </div>

    <div className='w-10/12 mx-auto my-[70px] lg:w-8/12'>

        <div>
            <p>As a react developer, I am well-versed in numerous computing scripts and libraries, including JavaScript, React, HTML, CSS, and Tailwind CSS. Additionally, I am conversant with server-side scripts like Rest API, MongoDB, Node.js, and Express.js. My GitHub account and projects demonstrate my coding skills. My expertise ranges from developing responsive and adaptable designs and functionality to enhancing website performance for a smooth user experience.</p>

            <div className='mt-5'>
                <h1 className='text-xl font-semibold'>Education</h1>
                <div>
                    <h1 className='text-md'>North South University</h1>
                    <p className='text-sm'>Computer Science and Engineering</p>
                    <p className='text-xs'>Jan 2021 - Present</p>
                </div>
            </div>

            <div className='flex items-center justify-center mt-10'>
                <a className='btn btn-sm border-none bg-yellow-500 hover:bg-yellow-400 text-white' target='_blank' alt="my resume" rel='noopener noreferrer' href='./ABTAHEE ASHAB SIDDIQUI-RESUME(react-developer).pdf'>
                    Download Resume
                </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default About
