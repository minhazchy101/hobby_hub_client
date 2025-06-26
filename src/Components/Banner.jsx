import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <>
         <div className="w-full max-w-7xl mx-auto rounded-2xl py-12 px-4">

<div className='flex flex-col lg:flex-row justify-between items-center'>
   <div className='flex-1 '>
  <h1 className="text-5xl font-bold">Find Your Hobbies</h1>
      <p className="py-6">
        Connect Through shared Passions .
        Join or Create local group and meet like minded People.Explore hobbies from art to adventure.
Start or join local groups easily.
Grow, learn, and have fun—together.
      </p>
      <Link to='/register' className="btn btn-primary text-white">Get Started</Link>
                                          </div>
<div className="flex-1 flex justify-end">
            <img
              src="https://i.ibb.co/4wPqXCGp/6241ecde-8dd7-4493-8733-e9e35141680b.png"
              className="w-full md:max-w-lg rounded-lg shadow-lg "
            />

            </div>

              


</div>
 </div >
          
             
        
        </>
    );
};

export default Banner;