import React from "react";
import {motion} from 'framer-motion'
import App from "../components/App";

export default function Home() {
  const options = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <main className=" flex justify-center items-flex-start h-screen">
      <motion.div
      variants={options}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{duration:1}}
      
      
      className="w-full h-full mt-10   flex justify-center items-start ">

        <App />
      </motion.div>

    </main>
  );
}
