import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PercentIcon from '@mui/icons-material/Percent';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PaymentIcon from '@mui/icons-material/Payment';
import useMediaQuery from '../Shared/useMediaQuery/useMediaQuery';
import { useRouter } from 'next/router';

const NavigationBar = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const router = useRouter();

    // logo
    const logo = (
        <div onClick={() => router.push('/')} className='text-black cursor-pointer'>
            <h2 className='text-2xl'> <span className='bg-[#fd3752] rounded-full p-1'><PercentIcon sx={{ color: 'white', fontSize: '30px', marginBottom: 1 }} /></span>  <span className='font-medium'>NO</span>BROKER</h2>
        </div>
    )

    // menu icon
    const menuIcon = (
        <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ color: 'black' }} >
            <MenuIcon fontSize='large' />
        </IconButton>
    )

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
                <div className={!isMobile ? "flex items-center justify-between mx-auto" : "mx-auto"} style={{ width: '98%' }}>
                    {isMobile && <Toolbar>
                        {menuIcon}
                        {logo}
                    </Toolbar>}

                    {!isMobile && <>
                        <div className='w-full flex items-center justify-between py-2'>
                            <div>
                                {logo}
                            </div>

                            <div className='flex justify-evenly items-center'>

                                {/* Right content */}
                                <p className='border border-gray-200 text-[13px] px-2 py-1 text-gray-700 mr-2'><LibraryBooksIcon sx={{ fontSize: '17px' }} /> My Bookings</p>

                                <p className='border border-gray-200 text-[13px] px-2 py-1 text-gray-500 mr-2'><PaymentIcon sx={{ fontSize: '17px' }} /> | Pay Rent</p>

                                <p className='border border-gray-200 text-[13px] px-2 py-1 bg-green-500 hover:bg-green-600 text-gray-700 mr-2'><LibraryBooksIcon sx={{ fontSize: '17px' }} /> Post Your Property</p>

                                <p className='border-r-2 border-gray-200 text-[13px] px-2 py-1 text-gray-700 mr-2'> Sign Up</p>

                                <p className='border-r-2 border-gray-200 text-[13px] px-2 py-1 text-gray-700 mr-2'>Log In</p>


                                <div className='flex items-center'>
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        aria-label="menu"
                                        sx={{ color: 'black' }}>
                                        <MenuIcon fontSize='small' />
                                    </IconButton>
                                    <p className='text-[13px] text-gray-500'>Menu</p>
                                </div>
                            </div>
                        </div>
                    </>
                    }
                </div>
            </AppBar>
        </Box>
    );
};

export default NavigationBar;