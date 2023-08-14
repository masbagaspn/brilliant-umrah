import pj from "../../content/pj";

const PenanggungJawab = () => {
  return (
    <section className="w-full flex flex-col items-center gap-8 px-4 py-12 font-baloo">
      <h2 className="section-title">Penanggung Jawab Umrah</h2>
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
        {pj.map((p) => (
          <div
            key={p.name}
            className="p-4 flex flex-col gap-4 bg-blue-primary rounded-lg text-blue-secondary"
          >
            <img
              src={p.image}
              alt={`foto-${p.name}`}
              className="w-full h-auto aspect-square object-cover object-top rounded-md lg:w-64"
            />
            <div>
              <h3 className="font-medium">{p.name}</h3>
              <p className="text-xs text-blue-secondary/70">{p.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PenanggungJawab;
