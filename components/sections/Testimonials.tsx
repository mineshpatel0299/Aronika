import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="inline-block mb-4" data-aos="zoom-in" data-aos-delay="150">
            <span className="bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-sm font-medium">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4" data-aos="fade-up" data-aos-delay="200">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="250">
            Don&apos;t just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="w-full" data-aos="fade-up" data-aos-delay="300">
          <StaggerTestimonials />
        </div>
      </div>
    </section>
  );
}
