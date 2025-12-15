"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Aronika Financial transformed our retirement planning. Their expertise gave us the confidence we needed for our future.",
    by: "Rajesh Kumar, Business Owner",
    imgSrc: "https://i.pravatar.cc/150?img=12"
  },
  {
    tempId: 1,
    testimonial: "The investment strategies recommended have consistently outperformed our expectations. Highly professional team.",
    by: "Priya Sharma, Software Engineer",
    imgSrc: "https://i.pravatar.cc/150?img=5"
  },
  {
    tempId: 2,
    testimonial: "Their tax planning services saved us significantly. The team truly cares about client success.",
    by: "Amit Patel, Entrepreneur",
    imgSrc: "https://i.pravatar.cc/150?img=33"
  },
  {
    tempId: 3,
    testimonial: "Best financial advisory firm I've worked with. They make complex financial decisions simple and clear.",
    by: "Neha Gupta, Doctor",
    imgSrc: "https://i.pravatar.cc/150?img=9"
  },
  {
    tempId: 4,
    testimonial: "My portfolio has grown 40% since partnering with Aronika. Their market insights are invaluable.",
    by: "Vikram Singh, IT Professional",
    imgSrc: "https://i.pravatar.cc/150?img=14"
  },
  {
    tempId: 5,
    testimonial: "They helped us plan our daughter's education without stress. Forever grateful for their guidance!",
    by: "Anjali Reddy, Teacher",
    imgSrc: "https://i.pravatar.cc/150?img=10"
  },
  {
    tempId: 6,
    testimonial: "Took some convincing, but now that we're with Aronika, we're never going back. Best decision ever!",
    by: "Sanjay Mehta, Business Consultant",
    imgSrc: "https://i.pravatar.cc/150?img=7"
  },
  {
    tempId: 7,
    testimonial: "Their wealth management strategies helped us achieve financial independence 5 years early!",
    by: "Kavita Joshi, Marketing Director",
    imgSrc: "https://i.pravatar.cc/150?img=26"
  },
  {
    tempId: 8,
    testimonial: "Professional, transparent, and results-driven. Everything you want in a financial advisor.",
    by: "Rahul Verma, Architect",
    imgSrc: "https://i.pravatar.cc/150?img=15"
  },
  {
    tempId: 9,
    testimonial: "I switched 3 years ago and my returns have doubled. The expertise here is unmatched.",
    by: "Deepak Shah, Engineer",
    imgSrc: "https://i.pravatar.cc/150?img=13"
  },
  {
    tempId: 10,
    testimonial: "Finally found advisors who understand my goals and work tirelessly to achieve them!",
    by: "Pooja Nair, HR Manager",
    imgSrc: "https://i.pravatar.cc/150?img=24"
  },
  {
    tempId: 11,
    testimonial: "The personalized approach to financial planning is what sets them apart. Highly recommend!",
    by: "Arjun Desai, Lawyer",
    imgSrc: "https://i.pravatar.cc/150?img=8"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-brand-red text-white border-brand-red shadow-2xl"
          : "z-0 bg-white text-brand-black border-gray-200 hover:border-brand-red/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(0, 0, 0, 0.1)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
          backgroundColor: isCenter ? "rgba(255, 255, 255, 0.3)" : "#e5e7eb"
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: isCenter ? "3px 3px 0px rgba(255, 255, 255, 0.3)" : "3px 3px 0px #f3f4f6"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-medium mb-4",
        isCenter ? "text-white" : "text-brand-black"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-white/90" : "text-gray-600"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-gray-50"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-200 hover:bg-brand-red hover:text-white hover:border-brand-red",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-200 hover:bg-brand-red hover:text-white hover:border-brand-red",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
