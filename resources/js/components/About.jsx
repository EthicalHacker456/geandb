import React from "react";
import { Target, Eye, Heart, CheckCircle } from "lucide-react";

export default function About() {
  const principles = [
    "Top-Tier Manufacturing Services",
    "Quality with Consistency",
    "Modern, Innovative Management",
    "Sustainable, Eco-Friendly Production"
  ];

  const sections = [
    {
      title: "Our Supplier",
      icon: Target,
      content: "Our manufacturing partner has decades of experience producing high-performance apparel for global markets. This gives us access to premium materials, advanced production methods, and strict quality assurance — all while maintaining fair and competitive pricing.",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Our Vision",
      icon: Eye,
      content: "At GE&B, we treat every order like a long-term relationship. We work closely with our clients to understand their operational needs, design preferences, and branding requirements. From security apparel to specialty uniforms, every product is crafted with care and delivered with confidence.",
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      title: "Our Promise",
      icon: Heart,
      content: "Quality you can feel. Reliability you can trust. Service you will appreciate.",
      gradient: "from-yellow-500/10 to-orange-500/10"
    }
  ];

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 py-20"
    >
      {/* Main Container */}
      <div className="
        bg-white/5 border border-white/10 backdrop-blur-xl 
        rounded-3xl overflow-hidden shadow-2xl
      ">
        
        {/* Header */}
        <div className="relative bg-gradient-to-br from-white/5 to-transparent p-8 md:p-12 border-b border-white/10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              About GE&B
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
          </div>
        </div>

        {/* Image + Intro Section */}
        <div className="p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Left: Image */}
            <div className="flex-1 w-full">
              <div className="relative group">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-blue-400/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                
                {/* Image */}
                <img
                  src="/images/about_us.png"
                  alt="About GE&B"
                  className="relative rounded-2xl w-full object-cover shadow-2xl border border-white/10 
                           group-hover:scale-[1.02] transition-transform duration-500"
                />
                
                {/* Overlay badge */}
                <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3">
                  <p className="text-white font-bold text-lg">Since 2024</p>
                  <p className="text-white/60 text-sm">Quality & Excellence</p>
                </div>
              </div>
            </div>

            {/* Right: Intro Text */}
            <div className="flex-1 text-white space-y-6">
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-white/90 text-lg leading-relaxed">
                  GE&B was created with one simple goal: to provide Australian businesses with exceptional uniforms without the usual compromises. Built on a strong personal partnership with a leading manufacturer in Pakistan, we combine international craftsmanship with Australian service and reliability.
                </p>
              </div>

              <div>
                <p className="text-white/80 text-base mb-4">
                  We follow core manufacturing principles that guide our quality and commitment:
                </p>

                <div className="space-y-3">
                  {principles.map((principle, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-3 
                               hover:bg-white/10 hover:border-yellow-400/30 transition-all duration-300 group"
                    >
                      <CheckCircle className="text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                      <span className="text-white/90 text-base">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Three Cards Section */}
        <div className="px-8 md:px-12 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div 
                  key={index}
                  className={`
                    relative overflow-hidden
                    bg-gradient-to-br ${section.gradient}
                    border border-white/10 backdrop-blur-sm
                    rounded-2xl p-6
                    hover:scale-[1.02] hover:border-white/20
                    transition-all duration-300
                    group
                  `}
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-yellow-400 w-6 h-6" strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {section.title}
                    </h3>

                    {/* Content */}
                    <p className="text-white/80 leading-relaxed text-base">
                      {section.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="relative bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-yellow-500/10 border-t border-white/10 p-8 md:p-12">
          <div className="text-center">
            <div className="inline-block mb-4">
              <Heart className="text-yellow-400 w-12 h-12 animate-pulse" />
            </div>
            <blockquote className="text-2xl md:text-3xl font-bold text-white mb-2">
              "Quality you can feel. Reliability you can trust."
            </blockquote>
            <p className="text-white/60 text-lg">
              Service you will appreciate.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}