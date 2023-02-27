'use client'

import React from 'react';
import ImagesCaurosel from './imagesCaurosel';
import { MainHeading } from '@/components'

function Images() {
    return (
        <div className='w-full'>
            <div className='w-[1300px] xl:w-[90%] lg:w-[95%] m-auto py-16'>
                <MainHeading name='IMAGES' />
                <ImagesCaurosel />
            </div>
        </div>
    );
}

export default Images;