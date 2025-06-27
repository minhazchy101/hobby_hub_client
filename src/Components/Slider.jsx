import React from 'react';
import { Link } from 'react-router';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <div className=" w-full max-w-7xl mx-auto px-4 my-3 ">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 min-h-[70vh]">
                
                {/* Text Content */}


                <div className="flex-1 text-center lg:text-left ">
                                  <h1 className='text-4xl'>
                                    Welcome to 
                                    <span className="text-4xl font-extrabold text-primary"> Hobby Hub</span>
                                  </h1>
                                    <p className="py-4 text-gray-600 text-lg">
                                        Connect through shared passions. Start or join local groups to grow, learn, and have fun—together!
                                    </p>
                                    <Link to="/register" className="btn btn-outline btn-primary mt-4">
                                        Get Started
                                    </Link>
                                </div>

                {/* Slider */}
                <div className="flex-1 w-full h-[60vh] flex items-center justify-center rounded-lg ">
                    <Carousel 
                        autoPlay 
                        infiniteLoop 
                        showThumbs={false} 
                        showStatus={false} 
                        showArrows={false} 
                        interval={3000}
                    >
                        <div className="h-[60vh] flex items-center justify-center">
                            <img 
                                src="https://i.ibb.co/0R7kSZWC/a5ec4fd1-66ba-4839-914c-cd814e904fc6.png" 
                                className="h-full object-contain rounded-2xl" 
                                alt="Slide 1" 
                            />
                        </div>
                        <div className="h-[60vh] flex items-center justify-center">
                            <img 
                                src="https://i.ibb.co/5XSyBnLK/56b5af30-cda3-46b7-ba40-1d3192b5b64b.png" 
                                className="h-full object-contain rounded-2xl" 
                                alt="Slide 2" 
                            />
                        </div>
                        <div className="h-[60vh] flex items-center justify-center ">
                            <img 
                                src="https://i.ibb.co/h1tJ2n0B/42d43f7d-650b-4a5a-b5a5-d2438a618849.png" 
                                className="h-full object-contain rounded-2xl" 
                                alt="Slide 3" 
                            />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Slider;
