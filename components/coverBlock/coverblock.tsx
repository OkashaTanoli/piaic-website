import Image from 'next/image';
import React from 'react';
import Lines from '../../public/assets/lines.svg'
import { Poppins } from '@next/font/google';
import PiaicCover from '../../public/assets/piaiccoverphoto.svg'
import { MainHeading } from '@/components';

const poppins = Poppins({
    weight: ['300', '400', '500'],
    subsets: ['latin']
})

function Coverblock() {
    return (
        <div className={`w-full relative py-10 md:py-5 overflow-hidden ${poppins.className} bg_linear_gradient border-b-8 border-b-[#171717] md:border-b-0`}>
            <div className='absolute bottom-0 w-full h-full bg_radial_gradient -z-10'></div>
            <Image src={Lines} alt='lines' className='absolute -top-10 xl:top-0 opacity-80 w-full xl:h-full md:hidden -z-20' />
            <div className='w-[1300px] xl:w-[90%] lg:w-[95%] m-auto mt-10 md:mt-20 flex md:block justify-between items-center relative'>
                <div className='w-1/2 md:w-full '>
                    <MainHeading name='Presidential Initiative' />
                    <h1 className='text-4xl lg:text-3xl sm:text-2xl font-bold text-[#f1f1f1] mt-3'>for Artificial Intelligence & Computing</h1>
                    <p className='text-gray-200 text-sm font-light mt-5 sm:mt-3'>
                        The mission of PIAIC is to reshape Pakistan by revolutionizing education,
                        research, and business by adopting latest, cutting-edge technologies
                        . Experts are calling this the 4th industrial revolution. We want Pakistan
                        to become a global hub for AI, data science, cloud native computing, edge computing,
                        blockchain, augmented reality, and internet of things.
                    </p>
                    <a href='https://portal.piaic.org' target={'_blank'} rel="noreferrer"><button className='mt-5 py-4 w-40 sm:py-3 sm:w-36 sm:text-sm text-center bg-gradient-to-r from-[#035855] to-[#09D48F] rounded-full  text-white text_shadow text-base font-normal transition-all hover:translate-y-1'>APPLY</button></a>
                </div>
                <div className='w-1/2 md:w-full flex justify-end md:justify-center md:mt-7'>
                    <Image src={PiaicCover} alt='piaic' className='w-[80%] lg:w-[95%] md:w-[500px] sm:w-full' />
                </div>
            </div>
        </div>
    )
}

export default Coverblock;