import { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../App";

const CallToAction = () => {
  const { packages } = useContext(AppContext);
  const isOpen = packages.isOpen === true;

  return (
    <motion.div
      initial={{ zIndex: "9999" }}
      animate={{
        opacity: isOpen ? 1 : 0,
        x: isOpen ? 0 : 200,
        pointerEvents: isOpen ? "auto" : "none",
        transition: {
          delay: isOpen ? 0.5 : 0,
          duration: isOpen ? 0.5 : 0.25,
        },
      }}
      className="fixed bottom-6 right-8 w-fit h-fit"
    >
      <motion.a
        href="https://gass.co.id/cta"
        className="w-fit h-fit text-sm uppercase px-4 py-2 bg-blue-primary text-blue-secondary rounded-full"
      >
        Hubungi Kami
      </motion.a>
    </motion.div>
  );
};

export default CallToAction;
