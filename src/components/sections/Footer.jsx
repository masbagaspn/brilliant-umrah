import socials from "../../content/socials";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-primary text-blue-secondary font-baloo lg:grid lg:grid-cols-3">
      <div className="flex flex-col gap-4 p-8 border-b border-blue-secondary/70 lg:border-none">
        <span>PT. BRILLIANT TIGA PERKASA</span>
        <span>
          Jl. Wisma Menanggal 1 No. 20 Gayungan Surabaya,
          <br />
          Jawa Timur, Indonesia, 60234
        </span>
      </div>
      <div className="w-full flex items-center justify-center">
        <img
          src="/assets/images/logo/logo-briliant.png"
          className="w-32 h-auto"
        />
      </div>
      <div className="p-8 flex flex-col gap-4">
        <span className="uppercase font-medium">Kontak Kami</span>
        <div className="flex flex-col gap-2">
          {socials.map((soc) => (
            <a key={soc.name}>
              <span>{soc.text}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
