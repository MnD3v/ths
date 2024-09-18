"use client"
import AppBar from '@/app/components/app_bar';
import Animations from '@/app/components/utils/item';
import { formations } from '@/app/constants';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
const Formation = ({ params }: { params: { link: string } }) => {





    const formation = formations.find((e) => {
        console.log(params);
        console.log(e.link);

        return e.link === params.link
    });


    const [isInView, setIsInView] = useState(true);

    useEffect(() => {

        setIsInView(false)

        return () => {

        }
    }, [])


    return (
        <div>
            {
                isInView && <div className='fixed flex flex-col items-center justify-center bg-blue-950 h-full w-full'>
                    <div className='loader'></div>
                </div>}
            <motion.div
                variants={Animations.opacity({ duration: 0.4 })}
                initial="hidden"
                whileInView="show"
                className=''>
                <div className='bg-blue-950 flex flex-col items-center text-white'>
                    <AppBar></AppBar>

                    <div className=' justify-center items-center mb-8 md:my-12 mx-2'>
                        <h1 className='text-center text-2xl md:text-4xl'>FORMATIONS </h1>

                        <h1 className='text-center text-xl md:text-4xl text-orange-600'>{formation?.title}</h1>
                    </div>

                </div>
                <div className='w-full flex justify-center'>
                    <div className='max-w-[800px] leading-relaxed'>

                        <div className='m-2 md:m-9'>
                            <img src={"/formations/" + formation?.icon.split('.')[0] + ".jpg"} alt="" className='h-[200px] sm:h-[300px] md:h-[500px] w-full object-cover' />
                            <h1 className='font-bricolage text-2xl md:text-4xl text-orange-600 mt-6'>{formation?.title}</h1>
                            <div className='h-px w-28 bg-blue-900 my-3'></div>
                            <p>{formation?.full_description}</p>
                            <h2 className='text-orange-600 font-bricolage mt-6'>Débouchés</h2>
                            {
                                formation?.debouches?.split("*").map((element) => (
                                    <div key={element}><p> <span className='font-bricolage font-bold text-lg'>-{element.split(':')[0]} </span>:{element.split(':')[1]}</p></div>
                                ))
                            }
                            <h2 className='font-bricolage text-orange-600 mt-6'>Unités d'enseignement</h2>
                            {
                                formation?.ues?.split("*").map((element) => (
                                    <div key={element}><p className='font-semibold'>- {element}</p></div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

    )
}

export default Formation