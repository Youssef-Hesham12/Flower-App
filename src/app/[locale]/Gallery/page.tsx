/* eslint-disable @next/next/no-img-element */
import { Card, CardContent } from "../../../components/ui/card";

export default function Gallery() {
  const galleryImages = [
    { src: "/assets/images/gallrey/1.png", className: "col-span-1 row-span-1" },
    { src: "/assets/images/gallrey/2.png", className: "col-span-1 row-span-1" },
    { src: "/assets/images/gallrey/3.png", className: "col-span-1 row-span-1" },
    { src: "/assets/images/gallrey/4.png", className: "md:col-span-2 row-span-1 " }, // Added h-full and row-span-1
    { src: "/assets/images/gallrey/5.png", className: "col-span-1 row-span-1" },
  ];
  return (
    // <main className="container mx-auto px-4 py-8">
    //   <section className="space-y-8">
    //     {/* Header */}
    //     <div className="text-center space-y-2">
    //       <h2 className="text-[#F82BA9] uppercase tracking-wide text-sm font-bold">Our Gallery</h2>
    //       <h3 className="md:text-3xl text-xl font-bold text-[#160E4B]  w-fit text-center m-auto">
    //         <span className="border-b-rose-400 border-b-4">Let&apos;s Check</span> Our Photo Gallery
    //       </h3>
    //     </div>

    //     {/* Gallery Grid */}
    //     <div className="grid grid-cols-1 md:grid-cols-3 container  auto-rows-fr gap-6">
    //       {galleryImages.map((image, index) => (
    //         <Card
    //           key={index}
    //           className={`overflow-hidden border-none h-[15rem] xl:h-[20rem] ${image.className}`}
    //         >
    //           <CardContent className="p-0 h-full">
    //             <div className="relative w-full h-full">
    //               <img
    //                 src={image.src}
    //                 alt={`Gallery image ${index + 1}`}
    //                 className="w-full h-full object-cover rounded-lg transition-transform hover:scale-105"
    //               />
    //             </div>
    //           </CardContent>
    //         </Card>
    //       ))}
    //     </div>
    //   </section>
    // </main>
  );
}
