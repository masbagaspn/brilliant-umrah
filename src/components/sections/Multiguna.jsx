import clsx from "clsx";

const Multiguna = () => {
  return (
    <section className="w-full p-6 flex justify-center items-center lg:p-12">
      <div
        className={clsx(
          "w-full h-fit flex flex-col items-center p-4 gap-4 rounded-lg text-green-secondary lg:w-3/4 lg:flex-row lg:p-8 lg:gap-8 lg:items-center",
          "bg-[url('/assets/images/bg-green.png')] bg-cover bg-top bg-no-repeat bg-opacity-10"
        )}
      >
        <div className="w-12 lg:w-1/3 flex items-start">
          <img
            src="/assets/images/logo/logo-briliant.png"
            alt="logo"
            className="w-12 h-auto lg:w-32"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl lg:text-3xl font-bold font-display text-left lg:text-left wrap whitespace-pre-line">
            {`Jangan Tunda Niat Umrahmu.\nSoal Dana, Brilliant Siap Bantu`}
          </h2>
          <p className="paragraph mb-4">
            <strong className="text-lg lg:text-2xl font-medium text-center lg:text-left wrap">
              Pembiayaan Multiguna
            </strong>
            <br />
            Kami memiliki program bantuan pembiayaan multiguna yang siap
            digunakan sesuai kebutuhan masing-masing jamaah.
          </p>
          <a
            href="https://gass.co.id/cta"
            target="_blank"
            rel="noreferrer"
            className="w-full h-fit lg:w-fit text-sm text-center uppercase px-4 py-2 bg-blue-primary text-blue-secondary rounded-full hover:bg-blue-primary/70 transition"
          >
            Konsultasi Lebih Lanjut
          </a>
        </div>
      </div>
    </section>
  );
};

export default Multiguna;
