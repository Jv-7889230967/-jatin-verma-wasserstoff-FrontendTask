import Image from "next/image";

export default function ScrollItems() {
  const items = [
    { id: 1, title: "VR Headsets", imageUrl: "/assets/collectibles.webp" },
    { id: 2, title: "VR Headsets", imageUrl: "/assets/collectibles.webp" },
    { id: 3, title: "VR Headsets", imageUrl: "/assets/collectibles.webp" },
    { id: 4, title: "VR Headsets", imageUrl: "/assets/collectibles.webp" },
    { id: 5, title: "VR Headsets", imageUrl: "/assets/collectibles.webp" },
    { id: 6, title: "VR Headsets", imageUrl: "/assets/collectibles.webp" },
];

  return (
    <div className="flex flex-col">
      <h1 className="text-white text-md font-medium">Collectibles</h1>

      <div className="flex flex-row h-64 w-96 mt-2 overflow-x-auto">
  {items.map((item) => (
    <div key={item.id} className="flex flex-col justify-center items-center h-52 w-40 bg-violet-400 rounded-lg mr-4">
      <p className="text-black font-medium">{item.title}</p>
      <div className="relative h-40 w-40">
        <Image
          src={item.imageUrl}
          alt={item.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg border-solid border-2 border-gray-800"
        />
      </div>
    </div>
  ))}
</div>

    </div>
  );
}
