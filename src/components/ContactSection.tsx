
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Mail, Phone } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Ready to Protect Your Property?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact our team to learn more about how The Vigil can help you verify property ownership and prevent fraud.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-vigil-light p-2 rounded-full">
                  <Mail size={20} className="text-vigil-accent" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="text-gray-600">contact@thevigilapp.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-vigil-light p-2 rounded-full">
                  <Phone size={20} className="text-vigil-accent" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-vigil-light p-2 rounded-full">
                  <MessageSquare size={20} className="text-vigil-accent" />
                </div>
                <div>
                  <h4 className="font-semibold">Live Chat</h4>
                  <p className="text-gray-600">Available Monday-Friday, 9am-5pm EST</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <h3 className="text-2xl font-bold mb-6">Request a Demo</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="organization" className="text-sm font-medium">Organization</label>
                <Input id="organization" placeholder="Enter your organization" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Tell us about your needs" className="min-h-[120px]" />
              </div>
              
              <Button type="submit" className="bg-vigil-accent hover:bg-vigil-accent/90 text-white w-full py-6">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
