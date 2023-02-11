import React from "react";
import { motion } from "framer-motion";
import App from "../components/App";

export default function Home() {
  const options = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <main className=" items-flex-start flex h-screen justify-center">
      <motion.div
        variants={options}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
        className="mt-10 flex h-full   w-full items-start justify-center "
      >
        <App />
      </motion.div>
    </main>
  );
}
