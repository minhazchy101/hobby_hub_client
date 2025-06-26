
import React, { useEffect, useState } from 'react';

const CountUpProgress = ({ startDate, endDate }) => {
  const [timeLeft, setTimeLeft] = useState(null);

  const calculateTimeLeft = () => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (now < start) {
      return null;
    }

    const diff = end - now;
    if (diff <= 0) {
     
      return null;
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

   CountUpProgress
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [startDate, endDate]);

  if (!timeLeft) {
    return <span className="text-gray-600">Not available or time’s up</span>;
  }

  return (
    <span className="font-semibold text-primary">
      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s left
    </span>
  );
};

export default CountUpProgress;
