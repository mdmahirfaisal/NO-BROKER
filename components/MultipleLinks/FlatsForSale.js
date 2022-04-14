import React from 'react';
import NextLink from 'next/link';
import { LinkData } from '../../public/LinkData';


const FlatsForSale = () => {

    const linkContent = LinkData.map((data, index) => <p
        key={index}
        className='text-[12px] mt-2'><NextLink href="/" >{data?.name}</NextLink></p>)

    return (

        <div className='grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-5'>
            <div>
                <h1 className='text-[#464646] text-lg font-semibold'><NextLink href="/" > Flats for Sale in Bangalore</NextLink></h1>
                {linkContent}
            </div>
            <div>
                <h1 className='text-[#464646] text-lg font-semibold'><NextLink href="/" >Flats for Sale in Mumbai</NextLink></h1>
                {linkContent}
            </div>
            <div>
                <h1 className='text-[#464646] text-lg font-semibold'><NextLink href="/" > Flats for Sale in Chennai</NextLink></h1>
                {linkContent}
            </div>
            <div>
                <h1 className='text-[#464646] text-lg font-semibold'><NextLink href="/" > Flats for Sale in Pune</NextLink></h1>
                {linkContent}
            </div>
            <div>
                <h1 className='text-[#464646] text-lg font-semibold'><NextLink href="/" > Flats in Gurgaon for Sale</NextLink></h1>
                {linkContent}
            </div>

        </div>
    );
};

export default FlatsForSale;