import { motion } from "framer-motion";
import CopyUrlIcon from "./CopyIcon";
import DoneIcon from "./DoneIcon";

type Props = {
  variant: "copy" | "done";
};

const sectionOptions = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
};

const buttonOptions = {
  initial: { opacity: 0, scale: 0.5, y: 15 },
  animate: { opacity: 1, scale: 1.2, y: 0 },
  exit: { opacity: 0, y: -15 },
};

const CopyButton = (props: Props) => {
  return (
    <motion.div
      variants={sectionOptions}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {props.variant === "done" ? (
        <motion.div
          variants={buttonOptions}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          <DoneIcon />
        </motion.div>
      ) : (
        <CopyUrlIcon />
      )}
    </motion.div>
  );
};

export default CopyButton;
