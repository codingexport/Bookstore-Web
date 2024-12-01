import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";


import { Link } from "react-router-dom";
function Course() {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log(res.data);
                setBook(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, []);

    return (
        <>
            <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 ">
                <div className="mt-12 grid gap-30 grid-cols-1 md:grid-cols-3">
                    {book.map((item) => (
                        <Cards key={item.id} item={item} />
                    ))}
                </div>
                <div className="pl-4 pr-16">
                    <h1 className="font-semibold mt-10 text-xl pb-2 animate__animated animate__fadeIn animate__delay-1s">Our Courses</h1>
                    <p className="animate__animated animate__fadeIn animate__delay-2s">
                        At <strong>TechStackHub</strong>, we offer a comprehensive collection of courses to help you master various aspects of technology and web development. Whether you're a beginner or looking to enhance your skills, we provide clear and detailed guides that break down complex topics in an easy-to-understand manner. Explore our hand-picked courses:
                    </p>
                    <div className="courses-list mt-6 space-y-6 ">
                        <div className="course p-4 border rounded-lg cursor-pointer shadow-pink-400 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-3 animate__animated animate__fadeInUp animate__delay-3s ">
                            <h2 className="font-bold text-lg">React Mastery Guide</h2>
                            <p className="animate__animated animate__fadeIn animate__delay-2s">A complete guide to mastering React.js, perfect for front-end developers looking to level up their skills.</p>
                        </div>
                        <div className="course p-4 border rounded-lg cursor-pointer shadow-pink-400 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-3 animate__animated animate__fadeInUp animate__delay-4s">
                            <h2 className="font-bold text-lg">Node.js Handbook</h2>
                            <p className="animate__animated animate__fadeIn animate__delay-2s">Dive deep into backend development with this Node.js guide. Learn how to build scalable web applications.</p>
                        </div>
                        <div className="course p-4 border rounded-lg cursor-pointer shadow-pink-400 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-3 animate__animated animate__fadeInUp animate__delay-5s">
                            <h2 className="font-bold text-lg">Python for Data Science</h2>
                            <p className="animate__animated animate__fadeIn animate__delay-2s">Unlock the power of Python in data science and machine learning, suitable for all levels.</p>
                        </div>
                        <div className="course p-4 border rounded-lg cursor-pointer shadow-pink-400 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-3 animate__animated animate__fadeInUp animate__delay-7s">
                            <h2 className="font-bold text-lg">Full Stack Developer Roadmap</h2>
                            <p className="animate__animated animate__fadeIn animate__delay-2s">A step-by-step guide to becoming a full-stack developer and building modern, dynamic web applications.</p>
                        </div>
                        <div className="course p-4 border rounded-lg cursor-pointer shadow-pink-400 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-3 animate__animated animate__fadeInUp animate__delay-8s">
                            <h2 className="font-bold text-lg">Machine Learning for Beginners</h2>
                            <p className="animate__animated animate__fadeIn animate__delay-2s">Start your journey into AI and machine learning with this beginner-friendly course.</p>
                        </div>
                        <div className="course p-4 border rounded-lg cursor-pointer shadow-pink-400 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-3 animate__animated animate__fadeInUp animate__delay-9s">
                            <h2 className="font-bold text-lg">Advanced CSS Techniques</h2>
                            <p className="animate__animated animate__fadeIn animate__delay-2s">Learn cutting-edge CSS techniques and build beautifully responsive and interactive websites.</p>
                        </div>
                        <div className="course p-4 border rounded-lg cursor-pointer shadow-pink-400 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-3 animate__animated animate__fadeInUp animate__delay-10s">
                            <h2 className="font-bold text-lg">Cybersecurity Essentials</h2>
                            <p className="animate__animated animate__fadeIn animate__delay-2s">Protect your applications and data with a solid foundation in cybersecurity essentials.</p>
                        </div>
                    </div>
                    <p className="mt-4 animate__animated animate__fadeIn animate__delay-10s">
                        Get started today and take your tech skills to the next level with <strong>TechStackHub</strong>!
                    </p>
                    <Link to="/">
                        <div className="flex justify-center md:justify-start  mt-14">
                            <button className="btn grow md:shrink md btn-secondary bg-slate-800 text-white animate-bounce">Back</button>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Course;