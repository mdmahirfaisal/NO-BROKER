import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import CleanHandsOutlinedIcon from '@mui/icons-material/CleanHandsOutlined'; import Checkbox from '@mui/material/Checkbox';

const Buy = () => {
    const [apartmentType, setApartmentType] = useState([])
    const [propertyStatus, setPropertyStatus] = useState([])
    return (
        <>
            <div className="border w-full md:max-w-[850px] mx-auto">
                <div className=' mr-2 md:mr-0 py-2 flex'>
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

                    <div className='w-full md:w-[130px]  mr-2 md:mr-0'>
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

                    <p className="py-0 text-[13px] text-gray-500 w-full ml-2 md:mr-0 md:w-[170px] border border-[#efefef]" >
                        <Checkbox id='builder' /><label className=' cursor-pointer' htmlFor='builder'>New Builder Projects</label>
                    </p>
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
                    <CleanHandsOutlinedIcon fontSize='large' /> <p className='text-[13px]'>Do you know how much loan you can get? Get maximum with NoBroker</p> <p className='bg-white rounded-lg px-3 py-1 text-black text-[13px]'>Check Eligibility</p>
                </div>
            </div>

            <div className='grid grid-cols-3 lg:grid-cols-6 lg:gap-5'>
                <div className='border lg:border-0 p-5'>
                    <h2 className='text-center text-gray-400'><CleanHandsOutlinedIcon className='iconStyle' /></h2>
                    <h2 className='text-center mt-3 text-[13px]'>Home Loan</h2>
                </div>
                <div className='border lg:border-0 p-5'>
                    <h2 className='text-center text-gray-400'><CleanHandsOutlinedIcon className='iconStyle' /></h2>
                    <h2 className='text-center mt-3 text-[13px]'>Property Legal Services</h2>
                </div>
                <div className='border lg:border-0 p-5'>
                    <p className='text-center text-[10px] '> <span className='bg-[#ffefd9] rounded-full px-2'>New</span></p>
                    <h2 className='text-center 
                    text-gray-400'><CleanHandsOutlinedIcon className='iconStyle' /></h2>
                    <h2 className='text-center mt-3 text-[13px]'>Sale Agreement</h2>
                </div>
                <div className='border lg:border-0 p-5'>
                    <p className='text-center text-[10px] '> <span className='bg-[#ffefd9] rounded-full px-2'>Buy</span></p>
                    <h2 className='text-center text-gray-400'><CleanHandsOutlinedIcon className='iconStyle' /></h2>
                    <h2 className='text-center mt-3 text-[13px]'>New Builder Projects</h2>
                </div>
                <div className='border lg:border-0 p-5'>
                    <p className='text-center text-[10px] '> <span className='bg-[#ffefd9] rounded-full px-2'>New</span></p>
                    <h2 className='text-center text-gray-400'><CleanHandsOutlinedIcon className='iconStyle' /></h2>
                    <h2 className='text-center mt-3 text-[13px]'>interiors</h2>
                </div>
                <div className='border lg:border-0 p-5'>
                    <h2 className='text-center text-gray-400'><CleanHandsOutlinedIcon className='iconStyle' /></h2>
                    <h2 className='text-center mt-3 text-[13px]'>NoBroker for NRIs</h2>
                </div>

            </div>
        </>
    );
};

export default Buy;