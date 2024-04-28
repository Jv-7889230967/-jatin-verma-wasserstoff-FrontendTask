"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaReact } from "react-icons/fa6";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleClick = () => {
      router.push('/pages');
    };
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [router]);
  
  return (
    <div className="absolute h-screen w-screen overflow-hidden bg-orange-100">
      <h1 className="flex fixed gap-4 inset-y-12 inset-x-24 text-black text-5xl font-bold"><FaReact /> Astrix.</h1>
 {/*multiple section for displaying text*/}
       <div className="fixed h-[32rem] w-[80%] overflow-x-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col h-full w-[73rem] gap-3">
        <section className="flex flex-row h-20 w-full gap-3 items-center m-2">
          <p className="text-6xl font-bold not-italic">WE</p>
          <div className="w-64 h-16 galaxy-image transition-transform"></div>
          <p className="text-6xl font-bold not-italic">ORGANIZE THE</p>
        </section>

        <section className="flex h-20 w-[70rem] gap-3 items-center m-2">
          <p className="text-6xl font-bold not-italic">CONNECTION</p>
          <div className="h-16 w-52 garden-image"></div>
        </section>

        <section className="flex h-20 w-[70rem] gap-3 items-center m-2">
          <div className="h-16 w-52 party-image"></div>
          <p className="text-6xl font-bold not-italic">BETWEEN</p>
          <div className="h-16 w-52 singing-image"></div>
          <p className="text-6xl font-bold not-italic">MUSIC</p>
        </section>

        <section className="flex h-20 w-[70rem] gap-3 items-center m-2">
          <p className="text-6xl font-bold not-italic">ARTIST</p>
          <div className="h-16 w-52 concert-image"></div>
          <p className="text-6xl font-bold not-italic">CULTURE</p>
          <div className="h-16 w-52 crowd-image"></div>
        </section>

        <section className="flex h-20 w-[70rem] gap-3 items-center m-2">
          <div className="h-16 w-96 flowers-image"></div>
          <p className="text-6xl font-bold not-italic">ART</p>
          <div className="h-16 w-52 flowers2-image"></div>
          <p className="text-6xl font-bold not-italic">&COLLECTIONS</p>
        </section>

      </div>

       </div>
    </div>
  );
}
