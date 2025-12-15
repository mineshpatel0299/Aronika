export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
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
            <ul className="space-y-4">
              {[
                "Certified Financial Planners with proven track records",
                "Personalized strategies based on your goals",
                "Transparent pricing with no hidden fees",
              ].map((text, index) => (
                <li key={text} className="flex items-start gap-3" data-aos="fade-up" data-aos-delay={200 + index * 100}>
                  <span className="text-brand-red mt-1">✓</span>
                  <span className="text-gray-700">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
