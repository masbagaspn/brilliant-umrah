import { useContext } from "react";
import packages from "../../content/packages";
import { AppContext } from "../../App";

const Packages = () => {
  const { setPackages } = useContext(AppContext);

  const handleOpen = (payload) => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");

    setPackages({
      isOpen: true,
      payload,
    });
  };

  return (
    <section className="w-full flex flex-col gap-8 px-8 py-12 lg:px-20">
      <h2 className="section-title text-blue-primary text-center">
        Temukan Paket
        <br />
        Umrah Pilihanmu
      </h2>
      <div className="grid grid-cols-2 gap-4 font-baloo lg:grid-cols-3 lg:gap-8">
        {packages.map((p) => (
          <article
            key={p.name}
            className="w-full h-auto flex flex-col gap-2 bg-white drop-shadow-md p-4 rounded-lg"
          >
            <img
              src={p.thumbnail}
              alt={`Flyer ${p.name}`}
              className="w-full h-auto aspect-[3/2] object-cover object-center rounded-md"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-medium md:text-base lg:text-lg">
                {p.name}
              </h3>
              <button
                onClick={() => handleOpen(p)}
                className="w-full text-xs text-blue-secondary py-2 bg-blue-primary rounded-md hover:bg-opacity-80"
              >
                Detail Paket
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Packages;
