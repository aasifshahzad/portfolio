import Link from 'next/link'
import React from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai';
import Image from 'next/image';
import logo from '../../../../public/assects/pics/logo_size-removebg-preview.png'

const Header = () => {
    return (
        <div className='z-50 sticky top-0'>
            <header className="bg-yellow-200 text-black body-font ">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
                    <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
                        <Image src={logo}
                            alt="Web Development"
                            width={45}
                            height={45}
                            className='rounded-full border-2  border-green-600 bg-yellow-200 hover:border-black' />
                        <span className="ml-3 text-xl font-bold">Muhammad Asif Shahzad</span>
                    </a>
                    <nav className=" text-black md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/" className="mr-5 hover:text-green-500 font-semibold">Home</Link>
                        <Link href="/about" className="mr-5 hover:text-green-600 font-semibold">About</Link>
                        <Link href="/skills" className="mr-5 hover:text-green-600 font-semibold">Skills</Link>
                        <Link href="projectMain" className="mr-5 hover:text-green-600 font-semibold ">Projects</Link>
                        <Link href="/contact" className="hover:text-green-600 font-semibold ">Contact</Link>
                    </nav>

                    <a href="/public/assects/cv/myCv.pdf" download="myCv">
                        <button className="inline-flex items-center font-semibold  text-black bg-green-400 border-0 py-1 px-3 focus:outline-none  hover:bg-black hover:text-green-400 rounded-full text-base mt-4 md:mt-0">
                            Download CV
                            <AiOutlineCloudDownload className='text-xl ml-2' />
                        </button>
                    </a>
                </div>
            </header >
        </div >
    )
}

export default Header