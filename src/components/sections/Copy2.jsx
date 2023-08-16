const Copy2 = () => {
  return (
    <section className="relative w-full h-fit flex lg:justify-end bg-blue-secondary px-8 py-12 gap-4 lg:p-20">
      <div className="w-full lg:w-2/3 flex flex-col gap-4 lg:gap-8 z-10">
        <h2 className="text-lg font-display font-bold leading-6 z-10 lg:text-3xl">
          Ingin berangkat umrah dalam waktu dekat namun terkendala masa tunggu
          kuota?
        </h2>
        <p className="paragraph z-10 lg:w-2/3">
          Brilliant Umrah solusinya! Brilliant menjamin keberangkatan Anda tanpa
          menunggu lama. Bersama Brilliant, berangkat cepat harga bersahabat.
        </p>
        <button className="w-fit px-4 py-2 text-blue-secondary bg-blue-primary rounded-full text-xs lg:text-sm">
          KONSULTASIKAN PAKET UMRAHMU
        </button>
      </div>
      <img
        src="/assets/images/bg-copy-2.webp"
        alt="bg-img"
        className="absolute left-0 bottom-0 w-1/2 h-auto lg:h-full lg:w-auto object-cover z-0 opacity-10 lg:opacity-100 pointer-events-none"
      />
    </section>
  );
};

export default Copy2;
