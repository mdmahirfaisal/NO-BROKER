import React from 'react';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const WhyUseNB = () => {
    return (
        <>
            <div className='flex mt-14 '>

                <p className='grow border-b-2 relative'><CircleOutlinedIcon sx={{ position: 'absolute', top: 8, right: 0, backgroundColor: 'white', color: 'red', fontSize: '25px' }} /></p>
                <h2 className='text-xl lg:text-3xl text-gray-500 text-center flex-none mb-[-7px] md:mb-[-15px] px-5'>Why Use NoBroker</h2>

                <p className='grow border-b-2 relative'><CircleOutlinedIcon sx={{ position: 'absolute', top: 8, left: 0, backgroundColor: 'white', color: 'red', fontSize: '25px' }} /></p>
            </div>


            <div className='grid grid-cols-2 md:grid-cols-4 mt-10 gap-5 md:gap-0'>
                <div className=''>
                    <p className='text-center text-gray-400'><PersonSearchOutlinedIcon sx={{ fontSize: '60px' }} /> </p>
                    <h5 className='text-xl text-center'>Avoid Brokers</h5>
                    <p className='text-[13px] text-center w-[60%] mx-auto'>We directly connect you to verified owners to save brokerage</p>
                </div>

                <div className=''>
                    <p className='text-center text-gray-400'><ListAltOutlinedIcon sx={{ fontSize: '60px' }} /> </p>
                    <h5 className='text-xl text-center'>Avoid Brokers</h5>
                    <p className='text-[13px] text-center w-[60%] mx-auto'>We directly connect you to verified owners to save brokerage</p>
                </div>

                <div className=''>
                    <p className='text-center text-gray-400'><HomeWorkOutlinedIcon sx={{ fontSize: '60px' }} /> </p>
                    <h5 className='text-xl text-center'>Avoid Brokers</h5>
                    <p className='text-[13px] text-center w-[60%] mx-auto'>We directly connect you to verified owners to save brokerage</p>
                </div>

                <div className=''>
                    <p className='text-center text-gray-400'><ListAltOutlinedIcon sx={{ fontSize: '60px' }} /> </p>
                    <h5 className='text-xl text-center'>Avoid Brokers</h5>
                    <p className='text-[13px] text-center w-[60%] mx-auto'>We directly connect you to verified owners to save brokerage</p>
                </div>
            </div>
        </>
    );
};

export default WhyUseNB;