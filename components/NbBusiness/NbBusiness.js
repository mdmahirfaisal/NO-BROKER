import React from 'react';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { image } from '../../public/BuildImg'
import Image from 'next/image';


const NbBusiness = () => {

    return (
        <>
            <div className='bg-[#f4f4f4] pb-8'>
                <div className='flex pt-10 mt-10 '>
                    <p className='grow border-b-2 relative'><CircleOutlinedIcon sx={{ position: 'absolute', top: 8, right: 0, color: 'red', fontSize: '25px' }} /></p>
                    <h2 className='text-xl lg:text-3xl text-gray-500 text-center flex-none mb-[-15px] flex-wrap px-3'>NoBroker Business Assist Plan For Builders</h2>

                    <p className='grow border-b-2 relative'><CircleOutlinedIcon sx={{ position: 'absolute', top: 8, left: 0, color: 'red', fontSize: '25px' }} /></p>
                </div>

                <div className='flex items-center justify-center flex-wrap gap-12'>
                    <div className='mt-10'>
                        <Image width={300} height={220} src={image} alt="Build image" />
                    </div>
                    <div>
                        <h5 className='text-gray-500'>Get in touch with us to Sell or Rent Your Projects</h5>
                        <button className='px-5 py-3 text-white text-sm bg-[#fd3752] mt-5'> Enquire Now</button>
                        <p className='border-t border-gray-300 text-gray-500 text-sm mt-[2px]'>For Builder Enquiries: +91 91080 50400</p>
                    </div>
                </div>
            </div>

            {/* We make a difference  */}

            <div className='flex mt-10 '>
                <p className='grow border-b-2 relative'><CircleOutlinedIcon sx={{ position: 'absolute', top: 8, right: 0, color: 'red', fontSize: '25px', backgroundColor: 'white' }} /></p>
                <h2 className='text-xl lg:text-3xl text-gray-500 text-center flex-none mb-[-15px] px-1'>We Make A Difference</h2>

                <p className='grow border-b-2 relative'><CircleOutlinedIcon sx={{ position: 'absolute', top: 8, left: 0, color: 'red', fontSize: '25px', backgroundColor: 'white' }} /></p>
            </div>



            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 pb-7'>
                <div>
                    <div className='text-[#fd3752] border-[#fd3752] mx-auto border-2 w-[180px] h-[180px] rounded-full text-4xl flex items-center justify-center text-center mt-10'><h5 className='font-medium'>₹130 cr+</h5></div>
                    <h2 className='text-2xl mt-3 text-center'>Brokerage saved monthly</h2>
                </div>

                <div>
                    <div className='text-[#fd3752] border-[#fd3752] mx-auto border-2 w-[180px] h-[180px] rounded-full text-4xl flex items-center justify-center text-center mt-10'><h5 className='font-medium'>30 Lakh+</h5></div>
                    <h2 className='text-2xl mt-3 text-center'>Customers Connected Monthly</h2>
                </div>

                <div>
                    <div className='text-[#fd3752] border-[#fd3752] mx-auto border-2 w-[180px] h-[180px] rounded-full text-4xl flex items-center justify-center text-center mt-10'><h5 className='font-medium'>2 Lakh+</h5></div>
                    <h2 className='text-2xl mt-3 text-center'>New Listings Monthly</h2>
                </div>
            </div>

        </>
    );
};

export default NbBusiness;