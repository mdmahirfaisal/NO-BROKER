import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

import TestimonialInfo from '../TestimonialInfo/TestimonialInfo';



const testimonialData = [
    {
        name: "Shubham Raibhandar",
        rating: 5,
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
]



const OurCustomers = () => {
    return (
        <div className='bg-[#334a5c]'>
            <h2 className='text-3xl text-center text-gray-200 py-7 '>Our Customers Loves us</h2>
            {/* video  */}
            <div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-5'>
                {
                    testimonialData.map(info => <TestimonialInfo
                        key={info.id}
                        info={info}
                    ></TestimonialInfo>)
                }
            </div>
        </div>
    );
};

export default OurCustomers;