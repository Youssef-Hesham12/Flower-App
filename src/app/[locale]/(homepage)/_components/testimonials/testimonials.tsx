"use client";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import TestimonailsCard from "@/components/features/testimonials/testimonilas-card";

export default function Testimonails() {
  // Translation
  const t = useTranslations();

  // States
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  // state for active button
  const [activeButton, setActiveButton] = useState<string>("next");

  // Variables
  // Testimonails feedsback
  const testimonialsFeeds: TestimonailsFeedsInterface[] = [
    {
      id: "1",
      image: "/assets/images/testimonials/1.png",
      name: t("ahmed-mohamed"),
      role: t("customer"),
      feedback: t("testimonials-feedback"),
      ratting: 5,
      commentImage: "/assets/images/testimonials/comment.png",
    },
    {
      id: "2",
      image: "/assets/images/testimonials/2.png",
      name: t("mohamed-ahmed"),
      role: t("customer"),
      feedback: t("testimonials-feedback"),
      ratting: 4,
      commentImage: "/assets/images/testimonials/comment.png",
    },
    {
      id: "3",
      image: "/assets/images/testimonials/3.png",
      name: t("ali-el-shrief"),
      role: t("customer"),
      feedback: t("testimonials-feedback"),
      ratting: 5,
      commentImage: "/assets/images/testimonials/comment.png",
    },
    {
      id: "4",
      image: "/assets/images/testimonials/4.png",
      name: t("said-nagy"),
      role: t("customer"),
      feedback: t("testimonials-feedback"),
      ratting: 3,
      commentImage: "/assets/images/testimonials/comment.png",
    },
    {
      id: "5",
      image: "/assets/images/testimonials/2.png",
      name: t("ali-hassan"),
      role: t("customer"),
      feedback: t("testimonials-feedback"),
      ratting: 4,
      commentImage: "/assets/images/testimonials/comment.png",
    },
    {
      id: "6",
      image: "/assets/images/testimonials/4.png",
      name: t("mostafa-hassan"),
      role: t("customer"),
      feedback: t("testimonials-feedback"),
      ratting: 4,
      commentImage: "/assets/images/testimonials/comment.png",
    },
    {
      id: "7",
      image: "/assets/images/testimonials/1.png",
      name: t("alex-foster"),
      role: t("customer"),
      feedback: t("testimonials-feedback"),
      ratting: 5,
      commentImage: "/assets/images/testimonials/comment.png",
    },
    {
      id: "8",
      image: "/assets/images/testimonials/2.png",
      name: t("jhon-dea"),
      role: t("customer"),
      feedback: t("testimonials-feedback"),
      ratting: 3,
      commentImage: "/assets/images/testimonials/comment.png",
    },
  ];

  // fuctions
  // function to handle next slide
  const handleNextSlide = (index: string) => {
    api?.scrollTo(current + 4);
    setActiveButton(index);
  };

  // function to handle prev slide
  const handlePrvSlide = (index: string) => {
    api?.scrollTo(current - 4);
    setActiveButton(index);
  };

  // Effects
  // useEffect to get the selected scroll snap
  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="bg-birthday-image bg-cover bg-center my-20 pt-20 pb-32 hidden md:block">
      <div className="container">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full "
        >
          <CarouselContent>
            {testimonialsFeeds.map((feedback) => (
              <CarouselItem key={feedback.id} className=" md:basis-1/2 lg:basis-1/4">
                {/* Carousel card component */}
                <TestimonailsCard feedback={feedback} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <div className="flex items-center justify-center gap-x-2 mt-10">
            <GoDotFill
              onClick={() => handlePrvSlide("prev")}
              className={` cursor-pointer  h-[16px]  bg-white ${
                activeButton === "prev" ? " w-[32px] rounded-xl  " : "w-[16px] rounded-full"
              } text-white`}
            />
            <GoDotFill
              onClick={() => handleNextSlide("next")}
              className={` cursor-pointer  h-[16px]  bg-white ${
                activeButton === "next" ? " w-[32px] rounded-xl  " : "w-[16px] rounded-full"
              } text-white`}
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
