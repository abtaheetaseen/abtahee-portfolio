"use client"; // Add this directive at the top
import emailjs from '@emailjs/browser';
import React, { useState } from 'react'
import { FaHome, FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";

const Contact = () => {

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const serviceId = "service_7n8qw1w";
    const templateId = "template_ir9882u";
    const publicKey = "ZIBBiPXFKg-9Ih3dI";
    
    const templateParams = {
      to_name: "abtahee taseen",
      from_name: name,
      from_email: email,
      message: message
    }
    
    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((res) => {
      console.log("email sent", res)
      setLoading(false);
      form.reset();
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
          <div className='text-center'>
        <h1 className='text-4xl font-extrabold tracking-widest'>Contact</h1>
    </div>


    <div className="w-10/12 mx-auto mt-[70px] lg:w-8/12 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">

<div className='flex items-center justify-center mb-10'>
        <div>
            <div className='flex items-center justify-center'>
        <FaHome className='text-yellow-500 text-2xl mb-2' />
        </div>
        <h1>Address : Dhaka, Bangladesh</h1>
        </div>
        </div>

        <div className='flex items-center justify-center mb-10'>
        <div>
        <div className='flex items-center justify-center'>
        <SiGmail className='text-yellow-500 text-2xl mb-2' />
        </div>
        <h1>Email : abtahee125@gmail.com</h1>
        </div>
        </div>

        <div className='flex justify-center'>
        <div>
        <div className='flex items-center justify-center'>
        <FaPhoneAlt className='text-yellow-500 text-2xl mb-2' />
        </div>
        <h1>Phone : +8801931183851</h1>
        </div>
        </div>
    </div>

    <div className='mb-[70px] mt-[50px]'>
      <h1 className='text-xl font-semibold text-center'>Email Me</h1>
    <section>
    <div className="container flex items-center justify-center mx-auto w-10/12">
        <form onSubmit={handleSubmit} className="w-full max-w-md">

        <div className="mt-4">
                

                <input type="text" name='name' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-yellow-400 dark:focus:border-yellow-300 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Name" />
            </div>

            <div className="mt-4">
                

                <input type="email" name='email' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-yellow-400 dark:focus:border-yellow-300 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
            </div>

            <div className="mt-4">
                

                <textarea type="text" placeholder='Message' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-3 dark:border-gray-600 focus:border-yellow-400 dark:focus:border-yellow-300 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40" name="message" id="" cols="30" rows="5"></textarea>
            </div>

            <div className="mt-6">
                
                <input className="cursor-pointer w-full px-6 py-3 text-sm font-medium tracking-widest text-white capitalize transition-colors duration-300 transform bg-yellow-400 rounded-lg hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-opacity-50" type="submit" value={loading ? "Sending..." : "Send"} />


            </div>
        </form>
    </div>
</section>
    </div>
    </>
  )
}

export default Contact
