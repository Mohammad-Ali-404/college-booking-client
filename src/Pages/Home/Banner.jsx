/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
const Banner = () => {
    return (
        <div className='-mt-2'>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/2PgQdYY/banner.jpg)'}}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-2xl font-serif">
                <h1 className='text-4xl text-white mb-4'>ADMISSION'20</h1>
                <h1 className="mb-5 text-5xl font-bold">
                    <span className="block mb-2 text-[#fc9928]">Build your Successful</span>
                    <span className="block text-white">Future with Edification</span>
                </h1>
                <p className="mb-5 text-xl font-semibold">Find Your Preferred Colleges & Get Your Certificate</p>
                    <div className="ml-18 ">
                        <input
                            type="text"
                            placeholder="Search Your college"
                            className="px-4 py-2 border text-black border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <input type="button" value="Search" className=" rounded-lg px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300" />
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default Banner;