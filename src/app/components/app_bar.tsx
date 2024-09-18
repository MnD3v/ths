"use client"
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

const AppBar = () => {

    const [menuIsOpen, setIsOpen] = useState(false)

    const menuRef = useRef<HTMLDivElement>(null)


    useEffect(() => {

        const handleScroll = () => {
            console.log("scring")
            console.log(menuIsOpen)

            setIsOpen(false)
            console.log(menuIsOpen)

        }



        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false)
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
        <div className=''>
            {/* <button onClick={() => {
                setIsOpen(false)
            }}>
                <div
                    className={`${menuIsOpen ? "block" : "hidden"} flex justify-center items-center top-2 right-2 fixed h-8 w-8 bg-black/30 rounded-lg`}>
                    <img src="/icons/close.png" alt="" className='h-3' />
                </div>
            </button> */}
            <motion.div ref={menuRef}
                initial={{ y: -300 }}
                animate={{ y: menuIsOpen ? 0 : -300, transition: { duration: 0.25 } }}
                className='fixed bg-white w-full p-6 text-black z-50'>
                <ul className={`flex flex-col items-center justify-center `}>
                    <a href="#" ><li className="font-openSans font-semibold py-3 px-4"> Accueil</li></a>
                    <a href="#services" ><li className="font-openSans font-semibold py-3 px-4"> Services</li></a>
                    <a href="#blog" ><li className="font-openSans font-semibold py-3 px-4"> Blog</li></a>
                    <a href="/contact" ><li className="font-openSans font-semibold py-3 px-4"> Contatcs</li></a>
                </ul>

            </motion.div>
            <div className="max  justify-between hidden md:flex">

                <img src="/white-logo.png" alt="" className="h-12" />

                <div className="flex font-bricolage gap-6 items-center">
                    <div>
                        <p className="font-semibold">Lundi - Vendredi 08:00 - 19:00</p>
                        <p>Samedis et Dimanches - FERMÉ</p>
                    </div>

                    <div>
                        <p className="font-semibold">+228 90 90 90 90</p>
                        <p>ths@group.com</p>
                    </div>

                </div>

            </div>
            <div className='hidden md:block'>
                <div className="max h-px bg-white/40 w-full mt-9"></div>
                <ul className="max flex">
                    <li className="border-l-[1px] border-white/30 px-6 py-3">Accueil</li>
                    <li className="border-l-[1px] border-white/30 px-6 py-3">Services</li>
                    <li className="border-l-[1px] border-white/30 px-6 py-3">Blog</li>
                    <li className="border-l-[1px] border-white/30 px-6 py-3">A Propos</li>
                    <li className="border-l-[1px] border-white/30 px-6 py-3">Contact</li>
                </ul>
            </div>
            <div className='flex w-full justify-between md:hidden items-center'>
                <img src="/white-logo.png" alt="" className="h-12" />
                <button onClick={() => {
                    setIsOpen(true)
                }}>
                    <img src="/icons/menu.png" alt="" className='h-7' />
                </button>
            </div>
        </div>
    )
}

export default AppBar