
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShieldCheck } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-vigil-primary shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <ShieldCheck size={28} className="text-vigil-accent" />
              <span className="text-xl font-bold text-white">The Vigil</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-vigil-accent transition-colors">Features</a>
            <a href="#use-cases" className="text-gray-300 hover:text-vigil-accent transition-colors">Use Cases</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-vigil-accent transition-colors">How It Works</a>
            <a href="#testimonials" className="text-gray-300 hover:text-vigil-accent transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-300 hover:text-vigil-accent transition-colors">Contact</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-vigil-primary">Log In</Button>
            <Button className="bg-[#c1ff00] hover:bg-[#b7f500] text-black font-medium">Book a Demo</Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-vigil-accent focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-vigil-primary border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-vigil-accent hover:bg-gray-800">Features</a>
            <a href="#use-cases" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-vigil-accent hover:bg-gray-800">Use Cases</a>
            <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-vigil-accent hover:bg-gray-800">How It Works</a>
            <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-vigil-accent hover:bg-gray-800">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-vigil-accent hover:bg-gray-800">Contact</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-800">
            <div className="flex items-center px-5 space-x-3">
              <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-vigil-primary">Log In</Button>
            </div>
            <div className="mt-3 px-5 pb-3">
              <Button className="w-full bg-[#c1ff00] hover:bg-[#b7f500] text-black font-medium">Book a Demo</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
