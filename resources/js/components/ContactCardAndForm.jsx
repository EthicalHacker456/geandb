import React, { useState } from "react";
import { Send, Mail, Phone, MapPin, Clock, CheckCircle, XCircle, Loader } from "lucide-react";

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
      // Get CSRF token from meta tag or cookie
      let csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
      
      // If not in meta tag, try to get from cookie
      if (!csrfToken) {
        const cookies = document.cookie.split(';');
        const xsrfCookie = cookies.find(c => c.trim().startsWith('XSRF-TOKEN='));
        if (xsrfCookie) {
          csrfToken = decodeURIComponent(xsrfCookie.split('=')[1]);
        }
      }
      
      const response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrfToken || "",
          "X-XSRF-TOKEN": csrfToken || "",
          "Accept": "application/json",
        },
        credentials: 'same-origin',
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus(null), 5000);
      } else {
        console.error('Response error:', response.status, response.statusText);
        setStatus("error");
        setTimeout(() => setStatus(null), 5000);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setStatus("error");
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+61 413 315 153",
      href: "tel:+61413315153",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Mail,
      label: "Email",
      value: "Info@genb.com.au",
      href: "mailto:Info@genb.com.au",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sydney, Australia",
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 py-20">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full mb-6" />
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Ready to elevate your team's appearance? Let's discuss your uniform needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT: CONTACT FORM */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 flex items-center justify-center">
              <Send className="text-yellow-400 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold">Send Message</h3>
              <p className="text-white/60 text-sm">We'll respond within 24 hours</p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Name Input */}
            <div className="group">
              <label className="block text-white/80 text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handle}
                placeholder="John Smith"
                required
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 
                         focus:outline-none focus:border-yellow-400/50 focus:bg-white/10 
                         transition-all duration-300"
              />
            </div>

            {/* Email Input */}
            <div className="group">
              <label className="block text-white/80 text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handle}
                placeholder="john@company.com"
                required
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 
                         focus:outline-none focus:border-yellow-400/50 focus:bg-white/10 
                         transition-all duration-300"
              />
            </div>

            {/* Phone Input */}
            <div className="group">
              <label className="block text-white/80 text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handle}
                placeholder="+61 4XX XXX XXX"
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 
                         focus:outline-none focus:border-yellow-400/50 focus:bg-white/10 
                         transition-all duration-300"
              />
            </div>

            {/* Message Textarea */}
            <div className="group">
              <label className="block text-white/80 text-sm font-medium mb-2">
                Your Message *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handle}
                rows={5}
                placeholder="Tell us about your uniform requirements..."
                required
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 
                         focus:outline-none focus:border-yellow-400/50 focus:bg-white/10 
                         transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={submit}
              disabled={status === "sending"}
              className="w-full px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 
                       text-white font-semibold rounded-xl transition-all duration-300 
                       hover:shadow-lg hover:shadow-yellow-500/50 hover:scale-[1.02] active:scale-95
                       disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                       flex items-center justify-center gap-3"
            >
              {status === "sending" ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>

            {/* Status Messages */}
            {status === "sent" && (
              <div className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-400/30 rounded-xl animate-fadeIn">
                <CheckCircle className="text-green-400 w-5 h-5 flex-shrink-0" />
                <p className="text-green-300 font-medium">Message sent successfully! We'll be in touch soon.</p>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-400/30 rounded-xl animate-fadeIn">
                <XCircle className="text-red-400 w-5 h-5 flex-shrink-0" />
                <p className="text-red-300 font-medium">Failed to send message. Please try again.</p>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: CONTACT INFO */}
        <div className="space-y-8">
          
          {/* Owner Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white text-2xl font-bold">
                GE
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold">Gohar Ejaz</h3>
                <p className="text-white/60">Founder & Director</p>
              </div>
            </div>

            <p className="text-white/80 text-base leading-relaxed mb-6">
              Direct contact with the owner ensures personalized service and attention to every detail of your order.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href || '#'}
                    className={`
                      group flex items-center gap-4 p-4 rounded-xl
                      bg-gradient-to-br ${info.gradient}
                      border border-white/10 backdrop-blur-sm
                      hover:border-white/20 hover:scale-[1.02]
                      transition-all duration-300
                      ${info.href ? 'cursor-pointer' : 'cursor-default'}
                    `}
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-medium">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Business Hours Card */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/20 border border-yellow-400/30 flex items-center justify-center">
                <Clock className="text-yellow-400 w-5 h-5" />
              </div>
              <h4 className="text-white text-xl font-bold">Business Hours</h4>
            </div>

            <div className="space-y-3 text-white/80">
              <div className="flex justify-between items-center">
                <span>Monday - Friday</span>
                <span className="font-semibold text-white">9:00 AM - 6:00 PM</span>
              </div>
              <div className="w-full h-px bg-white/10" />
              <div className="flex justify-between items-center">
                <span>Saturday</span>
                <span className="font-semibold text-white">10:00 AM - 4:00 PM</span>
              </div>
              <div className="w-full h-px bg-white/10" />
              <div className="flex justify-between items-center">
                <span>Sunday</span>
                <span className="font-semibold text-red-400">Closed</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}