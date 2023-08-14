import testimonies from "../../content/testimony";

const Testimony = () => {
  return (
    <section className="w-full flex flex-col bg-blue-primary py-12 px-8 lg:px-20">
      <h2 className="section-title text-center text-white mb-8">
        Apa Kata Mereka?
      </h2>
      <div className="w-full flex flex-col gap-12 lg:flex-row lg:gap-8">
        {testimonies.map((testimony) => (
          <div
            className="relative w-full h-fit bg-blue-secondary text-blue-primary p-4 rounded-md space-y-4 drop-shadow-md lg:p-6"
            key={testimony.name}
          >
            <h3 className="font-bold lg:text-lg">{testimony.name}</h3>
            <p className="text-sm lg:text-base">{testimony.text}</p>
            <div className="absolute w-6 h-6 left-0 -bottom-5">
              <svg
                className="w-6 h-6 fill-red-500"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.90735e-06 17.25L1.50804e-06 -7.46338e-06L19.9186 -5.72205e-06L1.90735e-06 17.25Z"
                  className="fill-[#F1F6FF]"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimony;
