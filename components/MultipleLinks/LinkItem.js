import React from 'react';

const LinkItem = ({ item, panel, setPanel }) => {
    const { href, title } = item;
    const active = panel ? (panel === item?.href) : false;

    return (
        <div>
            <h5 onClick={() => setPanel(href)} className={active ? 'text-[#464646] font-medium text-[12px] sm:text-sm md:text-lg text-center py-3 border-b-4 border-[#464646] bg-[#ededed] cursor-pointer' : 'text-[#464646] font-medium text-[12px] sm:text-sm md:text-lg py-3 text-center cursor-pointer'}>{title}</h5>
        </div>
    );
};

export default LinkItem;