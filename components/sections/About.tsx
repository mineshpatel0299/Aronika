"use client";

import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-brand-red/5 -z-10"></div>

      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-brand-red/10 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-gray-200/40 via-gray-100/20 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="bg-gradient-to-br from-brand-red to-brand-red/80 rounded-2xl p-12 text-white shadow-xl"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="space-y-6">
              <div className="text-5xl font-bold">25+</div>
              <p className="text-xl">Years of Excellence in Financial Advisory</p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div data-aos="fade-up" data-aos-delay="150">
                  <div className="text-3xl font-bold">500+</div>
                  <p className="text-sm opacity-90">Happy Clients</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="250">
                  <div className="text-3xl font-bold">₹2B+</div>
                  <p className="text-sm opacity-90">Assets Managed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6" data-aos="fade-left" data-aos-delay="150">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-black">
              Why Choose Aronika Financial?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              With over two decades of experience, we&apos;ve helped hundreds of clients achieve their
              financial dreams. Our personalized approach ensures that every strategy is tailored
              to your unique situation and goals.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Founded in 1999, Aronika Financial has grown into a trusted name in financial advisory,
              managing over ₹2 billion in assets with unwavering commitment to transparency,
              integrity, and client success.
            </p>
            <ul className="space-y-4">
              {[
                "SEBI-registered advisors with proven track records",
                "Personalized strategies based on your goals",
                "Transparent fee-only model with no hidden costs",
              ].map((text, index) => (
                <li key={text} className="flex items-start gap-3" data-aos="fade-up" data-aos-delay={200 + index * 100}>
                  <span className="text-brand-red mt-1">✓</span>
                  <span className="text-gray-700">{text}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-md hover:bg-brand-red/90 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
              >
                Learn More About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
