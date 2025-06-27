import React from 'react';

const StatsCard = ({ data , user}) => {
    
      const myGroups = data.filter(create => create?.email === user?.email);
   
  return (
     <div className="flex flex-col items-center justify-around gap-6">
        <div className="card card-dash bg-base-100 w-96">
  <div className="card-body p-6 rounded-xl shadow-md">
    <h2 className="card-title text-3xl font-bold">Total Groups : {data.length}</h2>
    
  </div>
</div>
        <div className="card card-dash bg-base-100 w-96">
  <div className="card-body p-6 rounded-xl shadow-md">
    <h2 className="card-title text-3xl font-bold">My Groups : {myGroups.length}</h2>
    
  </div>
</div>
        
      </div>
  );
};

export default StatsCard;
