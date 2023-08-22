import { createContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import MetaPixel from "./utils/metaPixel";
import clsx from "clsx";

import About from "./components/sections/About";
import Copy from "./components/sections/Copy";
import Copy2 from "./components/sections/Copy2";
import Copy3 from "./components/sections/Copy3";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Multiguna from "./components/sections/Multiguna";
import Packages from "./components/sections/Packages";
import PenanggungJawab from "./components/sections/PenanggungJawab";
import Testimony from "./components/sections/Testimony";
import PackageModal from "./components/Modal/PackageModal";
import Link from "./components/links/Link";

export const AppContext = createContext();

function App() {
  const [packages, setPackages] = useState({
    isOpen: false,
    payload: null,
  });
  const [loading, setLoading] = useState(true);
  console.log(packages);
  return (
    <AppContext.Provider value={{ packages, setPackages, loading, setLoading }}>
      <main className="max-w-screen min-h-screen font-baloo">
        <MetaPixel />
        <Hero />
        <Copy />
        <Packages />
        <Testimony />
        <Multiguna />
        <About />
        <PenanggungJawab />
        <Copy2 />
        <Copy3 />
        <Link
          className={clsx(
            {
              "opacity-100 right-8 duration-500 delay-500 pointer-events-auto":
                packages.isOpen === true,
            },
            {
              "opacity-0 -right-8 pointer-events-none":
                packages.isOpen === false,
            }
          )}
        />
        <AnimatePresence>
          {packages.isOpen === true && <PackageModal />}
        </AnimatePresence>
        <Footer />
      </main>
    </AppContext.Provider>
  );
}

export default App;
