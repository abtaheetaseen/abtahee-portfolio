"use client"
import AOS from "aos"
import "aos/dist/aos.css"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaCode, FaEye, FaServer } from 'react-icons/fa'

const page = () => {

  useEffect(() => {
    AOS.init()
}, [])


  return (
    <div data-aos="fade-up"  className='my-[50px] w-10/12 mx-auto'>
        <div>

        {/* Basic Info */}
      <div className="mb-10">
        <h1 className="text-xl font-bold mb-3">Basic Info</h1>
        <ul>
            <li>1. <span className='font-bold'>LIFE-DROP</span> is a blood donation application website. Donors can find blood donation requests in their local region and get in touch with the recipients.</li>
            <li>2. JavaScript & React are mainly used for developing interfaces for the client side. I use Node.js and MongoDB for backend development.</li>
        </ul>
      </div>

      {/* features */}
      <div className="mb-10">
        <h1 className="text-xl font-bold mb-3">Features</h1>
        <ul>
            <li>1. There is an admin, volunteer and donor dashboard. Admin has access to all features, including user management, donation requests, and content management whereas volunteers create and manage donation requests.</li>
            <li>2. A Give Fund page available where users can donate money. I did it by using Stripe Payment.</li>
            <li>3. A Pagination feature has been added in some pages and also a donor can register, view donation requests, respond to them, and maintain his own profile.</li>
        </ul>
      </div>

      {/* to run locally */}
      <div className="mb-10">
        <h1 className="text-xl font-bold mb-3">Run Locally</h1>
        <ul>
            <li>1. Click the green Code button and copy the URL.</li>
            <li>2. Open a terminal and navigate to the directory where you want to clone the repository.</li>
            <li>3. Run this command: git clone and repo url</li>
            <li>4. To install dependencies, use npm install command.</li>
            <li>5. To run the project, use npm start command.</li>
        </ul>
      </div>

      {/* actions */}
      <div className="card-actions">

                            <div className="tooltip tooltip-bottom" data-tip="Live-Link">
                            <a href='https://life-drop-6707c.web.app/' target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-neutral rounded-full"><FaEye className='text-xl' /></a>
                            </div>

                            <div className="tooltip tooltip-bottom" data-tip="Client-Code">
                            <a href='https://github.com/abtaheetaseen/Life-Drop-Client' target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-neutral rounded-full"><FaCode className='text-xl' /></a>
                            </div>

                            <div className="tooltip tooltip-bottom" data-tip="Server-Code">
                            <a href='https://github.com/abtaheetaseen/Life-Drop-Server' target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-neutral rounded-full"><FaServer className='text-xl' /></a>
                            </div>

                        </div>

                        <div className='mt-10 flex items-center justify-end'>
                        <Link href="/projects" passHref className='btn btn-sm border-none bg-yellow-500 hover:bg-yellow-400 text-white'>
                        Back To Projects
        </Link>
                        </div>

      </div>
    </div>
  )
}

export default page
