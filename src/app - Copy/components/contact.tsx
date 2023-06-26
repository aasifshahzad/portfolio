import React from 'react'

const Contact = () => {
    return (
        <section className="text-black body-font relative bg-yellow-200">
            <div className="container px-5 py-1mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 mt-10 p-10 flex items-end justify-start relative  ">
                    <iframe
                        width="90%"
                        height="80%"
                        className="absolute inset-0"
                        // frameBorder={0}
                        title="map"
                        // marginHeight={0}
                        // marginWidth={0}
                        // scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1076.6685957467826!2d67.11184248574794!3d24.81369661360741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b741d57197f%3A0xd01e6a26f002593a!2sPlot%20841%2C%20Block%20D%20Bhittai%20Colony%20Korangi%20Creek%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1686518570221!5m2!1sen!2s"
                        style={{ filter: "contrast(1.9) opacity(0.9)" }}
                    />
                    <div className=" relative flex flex-wrap py-0 mb-5 mr-20 shadow-md  bg-white rounded border border-green-300">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="leading-7 text-sm text-black font-semibold">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                            Plot 841, Block D Bhittai Colony Korangi Creek, Karachi, Sindh, Pakistan
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="leading-7 text-sm text-black font-semibold">
                                EMAIL
                            </h2>
                            <a className="text-blue-500 leading-relaxed">asif17186@gmail.com</a>
                            <h2 className="leading-7 text-sm text-black font-semibold">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">0336-0832542</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-yellow-200 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="ml-0 text-xl font-bold">
                        Contact
                    </h2>
                    <p className="leading-relaxed mb-5 font-semibold text-black">
                        Feel free to contact me!
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-black font-semibold">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-white rounded border border-green-300 focus:border-green-300 focus:ring-2 focus:ring-green-300 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-black font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white rounded border border-green-300 focus:border-green-300 focus:ring-2 focus:ring-green-300 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-black font-semibold">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="h-32 w-full bg-white rounded border border-green-300 focus:border-green-300 focus:ring-2 focus:ring-green-300 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            defaultValue={""}
                        />
                    </div>
                    <button className="  items-center font-semibold text-black bg-green-400 border-0 p-2 focus:outline-none  hover:bg-black  hover:text-green-500 rounded-full text-center mr-3 mt-4 md:mt-0">
                        Send Message
                    </button>

                </div>
            </div>
        </section>

    )
}

export default Contact