const services = [
  {
    icon: "💼",
    title: "Wealth Management",
    description: "Comprehensive strategies to grow and protect your wealth for generations to come."
  },
  {
    icon: "🏖️",
    title: "Retirement Planning",
    description: "Plan your retirement with confidence and enjoy the lifestyle you've worked for."
  },
  {
    icon: "📈",
    title: "Investment Advisory",
    description: "Expert guidance on building a diversified portfolio aligned with your goals."
  },
  {
    icon: "🛡️",
    title: "Risk Management",
    description: "Protect your assets and minimize financial risks with strategic planning."
  },
  {
    icon: "🎓",
    title: "Education Planning",
    description: "Secure your children's educational future with smart savings strategies."
  },
  {
    icon: "💰",
    title: "Tax Planning",
    description: "Optimize your tax strategy to maximize returns and minimize liabilities."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial solutions designed to meet your unique needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-red/20 transition-colors duration-200">
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-black mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
