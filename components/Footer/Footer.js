import React from 'react';
import { appleStoreImg } from '../../public/AppleStoreImg';
import { googlePlayImg } from '../../public/GooglePlayImg';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <>
            <div className="flex items-center justify-evenly flex-wrap mt-3 sm:w-[90%] md:w-[80%] lg:w-[50%] gap-2 sm:gap-0 mx-auto">
                <p className='py-3 md:py-5 text-lg lg:text-xl text-gray-600'>About Us</p>
                <p className='py-3 md:py-5 text-lg lg:text-xl text-gray-600'>Careers</p>
                <p className='py-3 md:py-5 text-lg lg:text-xl text-gray-600'>Terms & Conditions</p>
                <p className='py-3 md:py-5 text-lg lg:text-xl text-gray-600'>Privacy Policy</p>
                <p className='py-3 md:py-5 text-lg lg:text-xl text-gray-600'>Testimonials</p>
                <p className='py-3 md:py-5 text-lg lg:text-xl text-gray-600'>Sitemap</p>
                <p className='py-3 md:py-5 text-lg lg:text-xl text-gray-600'>FAQs</p>
            </div>

            <p className='border-t-2 border-gray-200 w-[80%] md:w-[50%] mx-auto py-3 mb-3' />
            <div className='grid grid-cols-1 sm:grid-cols-2 max-w-[500px] gap-3 sm:gap-10 mx-auto'>
                <img className='w-[130px] mx-auto md:ml-auto' src={googlePlayImg} alt="GooglePlay" />
                <img className='w-[130px] mx-auto md:mr-auto' src={appleStoreImg} alt="AppleStore" />
            </div>


            <div className='flex items-center justify-evenly max-w-[400px] mx-auto mt-5'>
                <h2 className='bg-[#e8e8e8] w-10 h-10 text-center rounded-[50%]'><FacebookIcon sx={{ color: '#464646', mt: '7px' }} /></h2>

                <h2 className='bg-[#e8e8e8] w-10 h-10 text-center rounded-[50%]'><TwitterIcon sx={{ color: '#464646', mt: '7px' }} /></h2>

                <h2 className='bg-[#e8e8e8] w-10 h-10 text-center rounded-[50%]'><InstagramIcon sx={{ color: '#464646', mt: '7px' }} /></h2>

                <h2 className='bg-[#e8e8e8] w-10 h-10 text-center rounded-[50%]'><LinkedInIcon sx={{ color: '#464646', mt: '7px' }} /></h2>

                <h2 className='bg-[#e8e8e8] w-10 h-10 text-center rounded-[50%]'><YouTubeIcon sx={{ color: '#464646', mt: '7px' }} /></h2>
            </div>

            <p className='text-center text-sm py-5'><span className='text-lg'>©</span> 2013-22 NoBroker Technologies Solution Pvt. Ltd.</p>


        </>
    );
};

export default Footer;