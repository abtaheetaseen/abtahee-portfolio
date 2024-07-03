import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-gray-100 text-center py-5'>
      <footer className="items-center p-4 w-10/12 lg:w-8/12 mx-auto">
  <div>
    <div className='text-center'>
    <h1 className='text-xl mb-10 font-bold'>Abtahee Ashab Siddiqui | React Developer</h1>
    </div>


    <div className='flex items-center justify-center gap-5 mb-10'>
                <div className='cursor-pointer'>
                    <a href='https://www.linkedin.com/in/abtahee-taseen/' target='_blank' rel='noopener noreferrer'>
                    
                    <FaLinkedin className='text-2xl text-blue-500' />
                    
                    </a>
                </div>

                <div className='cursor-pointer'>
                    <a href="https://www.facebook.com/profile.php?id=100086301711761" target='_blank' rel='noopener noreferrer'>
                <FaFacebook className='text-2xl text-blue-700' />
                </a>
                </div>

                <div className='cursor-pointer'>
                    <a href="https://github.com/abtaheetaseen" target='_blank' rel='noopener noreferrer'>
                <FaGithub className='text-2xl' />
                </a>
                </div>
            </div>

    <p>You cannot have great software without a great team, and most software teams behave like dysfunctional families. - Jim McCarthy</p>
  </div> 
</footer>
    </div>
  )
}

export default Footer
