import clsx from "clsx";

const Copy = () => {
  return (
    <section
      id="main"
      className={clsx(
        "w-full h-fit flex flex-col px-8 py-12 bg-blue-secondary md:flex-row lg:px-20 gap-6",
        "bg-[url('/assets/images/bg-white.png')] bg-top bg-cover bg-no-repeat"
      )}
    >
      <h2 className="section-title text-center text-blue-primary mb-8 md:w-1/3 md:text-left">
        Hadirkan Keberkahan dalam Setiap Perjalanan.
      </h2>
      <p className="text-sm text-justify px-4 md:w-2/3 lg:text-base">
        Di Brilliant, kami percaya bahwa umroh bukan hanya sekedar perjalanan
        fisik, namun juga perjalanan spiritual yang memperkuat iman dan
        ketaqwaan.
        <br />
        <br />
        {`Tentu, perjalanan suci ini adalah impian bagi banyak orang. Menginjakkan
        kaki ke tanah suci dengan pakaian ihram, lalu dengan lantang menyerukan
        panggilan Allah sambil memutari Ka'bah. Masyaallah, sungguh sebuah
        keberkahan yang tak terukur harganya.`}
        <br />
        <br />
        Bagi kami, mengantar jamaah berkunjung ke Baitullah adalah sebuah
        amanah. Maka dari itu, kami bertekad untuk memberikan pelayanan terbaik
        sesuai dengan kebutuhan jamaah. Mulai dari kemudahan kepengurusan
        dokumen perjalanan, biaya uang muka yang relatif murah, hotel yang
        strategis, dan fasilitas-fasilitas terbaik lainnya.
      </p>
    </section>
  );
};

export default Copy;
