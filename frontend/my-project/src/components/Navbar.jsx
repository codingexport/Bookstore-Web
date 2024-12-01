import React, { useEffect } from "react";
import { useState } from "react";
import Login from "./login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

export default function Navbar() {
    const [authUser, setAuthUser] = useAuth();
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
            document.body.classList.add("dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
            document.body.classList.remove("dark");
        }
    }, [theme]);

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    const handleLoginClick = () => {
        const modal = document.getElementById("my_modal_3");
        if (modal) {
            modal.showModal();
        } else {
            console.error("Modal not found");
        }
    };

    return (
        <div
            className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50 ${sticky ? "sticky-navbar shadow-md transition-all duration-300 ease-in-out" : ""
                }`}
        >
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <button tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
                        >
                            <li><a href="/">Home</a></li>
                            <li><a href="/Course">Course</a></li>
                            <li><a href="/Contact">Contact</a></li>
                            <li><a href="/About">About</a></li>
                        </ul>
                    </div>
                    <a className="text-pink-500 relative left-1 text-xl md:right-9">
                        TechStackHub
                    </a>
                </div>

                <div className="navbar-end mr-12">
                    <div className="navbar-center hidden lg:flex mr-12">
                        <ul className="menu menu-horizontal px-1">
                            <li><a href="/">Home</a></li>
                            <li><a href="/Course">Course</a></li>
                            <li><a href="/Contact">Contact</a></li>
                            <li><a href="/About">About</a></li>
                        </ul>
                    </div>

                    <div className="mr-3 hidden md:block">
                        <label className="px-3 py-1 border border-stone-600 rounded-md flex items-center gap-2">
                            <input
                                type="text"
                                className="bg-transparent outline-none"
                                placeholder="Search"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 opacity-70 cursor-pointer"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </label>
                    </div>

                    <div className="mr-1 md:mr-7">
                        <label className="swap swap-rotate">
                            <input
                                type="checkbox"
                                className="theme-controller"
                                onChange={toggleTheme}
                                checked={theme === "dark"}
                            />
                            <svg
                                className="swap-off h-10 w-7 mt-1 fill-current text-yellow-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>
                            <svg
                                className="swap-on h-10 w-7 text-stone-50 mt-1 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-9.45-2,8,8,0,0,1-2-9.45,1,1,0,0,0-1.19-1.19A10,10,0,1,0,21.78,14.05,1,1,0,0,0,21.64,13Z" />
                            </svg>
                        </label>
                    </div>
                    {authUser ? (
                        <Logout />
                    ) : (
                        <div className="">
                            <a
                                className="bg-transparent text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                                onClick={() =>
                                    document.getElementById("my_modal_3").showModal()
                                }
                            >
                                Login
                            </a>
                            <Login />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
