import clsx from "clsx";
import { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PiAirplaneTakeoffBold, PiAirplaneTiltBold } from "react-icons/pi";
import {
  HiOutlineBuildingOffice2,
  HiOutlineCalendarDays,
} from "react-icons/hi2";
import { AppContext } from "../../App";

const PackageModal = () => {
  const { packages, setPackages } = useContext(AppContext);
  const [selected, setSelected] = useState(packages.payload.packages[0]);
  const [isIteneraryOpen, setIsIteneraryOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(true);

  const handleClose = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");

    setPackages({ ...packages, isOpen: false });
  };

  return (
    <motion.div
      key="package-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.25 } }}
      transition={{ duration: 0.25 }}
      className="fixed top-0 left-0 w-screen h-[100dvh] bg-black/20 backdrop-blur-sm flex items-center justify-center lg:justify-end"
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{
          x: 0,
          transition: { delay: 0.25, duration: 0.25, stiffness: 0 },
        }}
        exit={{ x: "100%" }}
        transition={{
          duration: 0.25,
        }}
        className="w-screen h-full bg-white flex flex-col lg:w-4/5"
      >
        <header className="sticky top-0 flex justify-between items-center p-8 bg-white drop-shadow-md">
          <h2 className="text-2xl font-display font-bold w-2/3">
            {packages.payload.name}
          </h2>
          <button
            onClick={() => handleClose()}
            className="inline-flex items-center gap-1 text-blue-primary"
          >
            <span>Kembali</span>
            <span>
              <svg
                className="w-3 h-3"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.25 4.5L15.75 12L8.25 19.5"
                  className="stroke-[2px] stroke-blue-primary"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </header>
        {/* select package */}
        <div className="grow flex flex-col gap-8 p-8 overflow-y-scroll custom-scrollbar">
          {packages.payload.packages.length > 1 && (
            <div className="flex gap-4">
              {packages.payload.packages.map((p) => (
                <button
                  key={p.name}
                  onClick={() => setSelected(p)}
                  className={clsx(
                    "w-fit py-1.5 px-3 text-blue-primary font-medium",
                    {
                      "bg-blue-secondary rounded-md border-[1.5px] border-blue-primary":
                        selected.name === p.name,
                      "opacity-50": selected.name !== p.name,
                    }
                  )}
                >
                  {p.name}
                </button>
              ))}
            </div>
          )}

          <div className="flex flex-col gap-4">
            {/* package details */}
            <div
              className={clsx(
                "flex flex-col gap-4 border-b-2 border-blue-primary py-2",
                { "border-opacity-10": isDetailOpen === true }
              )}
            >
              <div
                onClick={() => setIsDetailOpen(!isDetailOpen)}
                className="w-full flex justify-between items-center cursor-pointer hover:opacity-70"
              >
                <h3 className="text-lg font-bold text-blue-primary py-1">
                  Detail Paket
                </h3>
                <span>
                  <motion.svg
                    animate={{ rotate: isDetailOpen ? 180 : 0 }}
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5 8.25L12 15.75L4.5 8.25"
                      className="stroke-blue-primary stroke-[2px]"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </span>
              </div>
              <AnimatePresence>
                {isDetailOpen === true && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ ease: "easeIn" }}
                    className="flex flex-col gap-8 overflow-hidden"
                  >
                    <div className="flex flex-col gap-2">
                      <h4 className="detail-title">
                        <HiOutlineCalendarDays />
                        Jadwal Keberangkatan
                      </h4>
                      <div className="flex gap-3 flex-wrap">
                        {selected.schedule.map((s) => (
                          <div
                            key={s}
                            className="w-fit text-xs bg-blue-secondary rounded-full py-2 px-5 border border-blue-primary"
                          >
                            {s}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <h4 className="detail-title">
                          <HiOutlineBuildingOffice2 />
                          Hotel Mekkah
                        </h4>
                        <p className="detail-hotel-text">{selected.makkah}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h4 className="detail-title">
                          <HiOutlineBuildingOffice2 />
                          Hotel Madinah
                        </h4>
                        <p className="detail-hotel-text">{selected.madinah}</p>
                      </div>
                      {selected?.dubai !== null && (
                        <div className="flex flex-col gap-2">
                          <h4 className="detail-title">
                            <HiOutlineBuildingOffice2 />
                            Hotel Dubai
                          </h4>
                          <p className="detail-hotel-text">{selected.dubai}</p>
                        </div>
                      )}
                      {selected?.amman !== null && (
                        <div className="flex flex-col gap-2">
                          <h4 className="detail-title">
                            <HiOutlineBuildingOffice2 />
                            Hotel Amman
                          </h4>
                          <p className="detail-hotel-text">{selected.amman}</p>
                        </div>
                      )}
                      {selected?.palestine !== null && (
                        <div className="flex flex-col gap-2">
                          <h4 className="detail-title">
                            <HiOutlineBuildingOffice2 />
                            Hotel Palestine
                          </h4>
                          <p className="detail-hotel-text">
                            {selected.palestine}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <h4 className="detail-title">
                          <PiAirplaneTiltBold />
                          Keberangkatan
                        </h4>
                        <span className="detail-hotel-text">
                          {selected.keberangkatan}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h4 className="detail-title">
                          <PiAirplaneTakeoffBold />
                          Maskapai
                        </h4>
                        <span className="detail-hotel-text">
                          {selected.maskapai}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* itenerary */}
            <div
              className={clsx(
                "flex flex-col gap-4 border-b-2 border-blue-primary py-2",
                { "border-opacity-0": isIteneraryOpen === true }
              )}
            >
              <div
                onClick={() => setIsIteneraryOpen(!isIteneraryOpen)}
                className="w-full flex justify-between items-center cursor-pointer hover:opacity-70"
              >
                <h3 className="text-lg font-bold text-blue-primary">
                  Itenerary
                </h3>
                <span>
                  <motion.svg
                    animate={{ rotate: isIteneraryOpen ? 180 : 0 }}
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5 8.25L12 15.75L4.5 8.25"
                      className="stroke-blue-primary stroke-[2px]"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </span>
              </div>
              <AnimatePresence>
                {isIteneraryOpen === true && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ ease: "easeIn" }}
                    className={
                      "w-full flex flex-col rounded-lg border border-blue-primary overflow-hidden"
                    }
                  >
                    <div className="w-full bg-blue-secondary border-b border-blue-primary hidden lg:flex">
                      <span className="w-[20%] p-td border-r border-blue-primary">
                        Hari
                      </span>
                      <span className="w-[30%] p-td border-r border-blue-primary">
                        Kota
                      </span>
                      <span className="w-[50%] p-td">Program</span>
                    </div>
                    {selected.itenerary.map((i, idx) => (
                      <div
                        key={idx}
                        className={clsx(
                          "flex flex-col p-td border-b border-blue-primary/30 gap-2",
                          "lg:w-full lg:flex-row lg:p-0 lg:gap-0"
                        )}
                      >
                        <span className="lg:w-[20%] lg:p-td border-r border-blue-primary">{`Hari ${i.day}`}</span>
                        <span className="flex flex-col lg:w-[30%] lg:p-td border-r border-blue-primary">
                          <span className="text-medium opacity-50 lg:hidden">
                            Kota
                          </span>
                          <span>{i.kota}</span>
                        </span>
                        <span className="flex flex-col lg:w-[50%] lg:p-td">
                          <span className="text-medium opacity-50 lg:hidden">
                            Program
                          </span>
                          <span>{i.program}</span>
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 w-full py-4 px-8 flex justify-between items-center bg-blue-secondary text-blue-primary">
          <span className="flex flex-col gap-1">
            <span>Harga</span>
            <span className="text-xl font-semibold ">{selected.price}</span>
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PackageModal;
