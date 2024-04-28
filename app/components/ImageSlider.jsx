import { useState, useRef, useEffect } from 'react';
import Image from "next/image";

export default function ImageSlider() {
  // Define state variables for image sources and headings
  const images=[
    { src: "/assets/event-1.webp", heading: "Event 1" },
    { src: "/assets/event-2.avif", heading: "Event 2" },
    { src: "/assets/event-3.jpg", heading: "Event 3" },
    { src: "/assets/event-4.avif", heading: "Event 4" }
  ];

  const scrollRef = useRef(null);
  const imageWidth = 400; // Width of each image

  useEffect(() => {
    // Calculate total width to determine when to stop scrolling
    const totalWidth = images.length * imageWidth;
    let currentScroll = 0;

    const intervalId = setInterval(() => {  
      // Scroll to the next image
      if (scrollRef.current) {
        currentScroll = (currentScroll + imageWidth) % totalWidth;
        scrollRef.current.scrollLeft = currentScroll;
      }
    }, 1500);
    return () => clearInterval(intervalId);
  }, [images, imageWidth]);

  return (
    <div className="flex flex-row h-3/4 w-screen md:w-5/12 ml-28 mt-14 overflow-hidden relative">
      <div className="flex gap-10 overflow-x-auto scroll-smooth focus:scroll-auto scroll-snap-type-x scroll-padding-x-20" ref={scrollRef} style={{ scrollbarWidth: "none" }}>
        {images.map((image, index) => (
          <div key={index} className={`z-20 h-full flex-shrink-0 scroll-snap-align-center`}>
            <h2 className="text-white mt-2 text-2xl font-bold">{image.heading}</h2>
            <div className="relative h-full w-96 h-full">
              <Image src={image.src} alt={image.heading} layout="fill" objectFit="cover" className="rounded-lg" />   
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
