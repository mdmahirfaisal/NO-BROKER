import { Paper, Rating } from '@mui/material';
import React from 'react';

const TestimonialInfo = ({ info }) => {

    return (
        <div className="">
            <div className='drop-shadow-lg px-4 py-3'>
                <div className="flex items-center ">
                    <img className="w-10 h-10 rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp" alt="user avatar" />
                    <div className='ml-3'>
                        <h6 className="text-sm font-semibold ">{info.name} </h6>
                        <h4 className='mb-0 text-sm text-green-600'><Rating sx={{ fontSize: '17px', color: '#008387' }} name="half-rating-read" defaultValue={info.rating} precision={0.5} readOnly /></h4>
                    </div>
                </div>

                <div className="mt-3 md:mt-5">
                    <h2 className='text-[15px] font-bold'>{info.headLine}</h2>
                    <p className="text-gray-600 text-[14px]"> <span className="font-serif"></span> {info.description} <span className="font-serif"></span></p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialInfo;