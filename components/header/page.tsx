import Link from 'next/link'
import React from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai';

const Header = () => {
    return (
        <div className='z-50 sticky top-0'>
            <header className="bg-yellow-200 text-gray-600 body-font ">

                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
                    <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-black p-2 bg-green-400 rounded-full hover:bg-black hover:text-green-500" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl font-bold">Muhammad Asif Shahzad</span>
                    </a>
                    <nav className=" text-black md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/" className="mr-5 hover:text-green-600 font-semibold">Home</Link>
                        <Link href="/about" className="mr-5 hover:text-green-600 font-semibold">About</Link>
                        <Link href="/skills" className="mr-5 hover:text-green-600 font-semibold">Skills</Link>
                        <Link href="projectMain" className="mr-5 hover:text-green-600 font-semibold ">Projects</Link>
                        <Link href="/contact" className="hover:text-green-600 font-semibold ">Contact</Link>
                    </nav>

                    <a href="/public/assects/cv/myCv.pdf" download="myCv">
                        <button className="inline-flex items-center font-semibold  text-black bg-green-400 border-0 py-1 px-3 focus:outline-none  hover:bg-black hover:text-green-500 rounded-full text-base mt-4 md:mt-0">
                            Download CV
                            <AiOutlineCloudDownload className='text-xl ml-2' />
                        </button>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default Header