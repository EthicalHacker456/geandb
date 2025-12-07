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
              Our manufacturing journey began decades ago, shaped by strong
              international collaborations that helped define our values of
              integrity, precision, and innovation. Today, GE&B delivers
              high-performance Tactical Gear, Protective Wear, Sportswear, and
              Premium Apparel across Australia and beyond.
            </p>

            <p className="mt-4">
              We follow core manufacturing principles that guide our quality
              and commitment:
            </p>

            <ul className="mt-4 space-y-2 text-lg text-white/90 ml-5 list-disc">
              <li><strong>T</strong>: Top-Tier Manufacturing Services</li>
              <li><strong>Q</strong>: Quality with Consistency</li>
              <li><strong>M</strong>: Modern, Innovative Management</li>
              <li><strong>S</strong>: Sustainable, Eco-Friendly Production</li>
            </ul>
          </div>
        </div>

        {/* Mission */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold">Our Mission</h3>
          <p className="text-white/80 mt-3 leading-relaxed text-lg">
            To deliver premium-grade tactical and sportswear manufacturing
            solutions with unmatched quality, consistency, and customization —
            empowering brands, athletes, and industries with durable,
            performance-ready products designed for real-world use.
          </p>
        </div>

        {/* Vision */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Our Vision</h3>
          <p className="text-white/80 mt-3 leading-relaxed text-lg">
            To become a global benchmark in Tactical Gear, Protective Wear,
            and Sportswear manufacturing — leveraging technology, craftsmanship,
            and long-term partnerships built on value, integrity, and mutual
            growth.
          </p>
        </div>

      </div>
    </section>
  );
}
