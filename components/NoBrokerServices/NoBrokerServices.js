import React from 'react';

const NoBrokerServices = () => {
    return (
        <div className='border-t border-gray-300  mt-7'>
            <div className=' w-[98%] md:w-[96%] mx-auto'>
                <h2 className='font-medium text-2xl my-6'>NoBroker Services</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-10 lg:gap-16'>
                    <div>
                        <h2 className='text-lg mb-3'>Buy</h2>
                        <div className="flex items-center flex-wrap gap-4 ">
                            <p className='bg-[#e8e8e8] px-2 py-0 rounded-md '>Home Loan</p>
                            <p className='bg-[#e8e8e8] px-2 py-0 rounded-md '>Property Legal Services</p>
                            <p className='bg-[#e8e8e8] px-2 py-0 rounded-md '>Interiors</p>
                            <p className='bg-[#e8e8e8] px-2 py-0 rounded-md '>Sale Agreement</p>
                            <p className='bg-[#e8e8e8] px-2 py-0 rounded-md '>NoBroker For NRIs</p>
                            <p className='bg-[#e8e8e8] px-2 py-0 rounded-md '>New Builder Project</p>
                            <p className='bg-[#e8e8e8] px-2 py-0 rounded-md '>Emi Calculator</p>
                            <p className='bg-[#e8e8e8] px-2 py-0 rounded-md '>Home Loan Balance Transfer </p>
                            <p className='bg-[#e8e8e8] px-2 py-0 rounded-md '>Home Loan Eligibilety Check</p>
                            <p className='bg-[#e8e8e8] px-2 py-0 rounded-md '>Apply Home Loan </p>
                            <p className='bg-[#e8e8e8] px-2 py-0 rounded-md '>Pre Approved Home Loan  </p>
                            <p className='bg-[#e8e8e8] px-2 py-0 rounded-md '>Apply Home Loan </p>
                            <p className='bg-[#e8e8e8] px-2 py-0 rounded-md '>Buy / Sell Property Questions</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-lg mb-3'>Rent</h2>
                        <div className="flex items-center flex-wrap gap-4 ">
                            <p className='bg-[#e8e8e8] px-2 py-0 rounded-md '>Rental Agreement</p>
                            <p className='bg-[#e8e8e8] px-2 py-0 rounded-md '>Pay Rent</p>
                            <p className='bg-[#e8e8e8] px-2 py-0 rounded-md '>Refer and Earn</p>
                            <p className='bg-[#e8e8e8] px-2 py-0 rounded-md '>Home Services</p>
                            <p className='bg-[#e8e8e8] px-2 py-0 rounded-md '>Packers and Movers</p>
                            <p className='bg-[#e8e8e8] px-2 py-0 rounded-md '>Property Management in India</p>
                            <p className='bg-[#e8e8e8] px-2 py-0 rounded-md '>Home Services Questions</p>
                            <p className='bg-[#e8e8e8] px-2 py-0 rounded-md '>Rent Services Questions </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ________________________________________ */}

            <div className='border-y py-8 border-gray-300 bg-[#ededed] mt-7 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0'>
                <div className='md:border-r-2 border-gray-400'>
                    <h2 className='text-lg text-[#464646] text-center font-bold'>Find Property </h2>
                    <p className='text-sm text-center'>Select from thousands of options, without brokerage.</p>
                    <button className='text-white bg-[#464646] mt-3 px-7 rounded-md py-2 mx-auto flex'>Find Now</button>
                </div>
                <div>
                    <h2 className='text-lg text-[#464646] text-center font-bold border-t-2 pt-3 md:pt-0 mx-10 md:mx-0 border-gray-400 md:border-none'>List Your Property </h2>
                    <p className='text-sm text-center'>For Free. Without any brokerage.</p>
                    <button className='text-white bg-[#464646] mt-3 px-7 rounded-md py-2 mx-auto flex'>Free Posting</button>
                </div>

                <div>

                </div>
            </div>
        </div>
    );
};

export default NoBrokerServices;