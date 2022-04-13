import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import { MenuItem, Select } from '@mui/material';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';


const Commercial = () => {
    const [apartmentType, setApartmentType] = useState([])
    return (
        <>
            <div className="border w-full md:w-[850px] mx-auto">
                <div className='p-2 flex md:flex-row flex-col'>
                    <p className="py-0 text-[13px] text-gray-500" >
                        <Radio id='rent' defaultChecked /><label className=' cursor-pointer' htmlFor='rent'>Rent</label>
                    </p>

                    <p className="py-0 text-[13px] text-gray-500 mr-2" >
                        <Radio id='buy' /><label className=' cursor-pointer' htmlFor='buy'>Buy</label>
                    </p>
                    <div className="w-full md:w-[140px]">
                        <Select fullWidth
                            label="Apartment Type"
                            variant='standard'
                            value={apartmentType}
                            sx={{
                                fontSize: '12px',
                                border: '1px solid #efefef', padding: '0 3px', mr: 1
                            }}
                            onChange={(e) => setApartmentType(e.target.value)} multiple>
                            <MenuItem value="1 Rhk">1 Rhk</MenuItem>
                            <MenuItem value="2 Bhk">2 Bhk</MenuItem>
                            <MenuItem value="3 Bhk">3 Bhk</MenuItem>
                            <MenuItem value="4 Bhk">4 Bhk</MenuItem>
                            <MenuItem value="5 Bhk">5 Bhk</MenuItem>
                        </Select>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-12">
                <p className='w-24 border-b  border-gray-400' />
                <p className='mx-4 mb-[-10px] text-gray-500 text-md font-medium'>Are you a Property Owner?</p>
                <p className='w-24 border-b border-gray-400' />
            </div>

            <h6 className='flex mx-auto justify-center text-white w-56 text-md px-5 mt-5 py-3 bg-[#009587] text-md font-medium hover:bg-green-700'><span>Post Free property ad</span></h6>

            <div className='bg-[#384d6c] flex justify-center items-center gap-2 py-3 text-gray-200 mt-6'>
                <DvrOutlinedIcon fontSize='large' /> <p className='text-[13px]'>Do you know how much loan you can get? Get maximum with NoBroker</p> <p className='bg-white rounded-lg px-3 py-1 text-black text-[13px]'>Check Eligibility</p>
            </div>

            <div className='grid grid-cols-3 lg:grid-cols-6 lg:gap-5'>
                <div className='border lg:border-0 p-5'>
                    <h2 className='text-center text-gray-400'><PublishedWithChangesOutlinedIcon className='iconStyle' /></h2>
                    <h2 className='text-center mt-3 text-[13px]'>Rental Agreement</h2>
                </div>

                <div className='border lg:border-0 p-5'>
                    <p className='text-center text-[10px] '> <span className='bg-[#ffefd9] rounded-full px-2'>New Offers</span></p>
                    <h2 className='text-center text-gray-400'><PublishedWithChangesOutlinedIcon className='iconStyle' /></h2>
                    <h2 className='text-center mt-3 text-[13px]'>Pay Rent</h2>
                </div>

                <div className='border lg:border-0 p-5'>
                    <p className='text-center text-[10px] '> <span className='bg-[#ffefd9] rounded-full px-2'>New</span></p>
                    <h2 className='text-center text-gray-400'><PublishedWithChangesOutlinedIcon className='iconStyle' /></h2>
                    <h2 className='text-center mt-3 text-[13px]'>AC Service & Repair</h2>
                </div>

                <div className='border lg:border-0 p-5'>
                    <p className='text-center text-[10px] '> <span className='bg-[#ffefd9] rounded-full px-2'>Sale is live!</span></p>
                    <h2 className='text-center text-gray-400'><PublishedWithChangesOutlinedIcon className='iconStyle' /></h2>
                    <h2 className='text-center mt-3 text-[13px]'>Painting & Cleaning</h2>
                </div>

                <div className='border lg:border-0 p-5'>
                    <p className='text-center text-[10px] '> <span className='bg-[#ffefd9] rounded-full px-2'>Lowest Price</span></p>
                    <h2 className='text-center text-gray-400'><PublishedWithChangesOutlinedIcon className='iconStyle' /></h2>
                    <h2 className='text-center mt-3 text-[13px]'>Packers & Movers</h2>
                </div>

                <div className='border lg:border-0 p-5'>
                    <h2 className='text-center text-gray-400'><PublishedWithChangesOutlinedIcon className='iconStyle' /></h2>
                    <h2 className='text-center mt-3 text-[13px]'>NoBroker for NRIs</h2>
                </div>

            </div>
        </>
    );
};

export default Commercial;