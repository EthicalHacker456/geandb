import "../css/app.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Menu, X } from "lucide-react";

import Carousel from "./components/Carousel";
import About from "./components/About";
import Specialization from "./components/Specialization";
import Services from "./components/Services";
import ContactCardAndForm from "./components/ContactCardAndForm";
import ProductsGrid from "./components/ProductsGrid";

import PrismBackground from "./components/PrismBackground";  // ✅ ADD THIS
import WhyChooseUs from "./components/WhyChooseUs";



function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen relative overflow-x-hidden text-white">
            {/* ✅ Background Image */}

            {/* <PrismBackground /> */}
            <div
                className="fixed inset-0 bg-cover bg-zoom bg-center z-0"
                style={{ backgroundImage: "url('/images/background.jpg')" }}
            ></div>

            {/* ✅ Blurred Overlay */}
            <div className="fixed inset-0 bg-black/10 backdrop-blur-xs z-10"></div>

            {/* ✅ App Content */}
            <div className="relative z-20">
                {/* Navbar */}
                <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black/10 border border-white/10 py-2">
                    <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
                        {/* Left: logo */}
                        <div className="flex items-center gap-3">
                            <img
                                src="/images/logo.jpeg"
                                alt="Logo"
                                className="h-40 w-40 object-cover"
                            />
                        </div>

                        {/* Right: Desktop Links */}
                        <nav className="hidden md:flex items-center gap-10 text-white text-xl me-6">
                            <a
                                href="#home"
                                className="hover:text-white hover:animate-[glow_1s_ease-in-out_infinite] transition duration-300"
                            >
                                Home
                            </a>
                            <a
                                href="#services"
                                className="hover:text-white hover:animate-[glow_1s_ease-in-out_infinite] transition duration-300"
                            >
                                Services
                            </a>
                            <a href="#about" 
                                className="hover:text-white hover:animate-[glow_1s_ease-in-out_infinite] transition duration-300">
                                About
                            </a>
                            
                            <a
                                href="#contact"
                                className="hover:text-white hover:animate-[glow_1s_ease-in-out_infinite] transition duration-300"
                            >
                                Contact
                            </a>
                        </nav>

                        {/* Mobile Hamburger Button */}
                        <button
                            className="md:hidden text-white"
                            onClick={() => setMenuOpen(true)}
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </header>

                {/* Mobile Slide Menu */}
                <div
                    className={`fixed inset-0 z-[9999] transition-all duration-300 ease-in-out ${
                        menuOpen ? "visible opacity-100" : "invisible opacity-0"
                    }`}
                >
                    {/* Floating Compact Panel */}
                    <div
                        className={`absolute top-6 right-2 rounded-md px-6 py-4 w-52 bg-white/4 backdrop-blur-sm border border-white/10 text-white transform transition-transform duration-300 ease-in-out ${
                            menuOpen
                                ? "translate-x-0 opacity-100"
                                : "translate-x-full opacity-0"
                        }`}
                    >
                        <div className="flex justify-end mb-4">
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-white hover:animate-[glow_1s_ease-in-out_infinite] transition duration-300"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        <div className="flex flex-col items-start gap-4 text-lg">
                            <a
                                href="#home"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-white hover:animate-[glow_1s_ease-in-out_infinite] transition duration-300"
                            >
                                Home
                            </a>
                            <a
                                href="#services"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-white hover:animate-[glow_1s_ease-in-out_infinite] transition duration-300"
                            >
                                Services
                            </a>
                            <a
                                href="#about"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-white hover:animate-[glow_1s_ease-in-out_infinite] transition duration-300"
                            >
                                About
                            </a>
                            <a
                                href="#contact"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-white hover:animate-[glow_1s_ease-in-out_infinite] transition duration-300"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <main className="pt-24">
                    <Carousel />
                    <ProductsGrid/>
                    <Services />
                    <WhyChooseUs/>
                    <About />
                    {/* <Specialization /> */}
                    <ContactCardAndForm />
                </main>

                {/* Footer */}
                <footer className="text-center py-6 text-white/60">
                    © {new Date().getFullYear()} GE&B — All rights reserved.
                </footer>
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
