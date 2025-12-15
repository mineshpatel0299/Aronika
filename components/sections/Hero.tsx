export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-sm font-medium">
                Trusted by 500+ Clients
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
              Your Financial Future,{" "}
              <span className="text-brand-red">Secured</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Expert financial advisory services tailored to help you achieve your goals.
              From wealth management to retirement planning, we're here to guide your journey.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-4">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-brand-black">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-brand-black">₹2B+</div>
                <div className="text-sm text-gray-600">Assets Managed</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-brand-black">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#consultation"
                className="bg-brand-red text-white px-8 py-3.5 rounded-md hover:bg-brand-red/90 transition-all duration-200 font-medium text-center shadow-md hover:shadow-lg"
              >
                Schedule Consultation
              </a>
              <a
                href="#services"
                className="border-2 border-brand-black text-brand-black px-8 py-3.5 rounded-md hover:bg-brand-black hover:text-white transition-all duration-200 font-medium text-center"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative hidden lg:block">
            {/* Main Illustration Container */}
            <div className="relative">
              {/* Floating Cards with Icons */}
              <div className="relative z-10 space-y-6">
                {/* Growth Chart Card */}
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 ml-auto max-w-md animate-float">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">Portfolio Growth</div>
                      <div className="text-2xl font-bold text-brand-black">+24.5%</div>
                      <div className="text-xs text-green-600 mt-1">↑ This quarter</div>
                    </div>
                  </div>
                </div>

                {/* Financial Planning Card */}
                <div className="bg-gradient-to-br from-brand-red to-brand-red/80 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300 max-w-sm animate-float-delayed">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm opacity-90 mb-1">Goals Achieved</div>
                      <div className="text-2xl font-bold">12/15</div>
                      <div className="w-full bg-white/20 h-2 rounded-full mt-2">
                        <div className="w-4/5 bg-white h-2 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Savings Card */}
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 max-w-xs ml-auto animate-float">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">Monthly Savings</div>
                      <div className="text-2xl font-bold text-brand-black">₹12,450</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-brand-red/20 rounded-full -z-10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-gray-200 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
