import React from 'react'
import Banimg from './../assets/Banimg.png';
export default function Banner() {
    return (
        <>
            <div className=" max-w-screen-2xl dark:bg-slate-900 dark:text-white container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
                <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
                    <div className="space-y-8">
                        <h1 className="text-2xl md:text-4xl font-bold">
                            Hello, welcomes here to learn something{" "}
                            <span className="text-pink-500">new everyday!!!</span>
                        </h1>
                        <p className="text-sm md:text-xl">
                            TechStackHub makes  easy for beginners! We break down complex topics in web development, Dsa, and AI into simple, clear guides. Start here to build your skills and confidence in tech from the ground up.
                        </p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4 animate-spin opacity-70"
                            >
                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>

                            <input type="text" className="grow  " placeholder="Email" />

                        </label>
                    </div>
                    <div className="flex justify-center md:justify-start  mt-10">
                        <button className="btn grow md:shrink md btn-secondary animate-bounce">Get Started</button>
                    </div>

                </div>
                <div className=" order-1 w-full mt-10   animate-pulse md:w-1/2 md:ml-32">
                    <img src={Banimg} className='w-92 h-[40em]  ' alt='' />
                </div>
            </div>
        </>

    )
}
