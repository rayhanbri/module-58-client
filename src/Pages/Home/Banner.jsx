import React from 'react';
import { motion } from "motion/react"
import team1 from "../../assets/team1.jpg"
import team2 from "../../assets/team2.jpg"


const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* flex 1 diye half jaiga nilam  */}
                <div className='flex-1'>
                    {/* must practice this segment  */}
                    <motion.img
                        src={team1}
                        animate = {{y:[100,150,100]}}
                        transition={{duration:10,repeat : Infinity}}
                        className="max-w-sm rounded-t-[40px] rounded-br-[40px] shadow-2xl
                        border-s-8
                        border-b-8
                        border-blue-600
                        "
                    /> 
                    <motion.img
                        src={team2}
                        animate = {{x:[100,150,100]}}
                        transition={{duration:5 ,delay:10,repeat : Infinity}}
                        className="max-w-sm rounded-t-[40px] rounded-br-[40px] shadow-2xl
                        border-s-8
                        border-b-8
                        border-blue-600
                        "
                    /> 
                </div>
                <div className='flex-1'>
                    {/* motion k install korbo er por import korbo , erpor je khane user korte chai tar aghe motion use korbo ,er por animate diye style korbo */}
                    {/* <motion.h1
                    animate = {
                        {
                            rotate:180,
                            x:200,
                            // eita dile niche nambhe 
                            // y:200,
                            // eita dile upore jabe 
                            y:-200,
                            
                            transition : {duration: 4}}
                    }
                     className="text-5xl font-bold">Box Office News!</motion.h1> */}


                    <motion.h1
                        initial={{ scale: 0 }}
                        animate={{
                            scale: 1,
                            transition: { duration: 3 }
                        }}
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
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;