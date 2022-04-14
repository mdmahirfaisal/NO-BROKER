import React, { useState } from 'react';
import Commercial from './Commercial';
import Flatmates from './Flatmates';
import FlatsForRent from './FlatsForRent';
import FlatsForSale from './FlatsForSale';
import LinkItem from './LinkItem';
import Miscellaneous from './Miscellaneous';
import NewProjects from './NewProjects';
import PgHostels from './PgHostels';

const items = [
    {
        href: 'flatForSale',
        title: 'Flats for Sale'
    },
    {
        href: 'flatsForRent',
        title: 'Flats for Rent'
    },
    {
        href: 'pgHostels',
        title: 'PG / Hostels'
    },
    {
        href: 'flatmates',
        title: 'Flatmates'
    },
    {
        href: 'miscellaneous',
        title: 'Miscellaneous'
    },
    {
        href: 'commercial',
        title: 'Commercial'
    },
    {
        href: 'newProjects',
        title: 'New Projects'
    },
];

const MultipleLinks = () => {
    const [panel, setPanel] = useState("flatForSale");
    return (
        <>
            <div className='bg-[#f8f8f8] mt-10 border-t-2 '>
                <div className='flex justify-evenly sm:flex-none flex-wrap md:grid md:grid-cols-7 gap-3 md:gap-0'>
                    {items.map(item => <LinkItem
                        key={item.title}
                        item={item}
                        panel={panel}
                        setPanel={setPanel}
                    ></LinkItem>)}
                </div>
            </div>
            {/* Multiple Links  */}
            <div className='mt-5 w-[96%] md:w-[94%] mx-auto'>
                {
                    panel === "flatForSale" ? <FlatsForSale />
                        : panel === "flatsForRent" ? <FlatsForRent />
                            : panel === "pgHostels" ? <PgHostels />
                                : panel === "flatmates" ? <Flatmates />
                                    : panel === "miscellaneous" ? <Miscellaneous />
                                        : panel === "commercial" ? <Commercial />
                                            : panel === "newProjects" ? <NewProjects />
                                                : <FlatsForSale />
                }
            </div>
        </>
    );
};

export default MultipleLinks;