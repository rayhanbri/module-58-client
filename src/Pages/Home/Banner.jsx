import React from 'react';
import { motion } from "motion/react"
import team1 from "../../assets/team1.jpg"
import team2 from "../../assets/team2.jpg"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src={team1}
                        animate={{ y: [0, 30, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className='  max-w-sm rounded-t-[40px] rounded-br-[40px] shadow-2xl
                        border-s-8
                        border-b-8
                        border-blue-600
                        '
                        alt="" />
                        <motion.img 
                        src={team2} 
                        animate={{x:[0,30,0]}}
                        transition={{duration:6,repeat:Infinity}}
                        className='max-w-sm rounded-b-[40px]  rounded-tl-[40px] border-r-8
                        border-b-8
                        border-blue-700
                        '
                        alt="" />
                </div>
                <div className='flex-1'>
                    {/* motion k install korbo er por import korbo , erpor je khane user korte chai tar aghe motion use korbo ,er por animate diye style korbo */}
                    <motion.h1
                        animate={
                            { rotate: 360, transition: { duration: 2 } }
                        }
                        className="text-5xl font-bold">Box Office News!</motion.h1>


                    <motion.h1
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 3 } }}
                        className="text-5xl font-bold">Remote <motion.span
                            animate={
                                {
                                    // color picker for html 
                                    color: ['#ff461e', '#e5ff1e', '#3af134'],
                                    transition: { duration: 2, repeat: Infinity }
                                }
                            } >Job!</motion.span> </motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <motion.button animate={{rotateX:0}}  transition={{duration:3,repeat:Infinity}} className="btn btn-primary">Get Started</motion.button>
                </div>
            </div>
        </div>
    );
};

export default Banner;