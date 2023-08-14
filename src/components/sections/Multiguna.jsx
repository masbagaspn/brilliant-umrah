const Multiguna = () => {
  return (
    <section className="w-full p-6 flex justify-center items-center lg:p-12">
      <div className="w-full flex flex-col p-4 pb-8 bg-green-primary rounded-lg text-green-secondary lg:w-3/4 lg:flex-row lg:p-8 lg:gap-8 lg:items-center">
        <div className="flex flex-col items-center gap-4 mb-4 lg:mb-0 lg:flex-row">
          <img
            src="/assets/images/logo/logo-briliant.png"
            alt="logo"
            className="w-12 h-auto lg:w-20"
          />
          <h2 className="section-title text-center lg:text-left wrap">
            Pembiayaan Multiguna
          </h2>
        </div>
        <p className="paragraph">
          Kami memiliki program bantuan pembiayaan multiguna yang siap digunakan
          sesuai kebutuhan masing-masing jamaah.
        </p>
      </div>
    </section>
  );
};

export default Multiguna;
