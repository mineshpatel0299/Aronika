import Image from "next/image";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#process", label: "Our Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const services = [
  "Wealth Management",
  "Retirement Planning",
  "Investment Advisory",
  "Business Consulting",
  "Tax Strategy",
];

const contactDetails = [
  { icon: Mail, label: "info@aronikafinancial.com" },
  { icon: Phone, label: "+1 (234) 567-8900" },
  { icon: MapPin, label: "120 Market Street, San Francisco" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer
      className="bg-brand-black text-white"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <div className="h-full w-full bg-gradient-to-br from-brand-black via-brand-black/90 to-brand-black" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">
                Ready to invest smarter?
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                Schedule a strategic wealth session with our advisors
              </h3>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white transition hover:border-brand-gold hover:bg-brand-gold hover:text-brand-black"
            >
              Book Consultation
              <ArrowUpRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
            <div className="space-y-6">
              <Image
                src="/logow.png"
                alt="Aronika Financial logo"
                width={160}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <p className="text-base text-gray-300">
                Aronika crafts resilient portfolios for visionary founders and
                modern families. We blend smart automation with deep advisory
                expertise to protect every stage of your wealth journey.
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-brand-gold hover:bg-brand-gold/15 hover:text-white"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                <ul className="mt-4 space-y-2 text-gray-400">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="inline-flex items-center gap-2 text-sm transition hover:text-white"
                      >
                        <span className="h-px w-6 bg-brand-gold/40" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Signature Services
                </h4>
                <ul className="mt-4 space-y-2 text-gray-400">
                  {services.map((service) => (
                    <li key={service} className="text-sm">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Get In Touch
                </h4>
                <ul className="mt-4 space-y-3 text-sm text-gray-300">
                  {contactDetails.map((detail) => (
                    <li key={detail.label} className="flex items-start gap-3">
                      <detail.icon className="mt-0.5 h-4 w-4 text-brand-gold" />
                      {detail.label}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Market Pulse
                </h4>
                <p className="mt-2 text-sm text-gray-400">
                  Weekly insights on wealth trends, tax moves, and private
                  opportunities.
                </p>
                <form className="mt-4 flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="h-11 flex-1 rounded-full border border-white/10 bg-transparent px-4 text-sm text-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-brand-gold px-5 text-sm font-semibold text-brand-black transition hover:bg-white"
                  >
                    Join
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Aronika Financial. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
