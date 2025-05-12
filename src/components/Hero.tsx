
import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, Search } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="bg-vigil-primary pt-20 relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')", 
          backgroundSize: "cover", 
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      ></div>
      
      <div className="section-container flex flex-col lg:flex-row items-center relative z-10">
        <div className="lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Property Fraud Prevention</span>
            <br /> <span className="text-vigil-accent">Through Real-Time Ownership Verification</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            The Vigil uses advanced AI to protect against property fraud by verifying ownership instantly across multiple data sources, creating an immutable audit trail for authorities.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-vigil-accent hover:bg-vigil-accent/90 text-white py-6 px-8 text-lg">
              Request Demo
            </Button>
            <Button variant="outline" className="border-white/60 text-white hover:bg-white/10 hover:text-white py-6 px-8 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
