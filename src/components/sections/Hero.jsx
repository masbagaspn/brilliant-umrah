// import { motion } from "framer-motion";
// import { useContext } from "react";
// import { AppContext } from "../../App";
import clsx from "clsx";

const Hero = () => {
  // const { loading, setLoading } = useContext(AppContext);
  return (
    <section
      className={clsx(
        "relative w-full h-screen overflow-hidden",
        "bg-[url('/assets/images/section-1-mobile.webp')] bg-cover bg-top bg-no-repeat",
        "lg:bg-[url('/assets/images/section-1.webp')]"
      )}
    >
      <a
        href="#main"
        className={clsx(
          "absolute bottom-[10%] lg:bottom-[15%] left-1/2 -translate-x-1/2",
          "bg-blue-primary text-white text-center rounded-full uppercase font-baloo whitespace-normal hover:bg-opacity-80",
          "w-[240px] text-lg px-4 py-2 "
        )}
      >
        Pelajari Lebih Lanjut
      </a>
    </section>
  );
};

export default Hero;
