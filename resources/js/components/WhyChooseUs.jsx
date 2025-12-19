import React from "react";
import { CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Premium Quality Materials",
      description: "We use high-grade fabrics, reinforced stitching, and strict production standards that match global uniform brands."
    },
    {
      title: "Reliable Supply Chain",
      description: "Because we work directly with a trusted international manufacturer, we guarantee consistency, speed, and no-stress production."
    },
    {
      title: "Competitive Pricing",
      description: "You receive top-tier quality at prices below traditional distributors — no middlemen, no hidden costs."
    },
    {
      title: "Australian-Based Service",
      description: "Local communication, fast response times, and professional support from Sydney."
    },
    {
      title: "Customization Options",
      description: "Logos, embroidery, exact colour matching, and product adjustments — tailored to your company's brand."
    },
    {
      title: "No Compromises, No Headaches",
      description: "We manage the entire process so you can focus on your operations."
    }
  ];

  return (
    <section
      id="why-choose-us"
      className="max-w-7xl mx-auto px-3 py-12"
    >
      {/* Frosted Background Card */}
      <div className="
        bg-white/5 border border-white/10 backdrop-blur-md 
        rounded-2xl p-8 md:p-12 text-white
      ">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose GE&B
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex gap-4 items-start"
            >
              {/* Check Icon */}
              <div className="flex-shrink-0 mt-1">
                <CheckCircle 
                  className="text-green-400" 
                  size={24} 
                  strokeWidth={2.5}
                />
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}