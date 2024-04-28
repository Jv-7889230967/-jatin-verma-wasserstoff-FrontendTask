import Image from "next/image";

export default function EventsScroll(){
    return(
        <div className="flex flex-col h-64 w-96">
            <h1 className="text-white text-2xl font-bold">Artist Lineup</h1>
            {/* Used div tag here and set their bg image because image tag was giving restriction is setting theri size and presentation*/}
            <div className="flex flex-row items-center h-72 w-auto mt-10">
                <div className="h-[150px] w-[150px] bg-people-1-image -mr-3">
                </div>
                <div className="z-20 h-[190px] w-[230px] bg-people-2-image">
                </div>
                <div className="h-[150px] w-[150px] bg-people-3-image -ml-3">
                </div>
            </div>

        </div>
    )
}