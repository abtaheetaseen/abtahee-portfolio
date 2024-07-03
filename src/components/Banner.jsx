import Link from 'next/link';
import React from 'react'

const Banner = () => {

  return (
    <div className='bg-gray-100 min-h-[70vh] flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='font-bold text-4xl lg:text-5xl'>ABTAHEE ASHAB SIDDIQUI</h1>
        <p className='w-7/12 mx-auto my-3 text-yellow-600'>REACT DEVELOPER | <span className='text-black'>I am available to build your website if you are looking for a web developer.</span></p>
        <Link href="/projects" passHref className='btn btn-sm border-none bg-yellow-500 hover:bg-yellow-400 text-white'>
            Projects
        </Link>
      </div>
    </div>
  )
}

export default Banner
