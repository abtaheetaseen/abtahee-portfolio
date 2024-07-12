"use client"
import AOS from "aos"
import "aos/dist/aos.css"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaCode, FaEye, FaServer } from 'react-icons/fa'

const Page = () => {

  useEffect(() => {
    AOS.init()
}, [])

  return (
    <div data-aos="fade-up" className='my-[50px] w-10/12 mx-auto'>
        <div>

        {/* Basic Info */}
      <div className="mb-10">
        <h1 className="text-xl font-bold mb-3">Basic Info</h1>
        <ul>
            <li>1. <span className='font-bold'>Chef-Cuisine</span> is a restaurant-based website where users can see a restaurant cuisine and order from there.</li>
            <li>2. JavaScript & React are mainly used for developing interfaces for the client side. I use Node.js and MongoDB for backend development.</li>
        </ul>
      </div>

      {/* features */}
      <div className="mb-10">
        <h1 className="text-xl font-bold mb-3">Features</h1>
        <ul>
            <li>1. There is a My Added Food Items route where a user can see their every added food. The user can update and delete their food items by using the PUT and DELETE methods. My Order Page is also available for logged-in users. On this page, users can see their ordered food items.</li>
            <li>2. JWT is implemented on the ordered food item page.</li>
            <li>3. I use both Firebase Google and Firebase email/password-based authentication.</li>
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
                            <a href='https://chef-cuisine-f99ae.web.app/' target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-neutral rounded-full"><FaEye className='text-xl' /></a>
                            </div>

                            <div className="tooltip tooltip-bottom" data-tip="Client-Code">
                            <a href='https://github.com/abtaheetaseen/Chef-Cuisine-Client' target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-neutral rounded-full"><FaCode className='text-xl' /></a>
                            </div>

                            <div className="tooltip tooltip-bottom" data-tip="Server-Code">
                            <a href='https://github.com/abtaheetaseen/Chef-Cuisine-Server' target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-neutral rounded-full"><FaServer className='text-xl' /></a>
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

export default Page
