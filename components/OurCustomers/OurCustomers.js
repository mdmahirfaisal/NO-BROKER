import React from 'react';
import TestimonialInfo from '../TestimonialInfo/TestimonialInfo';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const testimonialData = [
    {
        name: "Shubham Raibhandar",
        rating: 2,
        headLine: 'Helps us to find good properties',
        id: 1,
        description: `Informational text is a subset of the larger category of nonfiction (Duke & Bennett-Armistead, 2003). Its primary purpose is to inform the reader about the natural or social world. Different from fiction, `
    },
    {
        name: "Shubham Raibhandar",
        rating: 3,
        headLine: 'Helps us to find good properties',
        id: 2,
        description: `Informational text is a subset of the larger category of nonfiction (Duke & Bennett-Armistead, 2003). Its primary purpose is to inform the reader about the natural or social world. Different from fiction, `
    },
    {
        name: "Shubham Raibhandar",
        rating: 4.5,
        headLine: 'Helps us to find good properties',
        id: 3,
        description: `Informational text is a subset of the larger category of nonfiction (Duke & Bennett-Armistead, 2003). Its primary purpose is to inform the reader about the natural or social world. Different from fiction, `
    },
    {
        name: "Shubham Raibhandar",
        rating: 4,
        headLine: 'Helps us to find good properties',
        id: 4,
        description: `Informational text is a subset of the larger category of nonfiction (Duke & Bennett-Armistead, 2003). Its primary purpose is to inform the reader about the natural or social world. Different from fiction, `
    },
    {
        name: "Shubham Raibhandar",
        rating: 5,
        headLine: 'Helps us to find good properties',
        id: 5,
        description: `Informational text is a subset of the larger category of nonfiction (Duke & Bennett-Armistead, 2003). Its primary purpose is to inform the reader about the natural or social world. Different from fiction, `
    },
    {
        name: "Shubham Raibhandar",
        rating: 3.5,
        headLine: 'Helps us to find good properties',
        id: 6,
        description: `Informational text is a subset of the larger category of nonfiction (Duke & Bennett-Armistead, 2003). Its primary purpose is to inform the reader about the natural or social world. Different from fiction, `
    },
    {
        name: "Shubham Raibhandar",
        rating: 5.5,
        headLine: 'Helps us to find good properties',
        id: 7,
        description: `Informational text is a subset of the larger category of nonfiction (Duke & Bennett-Armistead, 2003). Its primary purpose is to inform the reader about the natural or social world. Different from fiction, `
    },
    {
        name: "Shubham Raibhandar",
        rating: 4.5,
        headLine: 'Helps us to find good properties',
        id: 8,
        description: `Informational text is a subset of the larger category of nonfiction (Duke & Bennett-Armistead, 2003). Its primary purpose is to inform the reader about the natural or social world. Different from fiction, `
    },
    {
        name: "Shubham Raibhandar",
        rating: 2.5,
        headLine: 'Helps us to find good properties',
        id: 9,
        description: `Informational text is a subset of the larger category of nonfiction (Duke & Bennett-Armistead, 2003). Its primary purpose is to inform the reader about the natural or social world. Different from fiction, `
    },
]



const OurCustomers = () => {

    return (
        <div className='bg-[#334a5c]'>
            <h2 className='text-3xl text-center text-gray-200 py-7 '>Our Customers Loves us</h2>
            {/* video  */}
            <div>
                <iframe className='mx-auto px-2 min-h-[250px] w-[98%] mb-10 md:w-[560px] md:h-[320px]' src="https://www.youtube.com/embed/0ChlgxhXVws" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            {/* testimonials  */}
            <Swiper
                loop={true}
                grabCursor={true}
                slidesPerView={1}
                spaceBetween={10}
                slidesPerGroup={1}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        slidesPerGroup: 1,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        slidesPerGroup: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        slidesPerGroup: 3,
                    },
                }}
                navigation={{
                    clickable: true,
                }}

                modules={[Autoplay, Navigation]}
                className="mySwiper swiper-container"
            >
                {testimonialData.map((info) => <SwiperSlide
                    key={info.id} className='swiper-slide'>
                    <TestimonialInfo info={info}></TestimonialInfo>
                </SwiperSlide>)}
            </Swiper>
            <p className='text-gray-100 text-center py-7 underline text-sm'><a href="">More Testimonials</a></p>

        </div>
    );
};

export default OurCustomers;