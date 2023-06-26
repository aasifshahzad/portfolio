import React from 'react'
import { AiOutlineCheckSquare } from 'react-icons/ai'

const Skills = () => {
    return (
        <section className="text-black body-font bg-yellow-200">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="ml-3 text-xl font-bold">
                        My Skills
                    </h1>
                </div>
                {/* new skill */}
                <div className="flex flex-wrap -m-4 -mt-[5rem]">
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-yellow-200 p-8 flex-col border-4 border-green-300">
                            <div className="flex items-center mb-3">
                                <div className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full bg-green-300 text-black flex-shrink-0">
                                    <AiOutlineCheckSquare className='text-bold' />
                                </div>
                                <h2 className="text-black text-base title-font font-semibold">
                                    HTML,CSS,JS
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <div className='relative h-1 w-full bg-green-200  rounded-xl'>
                                    <div className='absolute h-1 w-[80%] rounded-xl bg-black border-2 border-black'>
                                    </div>
                                </div>
                                <p className='font-bold text-right'>80%</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-yellow-200 p-8 flex-col border-4 border-green-300">
                            <div className="flex items-center mb-3">
                                <div className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full bg-green-300 text-black flex-shrink-0">
                                    <AiOutlineCheckSquare className='text-bold' />
                                </div>
                                <h2 className="text-black text-base title-font font-semibold">
                                    TypeScript
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <div className='relative h-1 w-full bg-green-200  rounded-xl'>
                                    <div className='absolute h-1 w-[90%] rounded-xl bg-black border-2   border-black'>
                                    </div>
                                </div>
                                <p className='font-bold text-right'>90%</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-yellow-200 p-8 flex-col border-4 border-green-300">
                            <div className="flex items-center mb-3">
                                <div className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full bg-green-300 text-black flex-shrink-0">
                                    <AiOutlineCheckSquare className='text-bold' />
                                </div>
                                <h2 className="text-black text-base title-font font-semibold">
                                    NextJs
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <div className='relative h-1 w-full bg-green-200  rounded-xl'>
                                    <div className='absolute h-1 w-[50%] rounded-xl bg-black border-2   border-black'>
                                    </div>
                                </div>
                                <p className='font-bold text-right'>50%</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* new skill */}
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-yellow-200 p-8 flex-col border-4 border-green-300">
                            <div className="flex items-center mb-3">
                                <div className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full bg-green-300 text-black flex-shrink-0">
                                    <AiOutlineCheckSquare className='text-bold' />
                                </div>
                                <h2 className="text-black text-base title-font font-semibold">
                                    Tailwind
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <div className='relative h-1 w-full bg-green-200  rounded-xl'>
                                    <div className='absolute h-1 w-[30%] rounded-xl bg-black border-2   border-black'>
                                    </div>
                                </div>
                                <p className='font-bold text-right'>30%</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-yellow-200 p-8 flex-col border-4 border-green-300">
                            <div className="flex items-center mb-3">
                                <div className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full bg-green-300 text-black flex-shrink-0">
                                    <AiOutlineCheckSquare className='text-bold' />
                                </div>
                                <h2 className="text-black text-base title-font font-semibold">
                                    Git
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <div className='relative h-1 w-full bg-green-200  rounded-xl'>
                                    <div className='absolute h-1 w-[100%] rounded-xl bg-black border-2   border-black'>
                                    </div>
                                </div>
                                <p className='font-bold text-right'>100%</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-yellow-200 p-8 flex-col border-4 border-green-300">
                            <div className="flex items-center mb-3">
                                <div className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full bg-green-300 text-black flex-shrink-0">
                                    <AiOutlineCheckSquare className='text-bold' />
                                </div>
                                <h2 className="text-black text-base title-font font-semibold">
                                    Python
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <div className='relative h-1 w-full bg-green-200  rounded-xl'>
                                    <div className='absolute h-1 w-[100%] rounded-xl bg-black border-2   border-black'>
                                    </div>
                                </div>
                                <p className='font-bold text-right'>100%</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* new skill */}
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-yellow-200 p-8 flex-col border-4 border-green-300">
                            <div className="flex items-center mb-3">
                                <div className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full bg-green-300 text-black flex-shrink-0">
                                    <AiOutlineCheckSquare className='text-bold' />
                                </div>
                                <h2 className="text-black text-base title-font font-semibold">
                                NumPy,Pandas,Data Analytics
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <div className='relative h-1 w-full bg-green-200  rounded-xl'>
                                    <div className='absolute h-1 w-[100%] rounded-xl bg-black border-2   border-black'>
                                    </div>
                                </div>
                                <p className='font-bold text-right'>100%</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-yellow-200 p-8 flex-col border-4 border-green-300">
                            <div className="flex items-center mb-3">
                                <div className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full bg-green-300 text-black flex-shrink-0">
                                    <AiOutlineCheckSquare className='text-bold' />
                                </div>
                                <h2 className="text-black text-base title-font font-semibold">
                                    Raspberry Pi
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <div className='relative h-1 w-full bg-green-200  rounded-xl'>
                                    <div className='absolute h-1 w-[90%] rounded-xl bg-black border-2   border-black'>
                                    </div>
                                </div>
                                <p className='font-bold text-right'>90%</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-yellow-200 p-8 flex-col border-4 border-green-300">
                            <div className="flex items-center mb-3">
                                <div className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full bg-green-300 text-black flex-shrink-0">
                                    <AiOutlineCheckSquare className='text-bold' />
                                </div>
                                <h2 className="text-black text-base title-font font-semibold">
                                Sensors, Electronic Components
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <div className='relative h-1 w-full bg-green-200  rounded-xl'>
                                    <div className='absolute h-1 w-[90%] rounded-xl bg-black border-2   border-black'>
                                    </div>
                                </div>
                                <p className='font-bold text-right'>90%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Skills