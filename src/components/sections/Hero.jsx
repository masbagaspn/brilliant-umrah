import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../../App";
import clsx from "clsx";

const Hero = () => {
  const { loading, setLoading } = useContext(AppContext);
  return (
    <section
      className={clsx(
        "relative w-full h-screen flex items-center justify-center overflow-hidden",
        "bg-[url('assets/images/hero-image.webp')] bg-cover bg-center bg-no-repeat"
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: loading ? 0 : 1, y: loading ? 200 : 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="w-full h-fit flex flex-col items-center justify-center z-10 text-white gap-6 px-4"
      >
        <h1 className="sr-only">Brilliant Umrah</h1>
        <img
          src="/assets/images/logo/logo-briliant.png"
          alt="logo"
          className="w-16 h-auto object-contain"
          onLoad={() => setLoading(false)}
        />
        <h2 className="section-title text-center">
          Wujudkan Umrah Impianmu & <br className="hidden lg:block" /> Gapai
          Baitullah Bersama Brilliant
        </h2>
        <p className="paragraph text-white/70 text-center">
          Allah tidak memanggil orang yang mampu, <br />
          tetapi Allah memampukan orang yang terpanggil.
        </p>
        <a
          href="#main"
          className="w-fit text-sm px-4 py-2 bg-blue-primary rounded-full uppercase font-baloo"
        >
          Pelajari Lebih Lanjut
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
