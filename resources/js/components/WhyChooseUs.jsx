import React from "react";
import { CheckCircle, Award, TrendingUp, Shield, Users, Zap, Star } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Premium Quality Materials",
      description: "We use high-grade fabrics, reinforced stitching, and strict production standards that match global uniform brands.",
      icon: Award,
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400"
    },
    {
      title: "Reliable Supply Chain",
      description: "Because we work directly with a trusted international manufacturer, we guarantee consistency, speed, and no-stress production.",
      icon: TrendingUp,
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400"
    },
    {
      title: "Competitive Pricing",
      description: "You receive top-tier quality at prices below traditional distributors — no middlemen, no hidden costs.",
      icon: Star,
      gradient: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-400"
    },
    {
      title: "Australian-Based Service",
      description: "Local communication, fast response times, and professional support from Sydney.",
      icon: Shield,
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400"
    },
    {
      title: "Customization Options",
      description: "Logos, embroidery, exact colour matching, and product adjustments — tailored to your company's brand.",
      icon: Zap,
      gradient: "from-indigo-500/20 to-blue-500/20",
      iconColor: "text-indigo-400"
    },
    {
      title: "No Compromises, No Headaches",
      description: "We manage the entire process so you can focus on your operations.",
      icon: Users,
      gradient: "from-red-500/20 to-rose-500/20",
      iconColor: "text-red-400"
    }
  ];

  return (
    <section
      id="why-choose-us"
      className="max-w-7xl mx-auto px-4 py-20"
    >
      {/* Frosted Background Card */}
      <div className="
        bg-white/5 border border-white/10 backdrop-blur-xl 
        rounded-3xl p-8 md:p-16 text-white shadow-2xl
      ">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Why Choose GE&B
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
          <p className="text-white/60 text-lg mt-6 max-w-2xl mx-auto">
            Six compelling reasons to partner with us for your uniform needs
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className={`
                  group relative overflow-hidden
                  bg-gradient-to-br ${feature.gradient}
                  border border-white/10 backdrop-blur-sm
                  rounded-2xl p-6
                  hover:scale-[1.02] hover:border-white/20
                  transition-all duration-300
                  hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]
                `}
              >
                {/* Animated background glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`
                    inline-flex items-center justify-center
                    w-14 h-14 rounded-xl
                    bg-white/10 backdrop-blur-sm
                    border border-white/20
                    mb-4
                    group-hover:scale-110 group-hover:rotate-3
                    transition-transform duration-300
                  `}>
                    <Icon className={`${feature.iconColor} w-7 h-7`} strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed text-sm">
                    {feature.description}
                  </p>

                  {/* Number badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-xs font-bold text-white/50">
                    {index + 1}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-white/60 text-lg mb-6">
            Ready to experience the GE&B difference?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 
                     text-white font-semibold rounded-xl transition-all duration-300 
                     hover:shadow-lg hover:shadow-yellow-500/50 hover:scale-105 active:scale-95"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}