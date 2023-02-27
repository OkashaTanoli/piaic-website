import React from 'react';
import { Coursecontent } from '@/components';
import { ITrackDataType } from '@/types/quarter';
import { Roboto } from '@next/font/google';
import Link from 'next/link';
import { tracks } from '@/data/tracks';


const roboto = Roboto({
    weight: ['300', '400', '700', '900'],
    subsets: ['latin']
})


async function getData(track: string, quarter: string) {
    const res = await fetch(`https://panaverse-dao-ultra.vercel.app/api/tracks/${track}?quarter=${quarter}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export async function generateStaticParams() {
    const ids = tracks.map((val) => ([{ track: val.id, quarter: '4' }, { track: val.id, quarter: '5' }])).flat()

    return ids.map((val) => {
        return {
            track: val.track,
            quarter: val.quarter
        }
    });
}

async function Page({ params }: { params: { track: string, quarter: string } }) {
    const data: ITrackDataType = await getData(params.track, params.quarter);

    return (
        <>
        
            <div className={`w-full mb-20 ${roboto.className}`}>
                <div className='w-[1300px] xl:w-[90%] lg:w-[95%] m-auto flex md:block justify-between mt-20 gap-10 relative'>
                    <div className='w-[270px] md:w-full h-fit md:border border-zinc-800 md:rounded-lg flex-shrink-0 sticky md:relative md:top-0 top-40'>
                        <div className='h-fit rounded-lg p-3 bg-[#171717]'>
                            <h2 className='font-medium text-[#f1f1f1] text-sm leading-tight bg-[#0f0f0f] p-3 rounded-lg'>{data.trackName}</h2>
                            <ul className='mt-2 text-[#989797]'>
                                {
                                    ['4', '5'].map((val, index) => {
                                        return (
                                            <Link key={index} href={`tracks/${encodeURIComponent(params.track)}/${encodeURIComponent(val)}`}><li className={`py-[5px] pl-5 text-sm tracking-widest border-l-[2px] ${params.quarter === val ? 'border-[#01b8b2] text-[#01b8b2]' : 'border-[#0f0f0f]'}`}>Quarter - {val}</li></Link>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className='mt-8 md:px-1'>
                            <ul>
                                {
                                    tracks.map((val, index) => {
                                        return (
                                            <Link key={index} href={`tracks/${encodeURIComponent(val.id)}/4`}>
                                                <li className='font-light text-sm flex gap-3'>
                                                    <div className='w-4 flex flex-col justify-center items-center'>
                                                        <div className='w-2 h-2 rounded-full bg-[#383838]'></div>
                                                        <div className='flex-grow w-[1px] bg-[#383838]'></div>
                                                    </div>
                                                    <p className={`w-4/5 pb-4 leading-none ${val.id === params.track ? 'text-[#01b8b2]' : 'text-[#f1f1f1]'}`}>{val.name}</p>
                                                </li>
                                            </Link>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className='mt-8 md:p-2'>
                            <h3 className='font-medium text-[#f1f1f1] text-base leading-tight'>Compulsory Quarters</h3>
                            <div className='flex gap-2 mt-2 items-center justify-between'>
                                {
                                    ['1','2','3'].map((val, index) => {
                                        return (
                                            <Link href={`compulsory/${encodeURIComponent(val)}`} key={index} className='p-3 w-1/3 text-center text-sm rounded-lg bg-[#171717] text-[#f1f1f1] transition-all hover:bg-[#01b8b2] hover:text-[#0f0f0f] hover:font-bold'>Q{val}</Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='w-[80%] md:w-full md:mt-14'>
                        <Coursecontent data={data} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;