import React, { useState, useEffect } from 'react';

export default function NavToggler({ activetab, setActivetab }) {
  const [activeButton, setActiveButton] = useState('events'); 
  // Initial active button

  const handleClick = (button) => {
    setActiveButton(button);
    setActivetab(button); 
    // Update the activetab state in the parent component
  };

  // Update activeButton state when activetab state changes
  useEffect(() => {
    setActiveButton(activetab);
  }, [activetab]);
  //trigerring the useEffect hook when active tab is changed

  return (
    <div className="absolute flex flex-row h-7 w-28 md:h-14 md:w-64 mt-40 -ml-10 md:-ml-0 justify-between items-center bg-stone-800 rounded-full">
      <div
        className={`flex justify-center items-center h-full w-1/2 rounded-full ${
          activeButton === 'events' ? 'bg-stone-500' : 'bg-inherit'
        } ${activetab === 'events' ? 'active' : ''}transition-colors ease-in-out duration-100`}  
        //changing the color of the tabs according the active button state 
      >                                                                                         
      
      {/*which chnages with click on the tab button as mentioned in the handleclick function*/}
        <button className="text-white text-sm md:text-lg font-medium overflow-hidden" onClick={() => handleClick('events')}>
          Events
        </button>
      </div>
      <div
        className={`flex justify-center items-center h-full w-1/2 rounded-full ${
          activeButton === 'collections' ? 'bg-stone-500' : 'bg-inherit'
        } ${activetab === 'collections' ? 'active' : ''} transition-colors ease-in-out duration-100`}
      >
        <button className="overflow-hidden text-white text-sm md:text-lg font-medium" onClick={() => handleClick('collections')}>
          Collections
        </button>
      </div>
    </div>
  );
}
