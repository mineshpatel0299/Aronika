export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" data-aos="fade-up">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-6" data-aos="fade-up" data-aos-delay="100">
          Ready to Get Started?
        </h2>
        <p className="text-gray-600 mb-8 text-lg" data-aos="fade-up" data-aos-delay="150">
          Take the first step towards financial freedom. Schedule a free consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
          <a
            href="mailto:info@aronikafinancial.com"
            className="bg-brand-red text-white px-8 py-4 rounded-md hover:bg-brand-red/90 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
          >
            Contact Us
          </a>
          <a
            href="tel:+1234567890"
            className="border-2 border-brand-black text-brand-black px-8 py-4 rounded-md hover:bg-brand-black hover:text-white transition-all duration-200 font-medium"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
