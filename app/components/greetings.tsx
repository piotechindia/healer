"use client"
import React, { useEffect, useState } from 'react';

const GreetingComponent = () => {
  const [greeting, setGreeting] = useState('Hello');
  const [username, setUsername] = useState('Pihu'); // You can replace this with the actual username logic

  useEffect(() => {
    const updateGreeting = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        setGreeting('Good Morning');
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting('Good Afternoon');
      } else if(currentHour >= 18 && currentHour < 22){
        setGreeting('Good Evening');
      } else{
        setGreeting('Good Night ...')
      }
    };

    // Update greeting initially
    updateGreeting();

    // Update greeting every minute
    const intervalId = setInterval(updateGreeting, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <a>{`${greeting} ${username}`}</a>
    </div>
  );
};

export default GreetingComponent;
