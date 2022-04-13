import { Button } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/router';

export default function NotFound() {
    const router = useRouter();
    return (
        <div>
            <h1 className='text-6xl text-red-600 font-bold text-center'>404 </h1>
            <h1 className='text-5xl text-sky-500 font-bold text-center'>Page Not Found </h1>
            <h1 className='text-center mt-8'><Button onClick={() => router.push('/')} variant='contained' color='secondary'>Back To Home</Button></h1>

        </div>
    )
}
