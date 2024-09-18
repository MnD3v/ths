"use client"
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useGlobalState } from '../contexts/GlobalStateContext';

const AppBar = () => {
    const { menuIsOpen, setMenuIsOpen } = useGlobalState();

    const menuRef = useRef<HTMLDivElement>(null)


    useEffect(() => {

        const handleScroll = () => {
            console.log("scring")
            console.log(menuIsOpen)

            setMenuIsOpen(false)
            console.log(menuIsOpen)

        }



        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuIsOpen(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll)
        }


    }, [])



    return (
        <div className='w-full'>


            <div className={` fixed ${menuIsOpen ? "block" : "hidden"} h-full w-full bg-black/30`}>

            </div>
            <MobileAppBar menuIsOpen={menuIsOpen} menuRef={menuRef}></MobileAppBar>
            <div className='w-full flex justify-center'>
                <div className='max w-full p-6 flex flex-col items-center '>
                    <div className="max w-full  justify-between hidden md:flex">

                        <img src="/white-logo.png" alt="" className="h-12" />

                        <div className="flex font-bricolage gap-6 items-center">
                            <div className='flex items-center'>
                                <img src="/icons/clock.png" alt="" className='h-6 m-1' />
                                <div>
                                    <p className="font-semibold">Lundi - Vendredi 08:00 - 19:00</p>
                                    <p>Samedis et Dimanches - FERMÉ</p>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <img src="/icons/phone.png" alt="" className='h-6 m-1' />

                                <div>
                                    <p className="font-semibold">+228 90 90 90 90</p>
                                    <p>ths@group.com</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='w-full hidden md:block'>
                        <div className="max h-px bg-white/40 w-full mt-9"></div>

                        <ul className="max flex">
                            <li className="font-semibold border-l-[1px] border-white/30 px-6 py-3">Accueil</li>
                            <li className="font-semibold border-l-[1px] border-white/30 px-6 py-3">Services</li>
                            <li className="font-semibold border-l-[1px] border-white/30 px-6 py-3">Blog</li>
                            <li className="font-semibold border-l-[1px] border-white/30 px-6 py-3">A Propos</li>
                            <li className="font-semibold border-l-[1px] border-white/30 px-6 py-3">Contact</li>
                        </ul>
                    </div>
                    <div className='flex w-full justify-between md:hidden items-center'>
                        <img src="/white-logo.png" alt="" className="h-12" />
                        <button
                            onClick={() => {

                                setMenuIsOpen((!menuIsOpen))
                                console.log(menuIsOpen)
                            }} >
                            <img src={menuIsOpen ? "/icons/close.png" : "/icons/white-menu.png"} alt="" className='h-7 ' />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AppBar


const MobileAppBar = ({ menuRef, menuIsOpen, }: { menuRef: any, menuIsOpen: any }) => (
    <motion.div ref={menuRef}
        initial={{ x: "-300px" }}
        animate={{ x: menuIsOpen ? "0" : "-300px", transition: { duration: 0.25 } }}
        className='fixed flex flex-col justify-between bg-white w-[300px] h-full p-6 text-black z-50'>

        <ul className={`flex flex-col items-center justify-center `}>
            <a href="#" ><li className="font-openSans font-semibold py-3 px-4"> Accueil</li></a>
            <a href="#services" ><li className="font-openSans font-semibold py-3 px-4"> Services</li></a>
            <a href="#blog" ><li className="font-openSans font-semibold py-3 px-4"> Blog</li></a>
            <a href="/contact" ><li className="font-openSans font-semibold py-3 px-4"> Contatcs</li></a>
        </ul>
        <div className="flex flex-wrap gap-4">

            <img src="/black-logo.png" alt="" className="h-9" />

            <div className=" font-bricolage gap-6 items-center space-y-3">
                <div className='flex'>
                    <img src="/icons/clock.png" alt="" className='h-4 m-1' />
                    <div>
                        <p className="font-semibold">Lundi - Vendredi 08:00 - 19:00</p>
                        <p>Samedis et Dimanches - FERMÉ</p>
                    </div>
                </div>

                <div className='flex'>
                    <img src="/icons/phone.png" alt="" className='h-4 m-1' />

                    <div>
                        <p className="font-semibold">+228 90 90 90 90</p>
                        <p>ths@group.com</p>
                    </div>
                </div>

            </div>

        </div>

    </motion.div>
)