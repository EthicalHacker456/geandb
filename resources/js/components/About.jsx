import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-3 py-12"
    >
      {/* Frosted Background Card */}
      <div className="
        bg-white/5 border border-white/10 backdrop-blur-md 
        rounded-2xl p-8 md:p-12 text-white
      ">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center">
          About GE&B
        </h2>

        {/* Image + Intro Row */}
        <div className="mt-10 flex flex-col md:flex-row items-center gap-10">

          {/* Left Image */}
          <div className="flex-1">
            <img
              src="/images/about_us.png"
              alt="About GE&B"
              className="rounded-xl w-full object-cover shadow-lg"
            />
          </div>

          {/* Right Text */}
          <div className="flex-1 text-white/80 text-lg leading-relaxed">
            <p>
              GE&B was created with one simple goal: to provide Australian businesses with exceptional uniforms without the usual compromises. Built on a strong personal partnership with a leading manufacturer in Pakistan, we combine international craftsmanship with Australian service and reliability.
            </p>

            <p className="mt-4">
              We follow core manufacturing principles that guide our quality
              and commitment:
            </p>

            <ul className="mt-4 space-y-2 text-lg text-white/90 ml-5 list-disc">
              <li>Top-Tier Manufacturing Services</li>
              <li>Quality with Consistency</li>
              <li>Modern, Innovative Management</li>
              <li>Sustainable, Eco-Friendly Production</li>
            </ul>
          </div>
        </div>

        {/* Mission */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold">Our Supplier</h3>
          <p className="text-white/80 mt-3 leading-relaxed text-lg">
            Our manufacturing partner has decades of experience producing high-performance apparel for global markets. This gives us access to premium materials, advanced production methods, and strict quality assurance — all while maintaining fair and competitive pricing.

          </p>
        </div>

        {/* Vision */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Our Vision</h3>
          <p className="text-white/80 mt-3 leading-relaxed text-lg">
            At GE&B, we treat every order like a long-term relationship. We work closely with our clients to understand their operational needs, design preferences, and branding requirements. From security apparel to specialty uniforms, every product is crafted with care and delivered with confidence.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Our Promise</h3>
          <p className="text-white/80 mt-3 leading-relaxed text-lg">
            Quality you can feel. Reliability you can trust. Service you will appreciate.          </p>
        </div>

      </div>
    </section>
  );
}
