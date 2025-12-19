import React, { useState } from "react";
import axios from "axios";
import { Send } from "lucide-react";

export default function ContactCardAndForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handle = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await axios.post("/contact", form);
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-3 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT FORM */}
        <form
          onSubmit={submit}
          className="p-10 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg"
        >
          <h3 className="text-white text-3xl font-semibold mb-8">
            Contact GE&B
          </h3>

          <input
            name="name"
            value={form.name}
            onChange={handle}
            placeholder="Your Name"
            required
            className="w-full p-4 mt-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition"
          />

          <input
            name="email"
            value={form.email}
            onChange={handle}
            placeholder="Your Email"
            required
            className="w-full p-4 mt-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handle}
            placeholder="Phone Number"
            className="w-full p-4 mt-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handle}
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-4 mt-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition"
          />

          <div className="mt-6 flex items-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="
                group relative overflow-hidden
                bg-gradient-to-br from-amber-400/80 via-yellow-300/70 to-orange-400/80
                backdrop-blur-xl
                px-8 py-4 rounded-2xl
                text-white font-semibold text-lg
                border border-white/30
                shadow-[0_8px_32px_0_rgba(251,191,36,0.35),inset_0_1px_0_0_rgba(255,255,255,0.5)]
                transition-all duration-500
                hover:shadow-[0_8px_40px_0_rgba(251,191,36,0.5),inset_0_1px_0_0_rgba(255,255,255,0.6)]
                hover:scale-[1.02]
                hover:border-white/40
                disabled:opacity-70 disabled:cursor-not-allowed
                flex items-center gap-2
                before:absolute before:inset-0 
                before:bg-gradient-to-br before:from-white/40 before:via-transparent before:to-transparent
                before:rounded-2xl before:opacity-0 before:transition-opacity before:duration-500
                hover:before:opacity-100
              "
            >
              {/* Glass reflection */}
              <span className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-2xl"></span>
              
              {/* Animated shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 skew-x-12"></span>
              
              <span className="relative z-10 drop-shadow-sm">Send Message</span>
              <Send className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 drop-shadow-sm" />
            </button>

            {status === "sending" && (
              <span className="ml-4 text-white/80 animate-pulse">Sending...</span>
            )}
            {status === "sent" && (
              <span className="ml-4 text-green-300 font-semibold">✓ Sent Successfully!</span>
            )}
            {status === "error" && (
              <span className="ml-4 text-red-400 font-semibold">✗ Error sending</span>
            )}
          </div>
        </form>

        {/* RIGHT OWNER CARD */}
        <aside className="p-10 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
          <p className="text-white/90 mt-4 text-xl font-medium">
            Gohar Ejaz
          </p>

          <div className="mt-6 space-y-3 text-white/80 text-lg">
            <p>
              <span className="text-white font-semibold">Phone:</span> +61 413 315 153
            </p>
            <p>
              <span className="text-white font-semibold">Email:</span> Info@genb.com.au
            </p>
          </div>

          <p className="mt-8 text-white/60 text-base">
            Based in Australia — Shipping Across the Country.  
          </p>

          {/* Inspirational Quote Section */}
          {/* <div className="mt-10 pt-8 border-t border-white/10">
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-white/90 text-lg italic leading-relaxed">
                "Quality is not an act, it is a habit. We don't just supply uniforms — we build lasting partnerships founded on trust, excellence, and unwavering commitment to your success."
              </p>
              <p className="text-white/60 text-sm mt-4 text-right">
                — Gohar Ejaz
              </p>
            </div>
          </div> */}

          {/* <p className="mt-6 text-white/70 text-base leading-relaxed">
            From our family to yours, we're dedicated to delivering uniforms that empower your team and reflect the pride of your organization.
          </p> */}
        </aside>
      </div>
    </section>
  );
}