import React from 'react'
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  return (

    <>
    <div className='text-center'>
        <h1 className='text-4xl font-extrabold tracking-widest'>Skills</h1>
    </div>

      <section className="w-10/12 mx-auto my-[70px] lg:w-8/12">
	<div className="container flex flex-col justify-center mx-auto">

		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="font-bold text-md px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Front-End</summary>
                
                <div className='flex items-center justify-start'>
				<div className="py-6 pt-0 ml-4 -mt-4 dark:text-gray-600 text-5xl text-orange-600">
                <FaHtml5 />
                </div>

                <div className="py-6 pt-0 ml-2 -mt-4 dark:text-gray-600 text-5xl text-blue-500">
                <FaCss3Alt />
                </div>

                <div className="py-6 pt-0 ml-2 -mt-4 dark:text-gray-600 text-5xl text-blue-500">
                <RiTailwindCssFill />
                </div>

                <div className="py-6 pt-0 ml-2 -mt-4 dark:text-gray-600 text-5xl text-yellow-400">
                <IoLogoJavascript />
                </div>

                <div className="py-6 pt-0 ml-2 -mt-4 dark:text-gray-600 text-5xl text-blue-400">
                <FaReact />
                </div>
                </div>

			</details>
			<details className="w-full border rounded-lg">
				<summary className="font-bold text-md px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Backend</summary>
                
                <div className='flex items-center justify-start'>
				<div className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600 text-5xl text-green-600">
                <FaNodeJs />
                </div>

                <div className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600 text-5xl text-green-500">
                <SiMongodb />
                </div>
                </div>

			</details>
			<details className="w-full border rounded-lg">
				<summary className="font-bold text-md px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Tools</summary>

                <div className='flex items-center justify-start'>
				<div className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600 text-5xl text-orange-500">
                <FaGitAlt />
                </div>

                <div className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600 text-5xl text-black">
                <FaGithub />
                </div>

                <div className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600 text-5xl text-blue-500">
                <VscVscode />
                </div>
                </div>

			</details>
		</div>
	</div>
</section>
    </>
  )
}

export default Skills
