import React from 'react';
import NextLink from 'next/link';
import { LinkData } from '../../public/LinkData';


const Miscellaneous = () => {

    const linkContent = LinkData.slice(0, 10).map((data, index) => <p
        key={index}
        className='text-[12px] mt-2'><NextLink href="/" >{data?.name}</NextLink></p>)

    return (

        <div className='grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-5'>
            <div className='mt-3'>
                {linkContent}
            </div>
            <div>
                {linkContent}
            </div>
            <div>
                {linkContent}
            </div>
            <div>
                {linkContent}
            </div>
            <div>
                {linkContent}
            </div>

        </div>
    );
};

export default Miscellaneous;