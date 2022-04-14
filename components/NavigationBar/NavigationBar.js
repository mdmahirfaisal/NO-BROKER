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
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SideBarContent from './SideBarContent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CottageIcon from '@mui/icons-material/Cottage';
import AllInboxIcon from '@mui/icons-material/AllInbox';


const NavigationBar = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const router = useRouter();

    /// Side Bar 
    const [state, setState] = React.useState({ left: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        < div className="max-w-[300px]">
            <div className='flex items-center bg-[#fd3752]'>
                <h5 className='text-white'><AccountCircleIcon sx={{ fontSize: '50px' }} /></h5>
                <h5 className='text-xl text-white ml-3 '>Login</h5>
                <h5 className='text-2xl text-white ml-1'>/</h5>
                <h5 className='text-xl text-white ml-1'> Sign Up</h5>
            </div>
            <List onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)} sx={{}}>
                <ListItem button ><CottageIcon sx={{ mr: 2 }} />  Home</ListItem>
                <ListItem button ><AllInboxIcon sx={{ mr: 2 }} /> Post  Free Property ads</ListItem>
            </List>
            <SideBarContent />
        </div>
    );


    // logo
    const logo = (
        <div onClick={() => router.push('/')} className='text-black cursor-pointer'>
            <h2 className='text-2xl'> <span className='bg-[#fd3752] rounded-full p-1'><PercentIcon sx={{ color: 'white', fontSize: '30px', marginBottom: 1 }} /></span>  <span className='font-medium'>NO</span>BROKER</h2>
        </div>
    )

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
                <div className={!isMobile ? "flex items-center justify-between mx-auto" : "mx-auto"} style={{ width: '98%' }}>
                    {isMobile && <Toolbar>
                        {['left'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <IconButton onClick={toggleDrawer(anchor, true)} size="large" edge="start" aria-label="menu" sx={{ color: 'black' }} >
                                    <MenuIcon fontSize='large' />
                                </IconButton>
                                <SwipeableDrawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                    onOpen={toggleDrawer(anchor, true)}
                                >
                                    {list(anchor)}
                                </SwipeableDrawer>
                            </React.Fragment>
                        ))}
                        {logo}
                    </Toolbar>}

                    {!isMobile && <>
                        <div className='w-full flex items-center justify-between py-2'>

                            {logo}

                            <div className='flex justify-evenly items-center'>

                                {/* Right content */}
                                <p className='border border-gray-200 text-[13px] px-2 py-1 text-gray-700 mr-2'><LibraryBooksIcon sx={{ fontSize: '17px' }} /> My Bookings</p>

                                <p className='border border-gray-200 text-[13px] px-2 py-1 text-gray-500 mr-2'><PaymentIcon sx={{ fontSize: '17px' }} /> | Pay Rent</p>

                                <p className='border border-gray-200 text-[13px] px-2 py-1 bg-green-500 hover:bg-green-600 text-gray-700 mr-2'><LibraryBooksIcon sx={{ fontSize: '17px' }} /> Post Your Property</p>

                                <p className='border-r-2 border-gray-200 text-[13px] px-2 py-1 text-gray-700 mr-2'> Sign Up</p>

                                <p className='border-r-2 border-gray-200 text-[13px] px-2 py-1 text-gray-700 mr-2'>Log In</p>


                                <div className='flex items-center'>
                                    <IconButton
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