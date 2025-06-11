import { useState } from "react";

function Process() {
  const [openStep, setOpenStep] = useState<number | null>(null);

  const steps = [
    {
      title: "Consultation",
      description: "We meet to understand your goals, brand, and what kind of website you need.",
    },
    {
      title: "Proposal & Agreement",
      description: "You receive a tailored proposal outlining scope, timeline, pricing as well as important details.",
    },
    {
      title: "Planning & Setup",
      description: "We gather assets, set up hosting, and create a project roadmap.",
    },
    {
      title: "Design/Development Phase",
      description: "Your website comes to life through design, coding, and content integration and much hard work.",
    },
  ];

  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };

  return (
    <>
      <h1 className="cinzel-font text-center mt-10 pb-20">Our process to production:</h1>
      <div className="grid grid-cols-1 justify-items-center mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="w-[90%] max-w-[90vh] mb-9 border border-white rounded-md overflow-hidden"
          >
            <button
              className="w-full !bg-black flex !text-4xl justify-between items-center px-5 py-7 text-left bg-black text-white cinzel-font"
              onClick={() => toggleStep(index)}
            >
              <span>{step.title}</span>
              <span className="text-2xl">{openStep === index ? "▲" : "▼"}</span>
            </button>
            {openStep === index && (
              <div className="px-5 py-3 bg-black text-white text-sm">
                {step.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Process;
