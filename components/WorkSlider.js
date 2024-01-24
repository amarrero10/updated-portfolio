import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Spring Health and Wellness",
          path: "/thumb1.png",
          link: "https://springhealthwellness.com/",
        },
        {
          title: "Budget Buddy",
          path: "/thumb2.png",
          link: "https://budgetbuddy-othz.onrender.com/",
        },
        {
          title: "Stucco Pros of Tampa Bay",
          path: "/thumb3.png",
          link: "https://www.stuccoprostampa.com/",
        },
        {
          title: "TerraGold Construction Services",
          path: "/thumb4.png",
          link: "https://terragoldconstruction.com/",
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: "title",
    //       path: "/thumb4.png",
    //       link: "https://springhealthwellness.com/",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb1.png",
    //       link: "https://springhealthwellness.com/",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb2.png",
    //       link: "https://springhealthwellness.com/",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb3.png",
    //       link: "https://springhealthwellness.com/",
    //     },
    //   ],
    // },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px] xxl:h-[600px]"
    >
      {workSlides.slides.map((slide, idx) => {
        return (
          <SwiperSlide key={idx}>
            <div className=" grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, idx) => {
                return (
                  <div
                    key={idx}
                    className=" relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <a href={`${image.link}`} target="_blank" rel="noopener noreferrer">
                      <div className=" flex items-center justify-center relative overflow-hidden">
                        <Image src={image.path} width={500} height={300} alt="" />
                        <div className="invisible sm:visible absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        {/* title */}
                        <div className="invisible sm:visible absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className=" text-center text-xl">{image.title}</div>
                          <div className=" flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            <div>Live</div>
                            <div>project</div>
                            <div className=" text-xl">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;

//
//

//
