import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Data from '../assets/Data.json'; // Ensure the correct JSON import path
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards'; // Ensure Cards component is correctly imported

function Freebook() {
    // Filter the data to get free items
    const filterData = Data.filter((item) => item.Free === 0);
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");

                const data = res.data.filter((data) => data.Free === 0);
                console.log(data);
                setBook(data);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, []);
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024, // For screens smaller than 1024px
                settings: {
                    slidesToShow: 2, // Show 2 slides
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768, // For screens smaller than 768px
                settings: {
                    slidesToShow: 1, // Show 1 slide
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };

    return (

        <div className=" max-w-screen-2xl  container mx-auto md:px-20 px-4">
            <div className=" max-w-screen-2xl relative right-20 container mx-auto md:px-20 px-18 ml-20 mb-3">
                <h1 className="font-semibold text-xl pb-2">Free Tech Courses to Boost Your Skills</h1>
                <p>
                    Dive into our collection of free tech courses designed to help beginners and tech enthusiasts excel in web development, DSA, AI, and more! Whether you're starting from scratch or looking to level up your skills, our easy-to-follow guides and tutorials will guide you every step of the way.
                </p>
            </div>
            <div>
                <div className="slider-container  ">
                    {/* Pass slider settings and map over filterData */}
                    <Slider {...settings}>
                        {book.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Freebook;
