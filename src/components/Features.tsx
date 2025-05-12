
import React from "react";
import { Shield, Database, Search, FileSearch, Lock, Globe } from "lucide-react";

const featuresList = [
  {
    id: 1,
    icon: <Search size={40} className="text-vigil-accent mb-4" />,
    title: "Smart Data Scraping",
    description: "Automated real-time collection of property data from multiple trusted sources ensuring comprehensive coverage.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    icon: <Database size={40} className="text-vigil-accent mb-4" />,
    title: "Multi-Source Validation",
    description: "Cross-reference ownership information across various databases to ensure validity and catch inconsistencies.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    icon: <Lock size={40} className="text-vigil-accent mb-4" />,
    title: "Secure Audit Trails",
    description: "Tamper-proof record keeping with cryptographic verification for legal and law enforcement requirements.",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    icon: <FileSearch size={40} className="text-vigil-accent mb-4" />,
    title: "Instant Verification",
    description: "Real-time ownership verification with detailed reports generated in seconds rather than days or weeks.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    icon: <Shield size={40} className="text-vigil-accent mb-4" />,
    title: "Fraud Alert System",
    description: "Proactive monitoring with instant alerts when suspicious ownership changes or patterns are detected.",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    icon: <Globe size={40} className="text-vigil-accent mb-4" />,
    title: "Jurisdictional Coverage",
    description: "Extensive coverage across multiple jurisdictions and property registries for comprehensive protection.",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="bg-vigil-primary relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-vigil-primary/80 to-vigil-primary"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="relative">
              Powerful Features
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-vigil-accent rounded-full transform transition-all duration-300 hover:scale-x-110"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            The Vigil combines advanced AI technology with comprehensive data analysis to provide robust property fraud prevention.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={feature.id} 
              className="feature-card hover-glow"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-40 mb-4 overflow-hidden rounded-t-lg">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vigil-primary via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="bg-vigil-accent/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center animate-floating">
                    {feature.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
