"use client"

import {
  ContainerScroll,
  ContainerSticky,
  ProcessCard,
  ProcessCardBody,
  ProcessCardTitle,
} from "@/components/ui/process-timeline"

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Initial Consultation",
    description:
      "We start with a comprehensive discussion to understand your financial goals, current situation, and future aspirations. This personalized approach ensures we create strategies tailored specifically to your needs.",
  },
  {
    id: "process-2",
    title: "Strategic Planning",
    description:
      "Our experts analyze your financial landscape and create a customized plan. We examine your assets, liabilities, income streams, and risk tolerance to develop a comprehensive roadmap for your financial success.",
  },
  {
    id: "process-3",
    title: "Implementation",
    description:
      "We help you execute the plan with carefully selected investment strategies and financial products. Our team ensures smooth implementation while keeping you informed every step of the way.",
  },
  {
    id: "process-4",
    title: "Ongoing Support",
    description:
      "Regular reviews and adjustments ensure your plan stays aligned with your evolving goals and market conditions. We provide continuous guidance and adapt strategies as your life circumstances change.",
  },
]

export default function Process() {
  return (
    <ContainerScroll
      className="py-20 px-4 sm:px-6 lg:px-8 h-[300vh] bg-gradient-to-b from-white via-gray-50 to-white"
      id="process"
    >
      <div className="max-w-7xl mx-auto mb-32 space-y-4">
        <div className="text-center">
          <div className="inline-block mb-4">
            <span className="bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-sm font-medium">
              Our Process
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-black mb-4">
            How We Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our proven four-step process ensures your financial success
          </p>
        </div>
      </div>

      <ContainerSticky className="top-[45%] -translate-y-1/2 flex flex-nowrap px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full flex gap-4">
          {PROCESS_PHASES.map((phase, index) => (
            <ProcessCard
              key={phase.id}
              itemsLength={PROCESS_PHASES.length}
              index={index}
              className="min-w-[85%] sm:min-w-[70%] max-w-[85%] sm:max-w-[70%] rounded-2xl shadow-xl border-2 border-gray-200 bg-white"
            >
              <ProcessCardTitle className="border-r border-gray-200">
                <div className="rounded-full size-12 bg-gradient-to-br from-brand-red to-brand-red/80 text-white text-lg font-bold flex justify-center items-center shadow-md">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </ProcessCardTitle>
              <ProcessCardBody className="flex flex-col gap-6">
                <h3 className="text-2xl sm:text-3xl font-semibold leading-tight text-brand-black">
                  {phase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  {phase.description}
                </p>
              </ProcessCardBody>
            </ProcessCard>
          ))}
        </div>
      </ContainerSticky>
    </ContainerScroll>
  )
}
