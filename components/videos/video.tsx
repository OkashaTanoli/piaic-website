'use client'

import React from 'react';
import VideoPanel from './videoPanel';
import { MainHeading } from '@/components';



function Video() {

    return (
        <div className='w-full bg-[#171717] overflow-hidden'>
            <div className='w-[1300px] xl:w-[90%] lg:w-[95%] m-auto py-16'>
                <MainHeading name='VIDEOS'  />
                <VideoPanel />
            </div>
        </div>
    );
}

export default Video;