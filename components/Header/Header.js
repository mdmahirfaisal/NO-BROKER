import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    const [value, setValue] = useState('buy');
    const [state, setState] = useState('Mumbai');


    // states control
    const handleSelectChange = (event) => {
        setState(event.target.value);
        router.push(`/${event.target.value}/${value}`)
    };


    //  MUI tab control
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
        router.push(`/${state}/${newValue}`)
    };


    return (
        <div className='bg-[#fdfdfd]'>
            <h2 className='text-center text-3xl text-gray-500'>Worlds Largest NoBrokerage Property Site</h2>
            <p className='text-center mt-8'><span className='bg-[#fceed8] px-4 py-3'><span className='underline'>Pay rent</span> with Credit Card!</span></p>

            {/* Tab Link  */}
            <div className='mt-8 flex justify-center '>
                <Tabs
                    value={value}
                    onChange={handleTabChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                >
                    <Tab sx={{ border: '1px solid #efefef' }} value="buy" label="Buy" />
                    <Tab sx={{ border: '1px solid #efefef' }} value="rent" label="Rent" />
                    <Tab sx={{ border: '1px solid #efefef' }} value="commercial" label="Commercial" />
                </Tabs>
            </div>

            {/* State change options */}

            <div className="border w-full md:w-[850px] mx-auto">
                <div className='flex flex-col md:flex-row' >
                    <div className='md:w-[130px] mb-3 md:mb-0'>
                        <Select fullWidth
                            value={state}
                            sx={{ border: '1px solid #efefef', paddingY: 0, outline: 'none' }}
                            onChange={handleSelectChange}>
                            <MenuItem value="Mumbai">Mumbai</MenuItem>
                            <MenuItem value="Bangalore">Bangalore</MenuItem>
                            <MenuItem value="Pune">Pune</MenuItem>
                            <MenuItem value="Chennai">Chennai</MenuItem>
                            <MenuItem value="Gurgaon">Gurgaon</MenuItem>
                            <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                            <MenuItem value="Delhi">Delhi</MenuItem>
                            <MenuItem value="Noida">Noida</MenuItem>
                            <MenuItem value="Greater Noida">Greater Noida</MenuItem>
                            <MenuItem value="Ghaziabad">Ghaziabad</MenuItem>
                            <MenuItem value="Faridabad">Faridabad</MenuItem>
                        </Select>
                    </div>
                    <input placeholder='Search upto 3 localities or landmarks' className='grow focus:outline-none border py-4 mb-3 md:mb-0 px-2' />

                    <button className='md:flex-none bg-red-500 hover:bg-red-600 text-lg py-4 text-white mb-3 md:mb-0 w-full md:w-[170px]'><SearchIcon /> Search</button>
                </div>
            </div>

        </div >
    );
};

export default Header;