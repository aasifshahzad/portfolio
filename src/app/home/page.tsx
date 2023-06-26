"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Typewriter from 'typewriter-effect';



const Hero_section = () => {
    return (
        <section className="bg-yellow-200 text-black body-font bg-fixed bg-cover bg-center">
            <div className="container mx-auto flex px-2 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-16  md:pr-16 flex flex-col md:items-start md:text-left mb-0 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                        Welcome, I am a
                        <br className='hidden lg:inline-block ' />
                        <Typewriter
                            options={{
                                strings: ['Web and IoT Software Engineer', 'Full Stack Web Developer', 'Python Automation Developer', 'IoT Developer with Raspberry Pi'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    {/* <div className='w-[100px] h-[2px] bg-green-400' ></div> */}
                    <p className=" text-black mb-8 leading-relaxed justify-items-stretch">
                        &emsp; &emsp; I am a versatile web developer and Python enthusiast skilled in both frontend and backend development. With expertise in creating visually appealing websites and web applications, I prioritize seamless user experiences. Additionally, I leverage Python for data analysis, automation, and machine learning to enhance functionality and deliver impactful solutions.
                    </p>
                    <div className="flex justify-center">
                        <Link href={"../projectMain"}>
                            <button className="inline-flex items-center font-semibold text-black bg-green-400 border-0 py-1 px-3 focus:outline-none  hover:bg-black  hover:text-green-500 rounded-full text-base mr-4 mt-4 md:mt-0">
                                Explore My Work
                            </button>
                        </Link>
                        <Link href={"../contact"}>
                            <button className=" inline-flex items-center font-semibold text-black bg-green-400 border-0 py-1 px-3 focus:outline-none  hover:bg-black  hover:text-green-500 rounded-full text-base mr-4 mt-4 md:mt-0">
                                Hire Me
                            </button>
                        </Link>

                    </div>
                </div>
                <div className=" px-6 m-0 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image width={465} src={require("../../../public/assects//pics/avtar-removebg.png")} alt="Asif" height={400} />
                </div>
            </div>
        </section>

    )
}

export default Hero_section