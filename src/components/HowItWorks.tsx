
import React from "react";
import { Search, Database, ShieldCheck, FileCheck } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <Search size={32} className="text-white" />,
    title: "Data Collection",
    description: "Our AI scans multiple public and private databases to gather comprehensive property ownership information.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    icon: <Database size={32} className="text-white" />,
    title: "Cross-Validation",
    description: "The system cross-references data from various sources to identify inconsistencies or red flags.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    icon: <ShieldCheck size={32} className="text-white" />,
    title: "Ownership Verification",
    description: "Advanced algorithms validate ownership status using multiple criteria and historical patterns.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    icon: <FileCheck size={32} className="text-white" />,
    title: "Secure Reporting",
    description: "A comprehensive, tamper-proof verification report is generated with a complete audit trail.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-vigil-primary text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')", 
          backgroundSize: "cover", 
          backgroundPosition: "center" 
        }}
      ></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            How The Vigil Works
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our technology combines AI-powered data collection with secure verification processes to provide reliable property ownership verification.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-vigil-accent hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className="flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative mb-6 overflow-hidden rounded-lg w-full h-40 group">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vigil-primary via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <div className="bg-vigil-accent rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                      {step.icon}
                    </div>
                  </div>
                </div>
                <div className="bg-vigil-primary px-4">
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                <div className="mt-4 text-sm font-semibold text-vigil-accent animate-pulse">Step {index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
