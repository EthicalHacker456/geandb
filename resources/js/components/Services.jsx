import React from "react";

export default function Services() {
  const services = [
    {
      title: "Apparel",
      image: "/images/apparel_service.png",
      desc: "Premium apparel including shirts, jackets, hoodies, and custom branded wear — crafted for comfort, durability and style.",
    },
    {
      title: "Uniforms",
      image: "/images/uniform_service.png",
      desc: "Corporate, school, hospitality, and industrial uniforms designed with precision, comfort, and long-lasting material quality.",
    },
    {
      title: "Tactical Gear",
      image: "/images/tactical_service.png",
      desc: "High-performance tactical clothing and protective gear built for security teams, field operations, and demanding environments.",
    },
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto px-3 py-12">
      
      {/* Frosted Background Container */}
      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 text-white">

        <h3 className="text-3xl font-bold text-center">Our Services</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

          {services.map((service, i) => (
            <div
              key={i}
              className="
                bg-white/5 border border-white/10 backdrop-blur-sm
                rounded-xl overflow-hidden shadow-lg 
                hover:scale-[1.05] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]
                transition duration-300
              "
            >
              {/* Image */}
              <div className="h-52 w-full bg-black/20 flex justify-center items-center overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain scale-360 translate-y-44"
                />
              </div>

              {/* Text */}
              <div className="p-5">
                <h4 className="text-xl font-semibold">{service.title}</h4>
                <p className="text-white/70 text-sm mt-3 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
