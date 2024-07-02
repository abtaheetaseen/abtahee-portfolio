import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {

    return (

        <div className="navbar bg-base-100">
            <div className="flex-1 gap-3">
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

            <div className='mr-2'>
                <Link href={`/`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

                </Link>
            </div>

            <div className="flex-none gap-2">

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://res.cloudinary.com/dbjkwdcmx/image/upload/v1718871480/Aspergus%20Resort/x5bvkxbfghahrh4crfyy.png" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border-2 border-yellow-500 gap-2">
                        <li>
                            <Link href={'/'}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={'/projects'}>
                                Projects
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
