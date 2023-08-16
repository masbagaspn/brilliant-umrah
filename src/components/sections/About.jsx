import clsx from "clsx";

const About = () => {
  return (
    <section
      className={clsx(
        "relative w-full flex flex-col items-center gap-4 py-12 px-8 lg:py-20",
        "bg-[url('assets/images/bg-blue.png')] bg-center bg-no-repeat bg-cover"
      )}
    >
      <img
        src="/assets/images/logo/logo-briliant.png"
        alt="logo"
        className="w-12 h-auto lg:w-20"
      />
      <h2 className="section-title text-blue-secondary">Tentang Kami</h2>
      <p className="paragraph text-blue-secondary/70 text-justify lg:w-1/2">
        Berdiri sejak tahun 2017, PT. Brilliant Tiga Perkasa merupakan agen
        travel profesional yang siap mengakomodasi seluruh perjalanan umrah dan
        haji Anda. Pengalaman kami tidak perlu diragukan lagi. Kami telah
        berkecimpung lebih dari 8 tahun di dunia haji dan umrah.
      </p>
    </section>
  );
};

export default About;
