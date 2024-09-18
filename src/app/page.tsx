"use client"
import Services from "./components/services";
import APropos from "./components/apropos";
import Satisfaction from "./components/satisfaction";
import Amelioration from "./components/amelioration";
import Presentation from "./components/presentation";
import Contact from "./components/contact";
import Equipe from "./components/equipe";
import FixedAppBar from "./components/fixed_app_bar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Animations from "./components/utils/item";

export default function Home() {
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
        variants={Animations.opacity({ duration: 0.9 })}
        initial="hidden"
        whileInView="show"
        className="">

        <FixedAppBar></FixedAppBar>
        <Presentation></Presentation>
        <Services></Services>
        <APropos></APropos>
        <Satisfaction></Satisfaction>
        <Amelioration></Amelioration>
        <Contact></Contact>
        <Equipe></Equipe>
      </motion.div>
    </div>

  );
}
