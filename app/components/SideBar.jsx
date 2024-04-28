import React, { useState, useEffect } from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessAlarmsOutlinedIcon from '@mui/icons-material/AccessAlarmsOutlined';
import ScrollItems from './ScrollItems';
import Image from 'next/image';
import EventsScroll from './EeventsScroll';

export default function SideBar({ activetab }) {
  return (
    <div className="z-40 absolute hidden flex-row md:flex inset-y-0 right-0 h-screen w-auto">
      <div className="h-screen w-20 bg-violet-400 flex justify-center items-center overflow-hidden">
        <div className="flex rotate-90 whitespace-nowrap">
          {/* this the scrolling vertical div with repeated scrolling feature of the text */}
          <p className="text-3xl font-semibold animate-scroll infinite">Discover the ultimate collector&apos;s paradise at the heart of Delhi! Delve into a world of rare finds, exquisite treasures, and timeless collections at our upcoming event Discover the ultimate collector&apos;s paradise at the heart of Delhi! Delve into a world of rare finds,Discover the ultimate collector&apos;s paradise at the heart of Delhi! Delve into a world of rare finds, exquisite treasures, and timeless collections at our upcoming event Discover the ultimate collector&apos;s paradise at the heart of Delhi! Delve into a world of rare finds,Discover the ultimate collector&apos;s paradise at the heart of Delhi! Delve into a world of rare finds, exquisite treasures, and timeless collections at our upcoming event Discover the ultimate collector&apos;s paradise at the heart of Delhi! Delve into a world of rare finds,Discover the ultimate collector&apos;s paradise at the heart of Delhi! Delve into a world of rare finds, exquisite treasures, and timeless collections at our upcoming event Discover the ultimate collector&apos;s paradise at the heart of Delhi! Delve into a world of rare finds,</p>
        </div>
      </div>

      {/* here im changing the content of the sidebar on the basis of the activetab prop sent by navtoggler component */}

      <div className="h-screen w-auto bg-stone-900 overflow-y-auto">
        <div className="flex flex-col m-5">
          <h1 className="text-white text-2xl font-bold">Explore Your First<br />{activetab === 'events' ? 'Event' : 'Collectible'}</h1>
          <br />
          <br />
          {activetab === 'events' ? <h1 className="text-white text-6xl font-bold">Event Name</h1> : <h1 className="text-white text-6xl font-bold">Meta <br /> Lives</h1>}
          <br />
          {activetab === 'events' ? <h1 className="text-white text-2xl font-medium"><LocationOnOutlinedIcon fontSize='large' /> <span>Venue</span> <span><AccessAlarmsOutlinedIcon fontSize='large' /></span>04/03/2024 @19:00</h1> : <h1 className="text-white text-2xl font-bold">Live in Astrix</h1>}
          <br />
          {activetab === 'events' ? <h1 className="text-white text-lg font-medium">Dive into the realm of discovery at our <br /> exclusive event! Uncover hidden treasures,<br /> ignite your passion for exploration, and join us<br /></h1> : <h1 className="text-white text-lg font-medium">Prepare to be mesmerized by the grandeur<br /> of our upcoming event, where<br /> every corner reveals a treasure <br /></h1>}
          <br />
          {activetab !== 'events' && <div className="flex items-center">
            <div className="flex z-0 h-14 w-14 bg-white rounded-full bg-user-image"></div>
            <div className="flex z-10 h-14 w-14 -ml-4 bg-white rounded-full bg-user2-image"></div>
            <div className="flex z-20 h-14 w-14 -ml-4 bg-white rounded-full bg-user3-image"></div>
            <div className="flex z-30 h-14 w-14 -ml-4 bg-white rounded-full bg-user4-image"></div>
            <div className="flex z-40 h-14 w-14 -ml-4 bg-white rounded-full bg-user5-image"></div>
            <p className='ml-3 text-white text-lg font-medium'>22K people interested</p>
          </div>}
          <br />
          <br />
          {activetab === 'events' ? <EventsScroll /> : <ScrollItems />} {/* rendering different components based on the state of activetab */}
          <div className={`flex flex-row h-40 w-96 ${activetab === 'events' ? 'justify-between' : 'justify-end'} items-end mt-12`}>
            {activetab === 'events' && <Image src={'/assets/qr-Code.webp'} alt='card' height={100} width={100} />}
            <div className='flex items-center justify-center h-14 w-40 mt-14 bg-yellow-300 rounded-full text-xl font-bold'>
              Join WaitList
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
