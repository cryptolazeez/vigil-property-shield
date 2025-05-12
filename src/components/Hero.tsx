
import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, Search } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-vigil-light pt-20">
      <div className="section-container flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Property Fraud Prevention</span>
            <br /> Through Real-Time Ownership Verification
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            The Vigil uses advanced AI to protect against property fraud by verifying ownership instantly across multiple data sources, creating an immutable audit trail for authorities.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-vigil-accent hover:bg-vigil-accent/90 text-white py-6 px-8 text-lg">
              Request Demo
            </Button>
            <Button variant="outline" className="border-vigil-primary text-vigil-primary hover:bg-vigil-primary hover:text-white py-6 px-8 text-lg">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="lg:w-1/2 lg:pl-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 relative">
            <div className="absolute -top-4 -right-4 bg-vigil-success text-white rounded-full p-3">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-vigil-primary">Secure Property Verification</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-vigil-light p-2 rounded-full">
                  <Search size={20} className="text-vigil-accent" />
                </div>
                <div>
                  <h4 className="font-semibold">Smart Data Scraping</h4>
                  <p className="text-gray-600">Real-time property data collection across multiple sources</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-vigil-light p-2 rounded-full">
                  <ShieldCheck size={20} className="text-vigil-accent" />
                </div>
                <div>
                  <h4 className="font-semibold">Multi-Source Validation</h4>
                  <p className="text-gray-600">Cross-reference ownership across databases for validity</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-vigil-light p-2 rounded-full">
                  <Lock size={20} className="text-vigil-accent" />
                </div>
                <div>
                  <h4 className="font-semibold">Secure Audit Trails</h4>
                  <p className="text-gray-600">Tamper-proof records for legal and law enforcement access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
