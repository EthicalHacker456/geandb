import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        {/* Left: logo */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-yellow-400 to-yellow-600 flex items-center justify-center font-bold text-black">
            GE&B
          </div>
          <div className="font-bold text-white text-lg">GE&B</div>
        </div>

        {/* Right: links */}
        <nav className="flex items-center gap-6 text-white">
          <a href="#home" className="hover:text-yellow-400">Home</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
          <button className="border border-white/20 rounded-md px-3 py-1 hover:bg-yellow-400 hover:text-black transition">
            Menu
          </button>
        </nav>
      </div>
    </header>
  );
}
