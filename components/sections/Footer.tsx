export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-12 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div data-aos="fade-up" data-aos-delay="50">
            <h3 className="font-bold text-xl mb-4">
              Aronika <span className="text-brand-red">Financial</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner in financial success
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="150">
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Wealth Management</li>
              <li>Retirement Planning</li>
              <li>Investment Advisory</li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>info@aronikafinancial.com</li>
              <li>+1 (234) 567-8900</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm" data-aos="fade-up" data-aos-delay="250">
          <p>&copy; 2024 Aronika Financial. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
