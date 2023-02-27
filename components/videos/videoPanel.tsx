'use clienet'

import Image from 'next/image';
import React, { useState } from 'react';
import { Roboto } from '@next/font/google';
import { YoutubeData as data } from '@/data/youtube';
import { IYtData } from '@/types/yt_data';
import { FiCheck } from 'react-icons/fi'
import moment from 'moment';

const roboto = Roboto({
    weight: ['300', '500'],
    subsets: ['latin']
})

function VideoPanel() {

    const [video, setVideo] = useState(data[0])

    return (
        <div className={`flex lg:block gap-5 w-full mt-10 ${roboto.className}`}>
            <div className='flex-grow relative lg:w-full'>
                <div className='absolute w-full h-full bg-[#ffffff27] blur-3xl'></div>
                <div className='h-[500px] md:h-[400px] sm:h-[300px] xs:h-[250px]'>
                    <iframe
                        className='relative z-20'
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.videoId}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className='mt-5'>
                    <h1 className='text-xl font-medium text-[#f1f1f1] sm:text-base'>{video.title}</h1>
                    <p className='text-[#c2c1c1] font-light text-sm'><span className='font-medium'>Published :</span> {moment(video.publishTime).startOf('hour').fromNow()}</p>
                </div>
            </div>
            <div className='w-[330px] lg:w-full lg:mt-10 h-[500px] md:h-[400px]  flex flex-col z-20 overflow-hidden rounded-xl border-[0.5px] border-[#5c5c5c2a] bg-[#1c1c1c]'>
                <div className='border-b-[0.5px] border-[#5c5c5c2a] rounded-t-xl text-[#313131] bg-[#f1f1f1]'>
                    <p className={`py-3 tracking-wide text-sm text-center font-semibold cursor-pointer`}> VIDEOS LIST</p>
                </div>
                <div className='overflow-y-auto custom_scroll my-2'>
                    {
                        data.map((val: IYtData, index: number) => {
                            return (
                                <div key={index} title={val.title} className={`flex cursor-pointer gap-2 py-1 px-3 ${val.videoId === video.videoId ? 'bg-[#313131]' : 'hover:bg-[#3131316d] '}`} onClick={() => setVideo(val)}>
                                    <Image src={val.thumbnails.url} className='rounded-md' width={100} height={100} alt='img' />
                                    <div className='flex flex-col justify-center pr-2'>
                                        <p className='text-sm line-clamp-2 text-[#f1f1f1] font-medium'>{val.title}</p>
                                        <div>
                                            <p className='text-[#c2c1c1] font-medium text-xs flex gap-2 items-center'>PIAIC <FiCheck size={12} className='bg-[#c2c1c1] p-[1px] text-black rounded-full' /></p>
                                            <p className='text-[#c2c1c1] font-light text-xs'>{moment(val.publishTime).startOf('hour').fromNow()}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    );
}

export default VideoPanel;