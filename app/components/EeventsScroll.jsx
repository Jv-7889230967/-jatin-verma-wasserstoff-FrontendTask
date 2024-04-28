import Image from "next/image";

export default function EventsScroll(){
    return(
        <div className="flex flex-col h-64 w-96">
            <h1 className="text-white text-2xl font-bold">Artist Lineup</h1>
            <div className="flex flex-row h-72 w-auto mt-10">
               <Image src={'/assets/events-1.jpg'} alt="picture" height={100} width={130} className="-mr-5 rounded-lg"/>
               <Image src={'/assets/events-2.webp'} alt="picture" height={140} width={130} className="z-30 -mr-5 rounded-lg"/>
               <Image src={'/assets/events-1.jpg'} alt="picture" height={100} width={130} className="-mr-5 rounded-lg"/>  
            </div>

        </div>
    )
}