const Copy3 = () => {
  return (
    <section className="relative w-full px-8 py-12 flex flex-col gap-8 lg:p-20">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <h2 className="text-lg font-display font-bold w-4/5 leading-6 lg:text-3xl">
          Mulai Perjalanan Anda dengan Brilliant Umrah Sekarang
        </h2>
        <div className="flex flex-col gap-6">
          <h3 className="text-sm font-medium lg:text-lg">
            Hadits Sunah Menunaikan Umrah
          </h3>
          <p className="text-xs flex flex-col gap-4 lg:text-base">
            <span>
              سُئِلَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنْ
              الْعُمْرَةِ أَوَاجِبَةٌ هِيَ قَالَ لَا وَأَنْ تَعْتَمِرَ خَيْرٌ
              لَك
            </span>
            <span>
              Artinya:
              <br className="lg:hidden" />
              {`"Nabi Muhammad SAW pernah ditanya perihal umrah, apakah ia
            wajib? Rasulullah SAW menjawab, 'Tidak, namun jika engkau berumrah,
            itu lebih baik bagimu.'" (HR At-Tirmidzi).`}
            </span>
          </p>
        </div>
      </div>
      <img
        src="/assets/images/bg-copy-3.png"
        className="absolute bottom-0 right-0 w-1/2 opacity-10 lg:h-[100%] lg:w-auto lg:opacity-100"
      />
    </section>
  );
};

export default Copy3;
