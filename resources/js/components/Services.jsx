import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const services = [
    {
      title: "Apparel",
      image: "/images/apparel_service.png",
      desc: "Premium apparel including shirts, jackets, hoodies, and custom branded wear — crafted for comfort, durability and style.",
      gradient: "from-blue-500/20 to-purple-500/20",
      accentColor: "border-blue-400/50"
    },
    {
      title: "Uniforms",
      image: "/images/uniform_service.png",
      desc: "Corporate, school, hospitality, and industrial uniforms designed with precision, comfort, and long-lasting material quality.",
      gradient: "from-emerald-500/20 to-teal-500/20",
      accentColor: "border-emerald-400/50"
    },
    {
      title: "Tactical Gear",
      image: "/images/tactical_service.png",
      desc: "High-performance tactical clothing and protective gear built for security teams, field operations, and demanding environments.",
      gradient: "from-orange-500/20 to-red-500/20",
      accentColor: "border-orange-400/50"
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Swipe handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const swipeThreshold = 50;
    const swipeDistance = touchStart - touchEnd;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        // Swiped left - next slide
        nextSlide();
      } else {
        // Swiped right - previous slide
        prevSlide();
      }
    }
    
    setIsDragging(false);
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e) => {
    setTouchStart(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    const swipeThreshold = 50;
    const swipeDistance = touchStart - touchEnd;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    setIsDragging(false);
    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTouchStart(0);
      setTouchEnd(0);
    }
  };

  return (
    <section id="services" className="max-w-7xl mx-auto px-4 py-20">
      
      {/* Title */}
      <h3 className="text-5xl md:text-6xl font-bold text-center mb-16 text-white">
        Our Services
      </h3>

      {/* Carousel Wrapper */}
      <div className="relative">
        
        {/* Main Carousel Card */}
        <div 
          className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          
          <div className="relative h-[600px] md:h-[500px]">
            {services.map((service, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ${
                  i === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : i < currentIndex 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="flex flex-col md:flex-row h-full">
                  
                  {/* LEFT: Image Section - 50% */}
                  <div className={`relative w-full md:w-1/2 h-1/2 md:h-full bg-gradient-to-br ${service.gradient} flex items-center justify-center overflow-hidden group`}>
                    
                    {/* Animated background circles */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />
                      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-700" />
                    </div>

                    {/* Large Image */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
                        style={{ objectPosition: 'center 20%' }}
                      />
                    </div>

                    {/* Slide Number Badge */}
                    <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full border border-white/40 text-white font-bold text-lg">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* RIGHT: Content Section - 50% */}
                  <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center p-8 md:p-16 text-white">
                    
                    {/* Category Tag */}
                    <div className={`inline-block self-start mb-6 px-4 py-2 rounded-full border ${service.accentColor} bg-white/5 backdrop-blur-sm text-sm font-medium`}>
                      Service
                    </div>

                    {/* Title */}
                    <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                      {service.title}
                    </h4>

                    {/* Description */}
                    <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
                      {service.desc}
                    </p>

                    {/* Decorative line */}
                    <div className={`w-24 h-1 rounded-full bg-gradient-to-r ${service.gradient.replace('/20', '/80')}`} />
                    
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-3">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className="group relative"
                aria-label={`Go to slide ${i + 1}`}
              >
                <div className={`transition-all duration-300 ${
                  i === currentIndex
                    ? "w-16 h-4 bg-white rounded-full"
                    : "w-4 h-4 bg-white/30 rounded-full hover:bg-white/50"
                }`} />
                {i === currentIndex && (
                  <div className="absolute inset-0 bg-white/50 rounded-full blur-md" />
                )}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

        </div>

        {/* Service Names Below */}
        <div className="flex justify-center items-center gap-8 mt-8 text-white/60 text-sm font-medium">
          {services.map((service, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`transition-all duration-300 hover:text-white ${
                i === currentIndex ? 'text-white scale-110' : ''
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

      </div>

    </section>
  );
}