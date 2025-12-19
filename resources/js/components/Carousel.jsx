import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import "swiper/css";
// import "swiper/css/navigation"; // not using navigation module
// import "swiper/css/autoplay"; // not necessary

const slides = [
    {
        id: 1,
        title: "Security Vest",
        subtitle: "Reliable protective vest for leading security companies",
        image: "/images/person_vest.png",
    },
    {
        id: 2,
        title: "Blue Security Shirt",
        subtitle: "Comfortable professional-grade shirt designed for modern security personnel",
        image: "/images/person_blue.png",
    },
    {
        id: 3,
        title: "White Dress Shirt",
        subtitle: "Premium uniform shirt for security and corporate teams",
        image: "/images/person_white.png", // replace with your own image
    },
    
    
];


// If you prefer local images (recommended for production):
// import img1 from "../assets/img1.jpg";
// import img2 from "../assets/img2.jpg";
// import img3 from "../assets/img3.jpg";
// then set image: img1 etc in slides array.

export default function Carousel() {
    const swiperRef = useRef(null);

    return (
        <section
            id="home"
            className="w-screen h-screen flex flex-col items-center justify-center bg-transparent"
        >
            {/* Carousel + Buttons Container */}
            <div className="w-[90vw] flex items-center justify-center gap-4 relative">
                {/* Left Button */}
                <button
                    className="hidden xl:block text-white hover:scale-105 transition-transform duration-300 ease-in-out"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <ChevronLeftIcon className="h-10 w-10" />
                </button>

                {/* Carousel */}
                <div className="w-[80vw] h-[90vh] relative mb-18 rounded-2xl overflow-hidden shadow-2xl">
                    <Swiper
                        loop
                        spaceBetween={20}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        // modules={[Autoplay]} // optional
                        // autoplay={{ delay: 7500, disableOnInteraction: false }} // optional
                        className="h-full w-full"
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                {/* Slide: left = text (50%), right = image (50%) */}
                                <div className="w-full h-full flex flex-col md:flex-row bg-white/5 backdrop-blur-sm border-r md:border-r border-white/10">
                                    {/* Left: Text area */}
                                    <div className="md:w-1/2 w-full h-1/2 md:h-full flex flex-col justify-center items-start text-left p-10 md:p-16 ">
                                        
                                            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                                                {slide.title}
                                            </h1>
                                            <p className="mt-4 text-lg md:text-2xl text-gray-200 drop-shadow-md">
                                                {slide.subtitle}
                                            </p>

                                            {/* optional extra description / CTA */}
                                            <p className="mt-6 text-sm md:text-base text-gray-300 max-w-lg">
                                                GE&B <medium>(Crafted With Purpose)</medium> 
                                            </p>
                                    </div>

                                    {/* Right: Image area */}
                                    <div className="md:w-1/2 w-full h-1/2 md:h-full ps-15">
                                        {/* Use <img> with object-cover to fill the half */}
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className=" w-full h-full object-cover"
                                        />
                                        {/* Alternatively use background-image:
                                          <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: `url(${slide.image})` }} />
                                        */}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Right Button */}
                <button
                    className="hidden xl:block text-white hover:scale-105 transition-transform duration-300 ease-in-out"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <ChevronRightIcon className="h-10 w-10" />
                </button>
            </div>
        </section>
    );
}
