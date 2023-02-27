import {Bebas_Neue } from '@next/font/google';
import Image from 'next/image';
import React from 'react';
import TracksBG from '../../public/assets/tracksbg.svg'
import Lines from '../../public/assets/lines-hero.svg'
import BlockChain from '../../public/assets/blockchain.png'
import CloudComputing from '../../public/assets/cloudcomputing.png'
import IOT from '../../public/assets/iot.png'
import AI from '../../public/assets/ai.png'
import Geonomics from '../../public/assets/geonomics.png'
import Network from '../../public/assets/network.png'
import Link from 'next/link';

const bebas_neue = Bebas_Neue({
    weight: ['400'],
    subsets: ['latin']
})

let data = [
    { image: BlockChain, trackId: 'wmd', title: 'Web 3 and Metaverse', desc: 'Web3 refers to the third generation of the internet, which is being developed to provide a decentralized and more secure experience for users. The metaverse, on the other hand, refers to a virtual world that is fully immersive and interactive, allowing users to create and engage with digital environments and experiences.' },
    { image: CloudComputing, trackId: 'cnc', title: 'Cloud-Native Computing', desc: 'Cloud Native Computing is a term that refers to the design and deployment of applications and services in a cloud-native environment. A cloud-native environment is a platform that is optimized for the cloud and built from the ground up to take full advantage of the capabilities of cloud computing.' },
    { image: AI, trackId: 'ai', title: 'Artificial Intelligence (AI) and Deep Learning', desc: 'Artificial Intelligence (AI) is a field of computer science that focuses on creating machines or computer programs that can perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, perception, natural language understanding, and decision-making. AI systems can be trained to recognize patterns in data, make predictions, or take actions based on the input they receive.' },
    { image: IOT, trackId: 'iot', title: 'Ambient Computing and IoT', desc: 'Ambient Computing refers to the idea that technology should be seamlessly integrated into our environment, so that it is always present and available to us in a way that is natural and unobtrusive. The Internet of Things (IoT) refers to the network of physical devices, vehicles, buildings, and other items embedded with sensors, software, and connectivity that allows them to collect and exchange data.' },
    { image: Geonomics, trackId: 'gbs', title: 'Genomics and Bioinformatics', desc: 'Genomics is the study of the complete set of DNA within an organism, including its genes and other genetic material. This includes analyzing the structure, function, and evolution of genomes, as well as the interactions between genes and their environment.' },
    { image: Network, trackId: 'npa', title: 'Network Programmability and Automation', desc: 'Network programmability and automation refer to the use of software and other tools to manage and control network devices and infrastructure, instead of relying on manual configuration and management processes' }
]

function Tracks() {
    return (
        <div className='w-full py-16 relative'>
            <Image src={TracksBG} alt='BG' className='absolute top-0 left-0 -z-10 w-[600px] md:w-full' />
            <div className='w-[1300px] xl:w-[90%] lg:w-[95%]  m-auto'>
                <div>
                    <div className='flex items-start gap-28 xl:gap-16 lg:gap-10 md:gap-5'>
                        <div className='w-10 sm:w-5 flex flex-col items-center justify-center'>
                            <div className='w-7 h-7 sm:w-4 sm:h-4 sm:border-[3px] rounded-full bg-zinc-800 border-[6px] border-gray-200 shadow-[0_0_20px_black]'></div>
                            <div className='w-[3px] h-32 md:h-20 xs:h-28 bg-gradient-to-t from-[#ffeee9] to-[#1e1f28]'></div>
                        </div>
                        <div className='-mt-2'>
                            <h1 className={`text-6xl xl:text-5xl text-[#01b8b2] tracking-widest text_shadow word_spacing ${bebas_neue.className}`}>AVAILABLE TRACKS</h1>
                            <div className='w-[80px] h-[8px] xs:w-[60px] xs:h-[5px] bg-gray-300 mt-3'></div>
                        </div>
                    </div>
                    <div className=''>
                        {
                            data.map((val, index) => {
                                return (
                                    <div className='flex gap-28 xl:gap-16 lg:gap-10 md:gap-5' key={index}>
                                        <div className='w-10 sm:w-5 flex flex-col justify-center items-center relative'>
                                            <div className='w-10 h-10 flex items-center justify-center relative my-5'>
                                                <div className={`w-6 h-6 sm:w-4 sm:h-4 rounded-full ${index === 0 ? 'bg-[#5961af]' : index === 1 ? 'bg-[#7EE787]' : index === 2 ? 'bg-[#EC6547]' : index === 3 ? 'bg-[#ec4760]' : index === 4 ? 'bg-[#84aaec]' : 'bg-[#47ecbd]'} blur-xl sm:blur-lg absolute`}></div>
                                                <div className='w-3 h-3 rounded-full bg-zinc-800 border-2 border-white z-10'></div>
                                            </div>
                                            <div className={`flex-grow w-[3px] bg-gradient-to-t ${index === 0 ? 'from-[#434985]' : index === 1 ? 'from-[#7EE787]' : index === 2 ? 'from-[#EC6547]' : index === 3 ? 'from-[#ec4760]' : index === 4 ? 'from-[#84aaec]' : 'from-[#47ecbd]'} to-[#99918e]`}></div>
                                            {
                                                index === data.length - 1 &&
                                                <div className='w-7 h-7 sm:w-4 sm:h-4 sm:border-[3px] rounded-full bg-zinc-800 border-[6px] border-gray-200 shadow-[0_0_20px_black]'></div>
                                            }
                                        </div>
                                        <div className='pt-5 pb-16'>
                                            <h1 className='text-4xl lg:text-3xl md:text-2xl text-gray-100 font-bold'>{val.title}</h1>
                                            <div className={`flex md:flex-col-reverse gap-10 items-center pt-5 ${index % 2 === 0 && 'flex-row-reverse'}`}>
                                                <div className={`w-1/3 md:w-[400px] xs:w-full flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} md:justify-center`}>
                                                    <Image src={val.image} alt={val.title} className='w-[80%] lg:w-[95%] md:w-full' />
                                                </div>
                                                <div className='w-2/3 md:w-full relative bg-gradient-to-t from-[#171717] to-[#202020] p-5 rounded-lg overflow-hidden'>
                                                    <div className='absolute w-28 h-28 rounded-full top-1/2 right-0 -translate-y-1/2 bg-[#734f0c] blur-[150px]'></div>
                                                    <p className='text-base lg:text-sm font-light word_spacing_sm drop-shadow-2xl text-gray-300'>{val.desc}</p>
                                                    <Link href={`/tracks/${encodeURIComponent(val.trackId)}/4`}><div className='text-gray-200 py-3 border border-zinc-700 w-[150px] text-center mt-10 xl:mt-5 transition-all cursor-pointer hover:tracking-widest hover:bg-[#222222] active:bg-[#161616]'>Learn&nbsp; More</div></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Tracks;