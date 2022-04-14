import React from 'react';
import NextLink from 'next/link';
import { LinkData } from '../../public/LinkData';


const Commercial = () => {

    const linkContent = LinkData.slice(0, 10).map((data, index) => <p
        key={index}
        className='text-[12px] mt-2'><NextLink href="/" >{data?.name}</NextLink></p>)

    return (

        <div className='grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-5'>
            <div>
                <h1 className='text-[#464646] text-lg font-semibold'><NextLink href="/" >Commercial Properties For Rent in Bangalore</NextLink></h1>
                {linkContent}
            </div>
            <div>
                <h1 className='text-[#464646] text-lg font-semibold'><NextLink href="/" >Commercial Properties For Rent in Chennai</NextLink></h1>
                {linkContent}
            </div>
            <div>
                <h1 className='text-[#464646] text-lg font-semibold'><NextLink href="/" > Commercial Properties For Rent in Pune</NextLink></h1>
                {linkContent}
            </div>
            <div>
                <h1 className='text-[#464646] text-lg font-semibold'><NextLink href="/" >Commercial Properties For Rent in Mumbai</NextLink></h1>
                {linkContent}
            </div>
            <div>
                <h1 className='text-[#464646] text-lg font-semibold'><NextLink href="/" >Rooms for Rent in Gurgaon</NextLink></h1>
                {linkContent}
            </div>
            <div>
                <h1 className='text-[#464646] text-lg font-semibold'><NextLink href="/" >Commercial Properties For Sale in Bangalore</NextLink></h1>
                {linkContent}
            </div>
            <div>
                <h1 className='text-[#464646] text-lg font-semibold'><NextLink href="/" >Commercial Properties For Sale in Chennai</NextLink></h1>
                {linkContent}
            </div>
            <div>
                <h1 className='text-[#464646] text-lg font-semibold'><NextLink href="/" >Commercial Properties For Sale in Pune</NextLink></h1>
                {linkContent}
            </div>
            <div>
                <h1 className='text-[#464646] text-lg font-semibold'><NextLink href="/" >Commercial Properties For Sale in Mumbai</NextLink></h1>
                {linkContent}
            </div>
            <div>
                <h1 className='text-[#464646] text-lg font-semibold'><NextLink href="/" >Commercial Properties For Sale in Gurgaon</NextLink></h1>
                {linkContent}
            </div>

        </div>
    );
};

export default Commercial;