import React from 'react';
import { appleStoreImg } from '../../public/AppleStoreImg';
import { googlePlayImg } from '../../public/GooglePlayImg';

const FindHome = () => {
    return (
        <div>
            <div className="px-3 md:px-0 grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2 max-w-[960px] mx-auto mt-10">
                <img className=' max-h-[360px] mx-auto' src="https://assets.nobroker.in/nb-new/public/Home/homeAppPromotion.png" alt="NoBImg" />

                <div className='text-center md:text-left'>
                    <h2 className='text-2xl md:text-3xl text-[#fd3752] mt-7'>Find A New Home On The Go</h2>

                    <h3 className='text-[#46464c] text-lg mt-8 md:text-xl'>Download our app</h3>
                    <h4 className='font-extralight text-lg'>Where convenience is at your fingertip</h4>

                    <div className='grid grid-cols-1 md:p-4 md:grid-cols-2 gap-3 md:gap-5 mt-10'>
                        <img className='md:w-full w-[200px] mx-auto' src={googlePlayImg} alt="GooglePlay" />
                        <img className='md:w-full w-[200px] mx-auto' src={appleStoreImg} alt="AppleStore" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FindHome;