import { createContext, useState } from "react";
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
import { AnimatePresence } from "framer-motion";

export const AppContext = createContext();

function App() {
  const [packages, setPackages] = useState({
    isOpen: false,
    payload: null,
  });

  return (
    <AppContext.Provider value={{ packages, setPackages }}>
      <main className="max-w-screen min-h-screen font-baloo">
        <Hero />
        <Copy />
        <Packages />
        <Testimony />
        <Multiguna />
        <About />
        <PenanggungJawab />
        <Copy2 />
        <Copy3 />
        <Footer />
        <AnimatePresence>
          {packages.isOpen === true && <PackageModal />}
        </AnimatePresence>
      </main>
    </AppContext.Provider>
  );
}

export default App;
