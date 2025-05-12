
import React from "react";
import { Users, BadgeCheck, Scale, Home } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const useCasesList = [
  {
    id: 1,
    icon: <Scale size={40} className="text-vigil-accent mb-2" />,
    title: "Legal Professionals",
    description: "Streamline due diligence by instantly verifying property ownership during transactions, reducing risk and liability while accelerating the closing process.",
    benefits: ["Reduce title search time by 80%", "Minimize legal liability", "Increase client confidence"]
  },
  {
    id: 2,
    icon: <BadgeCheck size={40} className="text-vigil-accent mb-2" />,
    title: "Law Enforcement",
    description: "Access tamper-proof audit trails and ownership verification to investigate property fraud cases with greater speed and accuracy.",
    benefits: ["Expedite fraud investigations", "Access secure evidence", "Create court-admissible reports"]
  },
  {
    id: 3,
    icon: <Home size={40} className="text-vigil-accent mb-2" />,
    title: "Property Owners",
    description: "Protect your real estate investments with continuous monitoring and alerts for any unauthorized ownership change attempts.",
    benefits: ["Receive instant fraud alerts", "Verify property status", "Secure peace of mind"]
  },
  {
    id: 4,
    icon: <Users size={40} className="text-vigil-accent mb-2" />,
    title: "Financial Institutions",
    description: "Enhance mortgage and loan security by verifying property ownership status before finalizing transactions.",
    benefits: ["Minimize lending risk", "Streamline approval process", "Protect collateral integrity"]
  }
];

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="bg-vigil-light">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Real-World Use Cases</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Vigil serves multiple stakeholders in the property ecosystem, providing tailored solutions for their specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCasesList.map((useCase) => (
            <Card key={useCase.id} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-2">{useCase.icon}</div>
                <CardTitle className="text-xl font-bold">{useCase.title}</CardTitle>
                <CardDescription className="text-gray-600">{useCase.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-vigil-primary mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  {useCase.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1 text-vigil-accent">•</div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
