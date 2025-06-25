
const LogoSlider = () => {
  // Company logos - using actual logo paths (original colors)
  const logos = [
    { name: "Google", src: "/logos/google.svg" },
    { name: "Amazon", src: "/logos/amazon.svg" },
    { name: "Facebook", src: "/logos/facebook.svg" },
    { name: "Microsoft", src: "/logos/microsoft.svg" },
    { name: "Apple", src: "/logos/apple.svg" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
            With Great Outcomes.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our customers have gotten offers from awesome companies.
          </p>
        </div>

        {/* Logo marquee container */}
        <div className="relative">
          <div className="flex animate-marquee hover:pause-marquee">
            {/* First set of logos */}
            <div className="flex items-center gap-10 shrink-0">
              {logos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center justify-center w-32 h-16 opacity-75 hover:opacity-100 transition-all duration-300"
                >
                  <img
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-10 shrink-0 ml-10">
              {logos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center justify-center w-32 h-16 opacity-75 hover:opacity-100 transition-all duration-300"
                >
                  <img
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-blue-50 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
