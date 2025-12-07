import React, { useState } from "react";
import axios from "axios";

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
      await axios.post("/api/contact", form);
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
            className="w-full p-4 mt-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40"
          />

          <input
            name="email"
            value={form.email}
            onChange={handle}
            placeholder="Your Email"
            required
            className="w-full p-4 mt-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handle}
            placeholder="Phone Number"
            className="w-full p-4 mt-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handle}
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-4 mt-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40"
          />

          <div className="mt-6 flex items-center">
            <button
              type="submit"
              className="geb-btn bg-gold px-6 py-3 rounded-lg text-black font-semibold hover:brightness-110 transition"
            >
              Send Message
            </button>

            {status === "sending" && (
              <span className="ml-4 text-white/80">Sending...</span>
            )}
            {status === "sent" && (
              <span className="ml-4 text-green-300">Sent</span>
            )}
            {status === "error" && (
              <span className="ml-4 text-red-400">Error</span>
            )}
          </div>
        </form>

        {/* RIGHT OWNER CARD */}
        <aside className="p-10 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
          <p className="text-white/90 mt-4 text-xl font-medium">
            Gohar Ejaz — Founder
          </p>

          <div className="mt-6 space-y-3 text-white/80 text-lg">
            <p>
              <span className="text-white font-semibold">Phone:</span> +61 452 359 786
            </p>
            <p>
              <span className="text-white font-semibold">Email:</span> Info@genb.com.au
            </p>
          </div>

          <p className="mt-8 text-white/60 text-base">
            Based in Australia — Shipping Across the Country.  
            Doing business since ancient times.  
            I have also done business with Ramses, the Pharaoh.
          </p>
        </aside>
      </div>
    </section>
  );
}
