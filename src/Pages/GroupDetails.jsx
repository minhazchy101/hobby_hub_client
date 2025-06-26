import React from 'react';
import { useLoaderData } from 'react-router';

import CountUpProgress from '../Components/CountUpProgress';
import Swal from 'sweetalert2';

const GroupDetails = () => {
  const theGroup = useLoaderData();

  const {
    imageURL,
    groupname,
    description,
    hobbyCategory,
    startDate,
    meetingLocation,
    maxMembers,
    name,
    email,
    countdownEnd
  } = theGroup;

  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(countdownEnd);

  const isActive = now >= start && now <= end;
  const isExpired = now > end;
  const isNotStarted = now < start;

  return (
    <div className='w-full md:max-w-6xl mx-auto my-5'>
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img
            src={imageURL}
            alt={groupname}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{groupname}</h1>
            <p className="text-lg">{description}</p>
            <ul className="space-y-2 text-base">
              <li><strong>Hobby Category:</strong> {hobbyCategory}</li>
              <li><strong>Start Date:</strong> {start.toLocaleString()}</li>
              <li><strong>End Date:</strong> {end.toLocaleString()}</li>
              <li>
                <strong>Time Remaining:</strong> <CountUpProgress startDate={startDate} endDate={countdownEnd} />
              </li>
              <li><strong>Meeting Location:</strong> {meetingLocation}</li>
              <li><strong>Max Members:</strong> {maxMembers}</li>
              <li><strong>Organizer Name:</strong> {name}</li>
              <li><strong>Email:</strong> {email}</li>
            </ul>

            {isActive && (
              <button onClick={()=>Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Thanks For Joining",
  showConfirmButton: false,
  timer: 1500
})} className="btn btn-success font-bold text-lg text-white">Join</button>
            )}
            {isNotStarted && (
              <div className="mt-4 text-yellow-600 font-medium">
                Group hasn’t started yet. Please wait...
              </div>
            )}
            {isExpired && (
              <div className="mt-4 text-red-600 font-semibold">
                This group is no longer active.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
