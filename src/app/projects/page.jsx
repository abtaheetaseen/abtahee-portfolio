import Link from 'next/link'
import React from 'react'
import { FaCode, FaEye, FaServer } from 'react-icons/fa'

const page = () => {
    return (
        <>
            <div className='text-center'>
        <h1 className='text-4xl font-extrabold tracking-widest my-[50px]'>Projects</h1>
    </div>
        <div className='flex items-center justify-center mb-[100px]'>
            <div className='grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2'>

                {/* project 1 */}
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://res.cloudinary.com/dbjkwdcmx/image/upload/v1719205651/Portfolio-Project%20Section/zd3tyt1bwrtn5pzjkqth.png"
                            alt="project" />
                    </figure>
                    <hr className='mt-10' />
                    <div className="card-body">
                        <h2 className="card-title">
                            * Chef-Cuisine *
                        </h2>
                        <p>Restaurant Based Website</p>
                        <div className="card-actions mt-3">
                            <a href='https://chef-cuisine-f99ae.web.app/' target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-neutral rounded-full"><FaEye className='text-xl' /></a>
                            <a href='https://github.com/abtaheetaseen/Chef-Cuisine-Client' target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-neutral rounded-full"><FaCode className='text-xl' /></a>
                            <a href='https://github.com/abtaheetaseen/Chef-Cuisine-Server' target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-neutral rounded-full"><FaServer className='text-xl' /></a>
                        </div>

                        <div className='mt-5 flex items-center justify-end'>
                        <Link href="/projectA" passHref className='btn btn-sm border-none bg-yellow-500 hover:bg-yellow-400 text-white'>
            View Details
        </Link>
                        </div>
                    </div>
                </div>

                {/* project 2 */}
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://res.cloudinary.com/dbjkwdcmx/image/upload/v1719206886/Portfolio-Project%20Section/hrnphxhlsvqty20ucd6x.png"
                            alt="project" />
                    </figure>
                    <hr className='mt-10' />
                    <div className="card-body">
                        <h2 className="card-title">
                            * LIFE-DROP *
                        </h2>
                        <p>Blood Donation Application</p>
                        <div className="card-actions mt-3">
                            <a href='https://life-drop-6707c.web.app/' target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-neutral rounded-full"><FaEye className='text-xl' /></a>
                            <a href='https://github.com/abtaheetaseen/Life-Drop-Client' target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-neutral rounded-full"><FaCode className='text-xl' /></a>
                            <a href='https://github.com/abtaheetaseen/Life-Drop-Server' target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-neutral rounded-full"><FaServer className='text-xl' /></a>
                        </div>

                        <div className='mt-5 flex items-center justify-end'>
                        <Link href="/projectB" passHref className='btn btn-sm border-none bg-yellow-500 hover:bg-yellow-400 text-white'>
            View Details
        </Link>
                        </div>
                    </div>
                </div>

                {/* project 3 */}
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://res.cloudinary.com/dbjkwdcmx/image/upload/v1719206757/Portfolio-Project%20Section/sayteu1v2bzwtbprciio.png"
                            alt="project" />
                    </figure>
                    <hr className='mt-10' />
                    <div className="card-body">
                        <h2 className="card-title">
                            * SEA-Travels *
                        </h2>
                        <p>Tourism Website</p>
                        <div className="card-actions mt-3">
                            <a href='https://assignment-10-4fd57.web.app/' target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-neutral rounded-full"><FaEye className='text-xl' /></a>
                            <a href='https://github.com/abtaheetaseen/Sea-Travels-Client' target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-neutral rounded-full"><FaCode className='text-xl' /></a>
                            <a href='https://github.com/abtaheetaseen/Sea-Travels-Server' target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-neutral rounded-full"><FaServer className='text-xl' /></a>
                        </div>

                        <div className='mt-5 flex items-center justify-end'>
                        <Link href="/projectC" passHref className='btn btn-sm border-none bg-yellow-500 hover:bg-yellow-400 text-white'>
            View Details
        </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default page
