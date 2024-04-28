"use client"
import { FaReact } from "react-icons/fa6";
import { useState } from "react";
import SideBar from "../components/SideBar";
import TocIcon from '@mui/icons-material/Toc';
import NavToggler from "../components/NavToggler";
import SmallScreenSideBar from "../components/SmallScreenSideBar";
import EmblaCarousel from "../components/ImageSlider";

export default function Page() {
  const [activetab, setActivetab] = useState('event');
  const [showSidebar,setShowSidebar]=useState(false);
  const HandlecLick=()=>{
   setShowSidebar(!showSidebar);
   console.log(showSidebar)
  }
  const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className="relative overflow-x-hidden overflow-y-auto h-screen w-screen bg-stone-900">
      <div className="flex flex-row justify-between items-center p-3 h-20 w-screen">
        <h1 className="flex text-amber-500 text-5xl font-bold ml-16"><FaReact /> Astrix.</h1>
        <TocIcon
          sx={{ color: "white" }}
          fontSize="large"
          className="block md:hidden cursor-pointer"
          onClick={()=>{HandlecLick()}}
        />
      </div>
   {showSidebar && <SmallScreenSideBar activetab={activetab}/>}
   <SideBar activetab={activetab} />

      <div className="absolute h-auto w-auto top-40 left-20">
        <h1 className="text-white text-9xl opacity-10 text-gray-700 font-extrabold">ASTR<br/>IX<br/>EVENTS</h1>
        <NavToggler activetab={activetab} setActivetab={setActivetab} />
      </div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />

    </div>
  );
}
