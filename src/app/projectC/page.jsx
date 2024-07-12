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
    <div data-aos="fade-up" className='my-[50px] w-10/12 mx-auto'>
        <div>

        {/* Basic Info */}
      <div className="mb-10">
        <h1 className="text-xl font-bold mb-3">Basic Info</h1>
        <ul>
            <li>1. <span className='font-bold'>SEA Travels</span> website, which focuses on tourism in Southeast Asia, allows users to search for and post their own trip plans.</li>
            <li>2. JavaScript & React are mainly used for developing interfaces for the client side. I use Node.js and MongoDB for backend development.</li>
        </ul>
      </div>

      {/* features */}
      <div className="mb-10">
        <h1 className="text-xl font-bold mb-3">Features</h1>
        <ul>
            <li>1. Only users with active logins can add tourist spots on the add-tourist-spot page. Additionally, there is a country section where users can locate tourism attractions in certain nations.</li>
            <li>2. Users that are logged in can create, edit, and remove their own tourist spot using the CRUD operation.</li>
            <li>3. For authentication, I use both Firebase Google and Firebase email/password-based authentication.</li>
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
      <div className="card-actions mt-3">
                            <div className="tooltip tooltip-bottom" data-tip="Live-Link">
                            <a href='https://assignment-10-4fd57.web.app/' target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-neutral rounded-full"><FaEye className='text-xl' /></a>
                            </div>

                            <div className="tooltip tooltip-bottom" data-tip="Client-Code">
                            <a href='https://github.com/abtaheetaseen/Sea-Travels-Client' target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-neutral rounded-full"><FaCode className='text-xl' /></a>
                            </div>

                            <div className="tooltip tooltip-bottom" data-tip="Server-Code">
                            <a href='https://github.com/abtaheetaseen/Sea-Travels-Server' target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-neutral rounded-full"><FaServer className='text-xl' /></a>
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
