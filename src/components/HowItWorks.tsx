
import React from "react";
import { Search, Database, ShieldCheck, FileCheck } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <Search size={32} className="text-white" />,
    title: "Data Collection",
    description: "Our AI scans multiple public and private databases to gather comprehensive property ownership information."
  },
  {
    id: 2,
    icon: <Database size={32} className="text-white" />,
    title: "Cross-Validation",
    description: "The system cross-references data from various sources to identify inconsistencies or red flags."
  },
  {
    id: 3,
    icon: <ShieldCheck size={32} className="text-white" />,
    title: "Ownership Verification",
    description: "Advanced algorithms validate ownership status using multiple criteria and historical patterns."
  },
  {
    id: 4,
    icon: <FileCheck size={32} className="text-white" />,
    title: "Secure Reporting",
    description: "A comprehensive, tamper-proof verification report is generated with a complete audit trail."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-vigil-primary text-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            How The Vigil Works
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our technology combines AI-powered data collection with secure verification processes to provide reliable property ownership verification.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center text-center">
                <div className="bg-vigil-accent rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                  {step.icon}
                </div>
                <div className="bg-vigil-primary px-4">
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                <div className="mt-4 text-sm font-semibold text-vigil-accent">Step {index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
