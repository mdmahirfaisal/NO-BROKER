import { Paper, Rating } from '@mui/material';
import React from 'react';

const TestimonialInfo = ({ info }) => {

    return (
        <Paper>
            <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                <div className="flex">
                    <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
                    <div>
                        <h6 className="text-lg font-semibold leading-none">{info.name} </h6>
                        <h4 className='mb-0'><Rating name="half-rating-read" defaultValue={info.rating} precision={0.5} readOnly /></h4>
                    </div>
                </div>

                <div className=" mt-2text-center text-left">
                    <h2>{info.headline}</h2>
                    <p className="text-gray-600"> <span className="font-serif"></span> {info.description} <span className="font-serif"></span></p>
                </div>
            </div>
        </Paper>
    );
};

export default TestimonialInfo;