import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  style: string;
};

const options = {
  initial: { opacity: 0, y: -15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
};

const OnResponseAnimation = (props: Props) => {
  return (
    <motion.div
      variants={options}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className={props.style}
    >
      {props.children}
    </motion.div>
  );
};

export default OnResponseAnimation;
