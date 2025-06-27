import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import StatsCard from './StatsCard';
import User from './User';
import { AuthContext } from '../Context/AuthProvider';


const DashMain = () => {
    const data = useLoaderData()
    console.log(data)
     const { user } = use(AuthContext);
     console.log(user)
    return (
        <>
          <div className='text-center mb-6'>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">Dashboard Home</h2>
      <p>This is your dashboard overview. You can See users and groups.</p>
    </div> 

    <div className='flex flex-col md:flex-row items-center justify-around gap-6'>
    <StatsCard data={data} user={user}></StatsCard>
        
    <User user={user}></User>

    </div>


        </>
    );
};

export default DashMain;