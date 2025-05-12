
import React from "react";
import { Shield, Database, Search, FileSearch, Lock, Globe } from "lucide-react";

const featuresList = [
  {
    id: 1,
    icon: <Search size={40} className="text-vigil-accent mb-4" />,
    title: "Smart Data Scraping",
    description: "Automated real-time collection of property data from multiple trusted sources ensuring comprehensive coverage."
  },
  {
    id: 2,
    icon: <Database size={40} className="text-vigil-accent mb-4" />,
    title: "Multi-Source Validation",
    description: "Cross-reference ownership information across various databases to ensure validity and catch inconsistencies."
  },
  {
    id: 3,
    icon: <Lock size={40} className="text-vigil-accent mb-4" />,
    title: "Secure Audit Trails",
    description: "Tamper-proof record keeping with cryptographic verification for legal and law enforcement requirements."
  },
  {
    id: 4,
    icon: <FileSearch size={40} className="text-vigil-accent mb-4" />,
    title: "Instant Verification",
    description: "Real-time ownership verification with detailed reports generated in seconds rather than days or weeks."
  },
  {
    id: 5,
    icon: <Shield size={40} className="text-vigil-accent mb-4" />,
    title: "Fraud Alert System",
    description: "Proactive monitoring with instant alerts when suspicious ownership changes or patterns are detected."
  },
  {
    id: 6,
    icon: <Globe size={40} className="text-vigil-accent mb-4" />,
    title: "Jurisdictional Coverage",
    description: "Extensive coverage across multiple jurisdictions and property registries for comprehensive protection."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Vigil combines advanced AI technology with comprehensive data analysis to provide robust property fraud prevention.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature) => (
            <div key={feature.id} className="feature-card flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
