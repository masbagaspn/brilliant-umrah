const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="w-full h-fit flex flex-col items-center justify-center z-10 text-white gap-6 px-4">
        <h1 className="sr-only">Brilliant Umrah</h1>
        <img
          src="/assets/images/logo/logo-briliant.png"
          alt="logo"
          className="w-16 h-auto object-contain"
        />
        <h2 className="section-title text-center">
          Wujudkan Umrah Impianmu & <br className="hidden lg:block" /> Gapai
          Baitullah Bersama Brilliant
        </h2>
        <p className="paragraph text-white/70 text-center">
          Allah tidak memanggil orang yang mampu, <br />
          tetapi Allah memampukan orang yang terpanggil.
        </p>
        <button className="w-fit text-sm px-4 py-2 bg-blue-primary rounded-full uppercase font-baloo">
          Pelajari Lebih Lanjut
        </button>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="/assets/images/hero-image.jpg"
          alt="hero-image"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default Hero;
