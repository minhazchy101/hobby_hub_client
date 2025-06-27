import React from 'react';
import { Link, useLoaderData } from 'react-router';
// import { AuthContext } from '../Context/AuthProvider';

const AllGroups = () => {
const createGroups = useLoaderData()
    // console.log(createGroups)
    
    return (
       <div className="my-5 w-full max-w-7xl mx-auto">
        <div className="text-center my-8">
          <h2 className="text-4xl font-bold mb-2">All Interest Groups</h2>
<p className="text-lg italic text-gray-500">
  "From creativity to adventure — there’s something for everyone."
</p>

        </div>
         {/* <h1 className="text-2xl font-semibold mb-4">All Groups: {createGroups?.length}</h1> */}
       <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 md:gap-3 lg:gap-6">
       
       {
        createGroups.map(createGroup => <div key={createGroup._id} className="card bg-base-100 shadow-xl">
  <figure className="h-68 overflow-hidden">
    <img
      src={createGroup?.imageURL}  className="object-cover w-full h-full" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {createGroup?.groupname}
    
    </h2>
    <p>{createGroup.description}</p>
      
    <div className="card-actions justify-end ">
      
    <Link to={`/group/${createGroup?._id}`} className="btn btn-info">See More</Link>
    </div>
  </div>
</div>)
       }
       
       </div>
       </div>
    );
};

export default AllGroups;