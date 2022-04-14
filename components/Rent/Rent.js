import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import { MenuItem, Select } from '@mui/material';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';

const Rent = () => {
    const [apartmentType, setApartmentType] = useState([])
    const [propertyStatus, setPropertyStatus] = useState([])


    return (
        <>
            <div className="border w-full md:max-w-[850px] mx-auto">
                <div className='p-2 flex md:flex-row flex-col gap-2'>
                    <p className="py-0 text-[13px] text-gray-500" >
                        <Radio id='builder' /><label className=' cursor-pointer' htmlFor='builder'>Full House</label>
                    </p>

                    <p className="py-0 text-[13px] text-gray-500 " >
                        <Radio id='builder' /><label className=' cursor-pointer' htmlFor='builder'>PG/Hostel</label>
                    </p>

                    <p className="py-0 text-[13px] text-gray-500 mr-2" >
                        <Radio id='builder' /><label className=' cursor-pointer' htmlFor='builder'>Flatmates</label>
                    </p>
                    <div className='w-full md:w-[140px]'>
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

                    <div className='w-full md:w-[140px]'>
                        <Select fullWidth
                            label="Property Status"
                            variant='standard'
                            defaultValue="Property Status"
                            value={propertyStatus}
                            sx={{ fontSize: '12px', border: '1px solid #efefef', padding: '0 3px', mr: 1 }}
                            onChange={(e) => setPropertyStatus(e.target.value)} multiple>
                            <MenuItem disabled selected value="Property Status"></MenuItem>
                            <MenuItem value="1 Rhk">1 Rhk</MenuItem>
                            <MenuItem value="2 Bhk">2 Bhk</MenuItem>
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

            <div className="bg-[#384d6c]">
                <div className=' flex justify-center items-center gap-2 py-3 text-gray-200 mt-6 w-[96%] mx-auto'>
                    <DvrOutlinedIcon fontSize='large' /> <p className='text-[13px]'>Earn rewards upto ₹30,000 when you pay rent with credit card</p> <p className='bg-white rounded-lg px-3 py-1 text-black text-[13px]'>Pay Rent Now</p>
                </div>
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

export default Rent;