import "../css/app.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";

import About from "./components/About";
import Services from "./components/Services";
import ContactCardAndForm from "./components/ContactCardAndForm";
import ProductsGrid from "./components/ProductsGrid";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
    return (
        <div className="min-h-screen relative overflow-x-hidden text-white">
            {/* Background Image */}
            <div
                className="fixed inset-0 bg-cover bg-zoom bg-center z-0"
                style={{ backgroundImage: "url('/images/background.jpg')" }}
            ></div>

            {/* Blurred Overlay */}
            <div className="fixed inset-0 bg-black/10 backdrop-blur-xs z-10"></div>

            {/* App Content */}
            <div className="relative z-20">
                {/* Navbar - Only One! */}
                <Navbar />

                {/* Main Content */}
                <main className="pt-24">
                    <Services />
                    <ProductsGrid />
                    <WhyChooseUs />
                    <About />
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