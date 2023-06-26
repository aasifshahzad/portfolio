import React from 'react'
import Image from 'next/image'
import micro from '../../../../public/assects/pics/micro.jpg'

const ProjectsM = () => {
    let projectTitle: string = "Micro-Controller Project"
    let projectDisc: string = "Super "
    let projectNo: string = "No. "
    let project: string = "Project "
    return (
        <section className="text-black body-font bg-yellow-200 ">
            <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-col text-center w-full m-7">
                    <h1 className="ml-3 text-xl font-bold">
                        {projectTitle} Projects
                    </h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    {/* newProject */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={micro}
                            />
                            <div className="px-8 py-6 relative z-10 w-full border-4 border-green-400 bg-green-300 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                                    {project}{projectNo}1
                                </h2>
                                <h1 className="title-font text-lg font-medium text-black mb-3 line-clamp-1">
                                    {projectDisc}{projectTitle}
                                </h1>
                                <p className="leading-relaxed">
                                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                    microdosing tousled waistcoat.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* newProject */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={micro}
                            />
                            <div className="px-8 py-6 relative z-10 w-full border-4 border-green-400 bg-green-300 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                                    {project}{projectNo}2
                                </h2>
                                <h1 className="title-font text-lg font-medium text-black mb-3 line-clamp-1">
                                    {projectDisc}{projectTitle}
                                </h1>
                                <p className="leading-relaxed">
                                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                    microdosing tousled waistcoat.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* newProject */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={micro}
                            />
                            <div className="px-8 py-6 relative z-10 w-full border-4 border-green-400 bg-green-300 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                                    {project}{projectNo}3
                                </h2>
                                <h1 className="title-font text-lg font-medium text-black mb-3 line-clamp-1">
                                    {projectDisc}{projectTitle}
                                </h1>
                                <p className="leading-relaxed">
                                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                    microdosing tousled waistcoat.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* newProject */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={micro}
                            />
                            <div className="px-8 py-6 relative z-10 w-full border-4 border-green-400 bg-green-300 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                                    {project}{projectNo}4
                                </h2>
                                <h1 className="title-font text-lg font-medium text-black mb-3 line-clamp-1">
                                    {projectDisc}{projectTitle}
                                </h1>
                                <p className="leading-relaxed">
                                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                    microdosing tousled waistcoat.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* newProject */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={micro}
                            />
                            <div className="px-8 py-6 relative z-10 w-full border-4 border-green-400 bg-green-300 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                                    {project}{projectNo}5
                                </h2>
                                <h1 className="title-font text-lg font-medium text-black mb-3 line-clamp-1">
                                    {projectDisc}{projectTitle}
                                </h1>
                                <p className="leading-relaxed">
                                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                    microdosing tousled waistcoat.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* newProject */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={micro}
                            />
                            <div className="px-8 py-6 relative z-10 w-full border-4 border-green-400 bg-green-300 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                                    {project}{projectNo}6
                                </h2>
                                <h1 className="title-font text-lg font-medium text-black mb-3 line-clamp-1">
                                    {projectDisc}{projectTitle}
                                </h1>
                                <p className="leading-relaxed">
                                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                    microdosing tousled waistcoat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ProjectsM