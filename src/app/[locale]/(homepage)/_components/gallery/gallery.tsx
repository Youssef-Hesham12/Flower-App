import { useTranslations } from "next-intl";
import Image from "next/image";

// Interface for images
interface ImagesInterface {
  id: string;
  photo: string;
}

export default function Gallery() {
  //   Translations
  const t = useTranslations();

  //   Variables
  //   Gallrey photos
  const images: ImagesInterface[] = [
    { id: "1", photo: "/assets/images/gallrey/1.png" },
    { id: "2", photo: "/assets/images/gallrey/2.png" },
    { id: "3", photo: "/assets/images/gallrey/3.png" },
    { id: "4", photo: "/assets/images/gallrey/4.png" },
    { id: "5", photo: "/assets/images/gallrey/5.png" },
  ];

  return (
    <section>
      {/* Header */}
      <div className=" mb-9 flex items-center flex-col ">
        <h2 className="text-center font-roboto font-bold text-xs leading-8 tracking-[4px] rtl:text-xl rtl:tracking-[0]  text-custom-rose-900 mb-2 uppercase">
          {t("our-gallery")}
        </h2>
        <h3 className="relative text-[30px] capitalize font-inter font-bold leading-9 tracking-[0] text-custom-blue-900 before:absolute before:w-[338px] rtl:before:w-20 before:h-4 before:bottom-0 before:-z-10 before:rounded-tr-[20px] before:rounded-br-[20px] before:bg-custom-rose-25 after:absolute after:h-[2px] after:w-40 after:bottom-0 after:bg-custom-rose-900  after:left-0 rtl:after:right-0 rtl:before:right-0 rtl:before:rounded-tl-[20px] rtl:before:rounded-bl-[20px] text-center ">
          {t("lets-check-our-photo-gall")}
        </h3>
      </div>

      {/* Photos sections */}
      <div className="grid md:px-4  grid-cols-6 gap-4">
        {/* Galley images photo no 4 will take to cols */}
        {images.map((image, index) => (
          <div
            className={`relative  px-6 h-[411px]  col-span-6 w-full ${index === 3 ? "md:col-span-4" : "md:col-span-2"}`}
            key={image.id}
          >
            <Image
              className="rounded-[40px] w-full"
              sizes="100%"
              alt="Gallery photo"
              src={image.photo}
              objectFit="cover"
              fill
            />
          </div>
        ))}
      </div>
    </section>
  );
}
