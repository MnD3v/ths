"use client"
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useGlobalState } from '../contexts/GlobalStateContext'

const FixedAppBar = ({ fixed }: { fixed?: boolean }) => {
    const { menuIsOpen, setMenuIsOpen } = useGlobalState();

    const [showAppBar, setShow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 180) {
                setShow(true)
            } else {
                setShow(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <motion.div className={` fixed flex justify-center  text-black bg-white  w-full shadow z-50`}
            initial={{ y: -200 }}
            animate={{ y: fixed == true ? 0 : showAppBar ? 0 : -200, }}

        >
            <div className='max w-full flex justify-between
             items-center
             py-6 px-4
             '>

                <img src="/black-logo.png" alt="" className='h-8  md:h-12' />
                <button
                    onClick={() => {

                        setMenuIsOpen((!menuIsOpen))
                        console.log(menuIsOpen)
                    }} className={`p-2 md:hidden ${menuIsOpen ? 'pointer-events-none' : 'pointer-events-auto'}`}>
                    <img src={"/icons/black-menu.png"} alt="" className='h-5 ' />
                </button>
                <ul className={`hidden md:flex items-center justify-center`}>
                    <a href="#" ><li className="font-openSans font-semibold py-3 px-4"> Accueil</li></a>
                    <a href="#formations" ><li className="font-openSans font-semibold py-3 px-4"> Formations</li></a>
                    <a href="#blog" ><li className="font-openSans font-semibold py-3 px-4"> Blog</li></a>
                    <a href="/contact" ><li className="font-openSans font-semibold py-3 px-4"> Contatcs</li></a>
                </ul>
            </div>


        </motion.div>
    )
}

export default FixedAppBar