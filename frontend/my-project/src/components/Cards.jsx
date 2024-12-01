import React from 'react';

function Cards({ item }) {  // Destructure 'item' properly
    console.log(item);  // Check the values in the console

    return (
        <div className="mt-4 my-3 p-3 ">
            <div className="card  bg-base-100 mt-6   p-8 w-96 mb-3 shadow-sm shadow-yellow-300">
                <figure>
                    <img
                        src={item.image}  // Use item.image to display the image
                        alt={item.name}    // Use item.name for the alt text
                    />
                </figure>
                <div className="card-body cursor-pointer ">
                    <h2 className="card-title">
                        {item.name}  {/* Display the name of the book */}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{item.title}</p>  {/* Display the book title */}
                    <div className="card-actions justify-between mt-4">
                        <div className="badge badge-outline px-4 py-3 cursor-pointer">{item.category}</div>
                        <div className="badge badge-outline px-4 py-3 hover:bg-pink-400 cursor-pointer hover:text-white border-2">{item.Free === 0 ? "Free" : "Paid"}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
