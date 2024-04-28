"use client"
import { FaReact } from "react-icons/fa6";
import { useState } from "react";
import SideBar from "../components/SideBar";
import TocIcon from '@mui/icons-material/Toc';
import NavToggler from "../components/NavToggler";
import SmallScreenSideBar from "../components/SmallScreenSideBar";
import ImageSlider from "../components/ImageSlider";

export default function Page() {
  const [activetab, setActivetab] = useState('event');
  const [showSidebar,setShowSidebar]=useState(false);
  const HandlecLick=()=>{
   setShowSidebar(!showSidebar);
   console.log(showSidebar)
  }

  return (
    <div className="relative overflow-x-hidden overflow-y-auto h-screen w-screen bg-stone-900">

      <div className="flex flex-row justify-between items-center p-3 h-20 w-screen">   {/*heading div for the second page conatinf heading and Logo*/}
        <h1 className="flex text-amber-500 text-5xl font-bold ml-16"><FaReact /> Astrix.</h1>   
        {/*React logo*/}
        {/*icon to display sidebar for smaller screens*/}
        <TocIcon    
          sx={{ color: "white" }}
          fontSize="large"
          className="block md:hidden cursor-pointer"
          onClick={()=>{HandlecLick()}}  
          />
          {/*toggeling feature for opening and closing the sidebar for a responsive layout*/}
      </div>
   {showSidebar && <SmallScreenSideBar activetab={activetab}/>}  {/*the smallescreen sidebar component showing only when showsidebar stae is true*/}
   <SideBar activetab={activetab} />  {/*sidebar components for larger screens*/}

        <ImageSlider/>
      <div className="absolute h-auto w-auto top-40 left-20">
        <h1 className="text-white text-9xl opacity-10 text-gray-700 font-extrabold">ASTR<br/>IX<br/>{activetab==='events'?'EVENTS':'COLLECTIONS'}</h1>
        <NavToggler activetab={activetab} setActivetab={setActivetab} showSidebar={showSidebar} />  {/*the toggler button component to toggle the content on sidebar*/}
      </div>     {/*we are sending two two props to check with tab is active to change the content of sidebar*/}

    </div>
  );
}
