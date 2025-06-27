import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className="w-full max-w-7xl mx-auto rounded-2xl  px-4">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8">
                
                {/* Text Side */}
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-5xl font-bold mb-4">Explore Your Hobbies!</h1>
                    <p className="text-lg text-gray-700 max-w-md">
                        Discover and express your passion through engaging slides. 
                        Whether it's hiking, painting, or photography — enjoy a journey of creativity!
                    </p>
                    <Link to="/register" className="btn btn-outline btn-primary mt-4">
                        Get Started
                    </Link>
                </div>

                {/* Image Side */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="https://i.ibb.co/4wPqXCGp/6241ecde-8dd7-4493-8733-e9e35141680b.png"
                        className="w-full max-w-md rounded-lg shadow-xl"
                        alt="Banner Illustration"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
