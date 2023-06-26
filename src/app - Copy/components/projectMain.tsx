import React from 'react'
import Image from 'next/image'
import web from "../../../public/assects/pics/web_edev_4592x2584.jpg"
import python from "../../../public/assects/pics/python_4592x2584.jpg"
import micro from "../../../public/assects/pics/microcontroller.jpg"

const ProjectMain = () => {
    return (
        <section className="text-black body-font bg-yellow-200 ">
            <div className="container px-5 py-16 mx-auto">
                {/* Title */}
                <div className="flex flex-col text-center w-full mb-10">
                    <h1 className="ml-3 text-xl font-bold">
                        Projects Portfolio
                    </h1>
                    <h2 className="text-base text-black tracking-widest font-bold title-font mb-1 mt-1">
                        A Showcase of My Passion-Driven and Creative Projects
                    </h2>
                </div>

                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {/* category */}
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-48 overflow-hidden">
                            <Image src={web}
                                alt="Web Development"
                                width={512}
                                height={160} />
                        </div>
                        <h2 className="text-lg font-bold title-font text-black mt-5">
                            WEB
                        </h2>
                        <p className="text-base leading-relaxed mt-2 line-clamp-3">
                            I create visually appealing, user-friendly websites while staying updated with industry trends to deliver effective digital solutions for businesses and organizations.
                        </p>
                        <a className="mt-3 text-green-400 hover:text-black hover:font-bold inline-flex items-center">
                            <button className="flex mx-auto mt-20 font-semibold  text-black bg-green-400 border-0 py-2 px-8 focus:outline-none  hover:bg-black hover:text-green-500 rounded-full text-base md:mt-0">
                                Explore
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    className="w-4 h-4 ml-2 mt-1"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </a>
                    </div>
                    {/* category */}
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-48 overflow-hidden">
                            <Image src={python}
                                alt="Web Development"
                                width={512}
                                height={160} />
                        </div>
                        <h2 className="text-lg font-bold title-font text-black mt-5">
                            PYTHON
                        </h2>
                        <p className="text-base leading-relaxed mt-2 line-clamp-3">
                            I am a professional Python developer with extensive knowledge of the Python programming language, adept at developing efficient and innovative software solutions.
                        </p>
                        <a className="mt-3 text-green-400 hover:text-black hover:font-bold inline-flex items-center">
                            <button className="flex mx-auto mt-20 font-semibold  text-black bg-green-400 border-0 py-2 px-8 focus:outline-none  hover:bg-black hover:text-green-500 rounded-full text-base md:mt-0">
                                Explore
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    className="w-4 h-4 ml-2 mt-1"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </a>
                    </div>
                    {/* category */}
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-48 overflow-hidden">
                            <Image src={micro}
                                alt="Web Development"
                                width={512}
                                height={160} />
                        </div>
                        <h2 className="text-lg font-bold title-font text-black mt-5">
                            MICRO-CONTROLLER
                        </h2>
                        <p className="text-base leading-relaxed mt-2 line-clamp-3">
                        I combine my expertise in electronics and programming to create unique and functional projects using Raspberry Pi and other microcontrollers by integrating hardware and software.
                        </p>
                        <a className="mt-3 text-green-400 hover:text-black hover:font-bold inline-flex items-center">
                            <button className="flex mx-auto mt-20 font-semibold  text-black bg-green-400 border-0 py-2 px-8 focus:outline-none  hover:bg-black hover:text-green-500 rounded-full text-base md:mt-0">
                                Explore
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    className="w-4 h-4 ml-2 mt-1"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ProjectMain