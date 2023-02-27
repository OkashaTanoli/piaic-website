import Image from 'next/image';
import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image1 from '../../public/assets/image1.jpg'
import Image2 from '../../public/assets/image2.jpg'
import Image3 from '../../public/assets/image3.jpg'

export default class ImagesCaurosel extends Component {
    render() {
        let data = [
            {
                img: Image1,
                title: 'Meeting with Chief Secretary Sindh.',
                text: 'Meeting with Chief Secretary of Sindh, Mr. Mumtaz Ali Shah on December 28th, where he assured the PIAIC management team of his full support for the national cause and offered space at all the public universities in Sindh.'
            },
            {
                img: Image2,
                title: 'First meeting with the President.',
                text: 'First official PIAIC meeting on November 1st, 2018. From left to right: Mr. Zia Ullah Khan (CEO Panacloud), Mr. Kazi Rahat Ali (General Secretary PIAIC), President Dr. Arif Alvi, Mr. Yousuf Lakhani (Presdent Saylani Welfare Trust, Mr. Muhammad Ghazzal (COO Saylani Welfare Trust).'
            },
            {
                img: Image3,
                title: 'President launching the PIAIC website.',
                text: 'President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid Lakhani (Chancellor Iqra University), President Dr. Arif Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan Hanif (CTO Panacloud), Maulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani (President Saylani Welfare Trust).'
            },
        ]
        const settings = {
            dots: true,
            dotsClass: 'slick-dots line-indicator',
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ],

            customPaging: (i: number) => (
                <div className='-mt-2 text-xs opacity-0'>{i}</div>
            ),
        };
        return (
            <div className='mt-10 w-full'>
                <Slider {...settings} className='w-full'  >
                    {
                        data.map((val, index) => {
                            return (
                                <div className='px-3 xl-lg:px-1 group mb-10 md:mb-5 relative overflow-hidden cursor-pointer outline-none' key={index}>
                                    <div className='relative bg-slate-900'>
                                        <Image src={val.img} className='w-full' alt={val.title} />
                                        <div className='absolute bottom-0 w-full flex flex-col h-11 xs:h-7 transition-all group-hover:h-full mr-5 px-5 backdrop-blur-md bg-[#ffffff71]'>
                                            <h1 className='text-xl sm:text-lg xs:text-sm p-2 xs:p-1 text-center font-bold'>{val.title}</h1>
                                            <div className=' w-full h-[3px] bg-[#035855]'></div>
                                            <div className='flex-grow flex items-center'>
                                                <p className='text-center text-zinc-800 text-sm xl-lg:text-lg md:text-base sm:text-xs xs:line-clamp-[7] font-semibold pt-2'>{val.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>

            </div>
        );
    }
}
