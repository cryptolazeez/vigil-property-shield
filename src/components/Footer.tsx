
import React from "react";
import { ShieldCheck } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-vigil-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ShieldCheck size={28} className="text-vigil-accent" />
              <span className="text-xl font-bold">The Vigil</span>
            </div>
            <p className="text-gray-300 mb-6">
              AI-powered property fraud prevention through real-time ownership verification.
            </p>
            <p className="text-gray-400 text-sm">
              © {currentYear} The Vigil. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#features" className="hover:text-vigil-accent transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-vigil-accent transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-vigil-accent transition-colors">API</a></li>
              <li><a href="#" className="hover:text-vigil-accent transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-vigil-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-vigil-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-vigil-accent transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-vigil-accent transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-vigil-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-vigil-accent transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-vigil-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-vigil-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>Made with Lovable AI. Built for property security.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
