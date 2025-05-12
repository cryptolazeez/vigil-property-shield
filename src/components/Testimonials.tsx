
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User, Building, Scale } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "The Vigil has completely transformed our property fraud investigations. What used to take weeks now takes minutes, allowing us to respond rapidly and prevent damages.",
    name: "Detective Sarah Johnson",
    title: "Financial Crimes Division",
    icon: <User size={20} className="text-vigil-accent" />
  },
  {
    id: 2,
    content: "As a real estate attorney, due diligence on property ownership is critical. The Vigil provides us with reliable verification that significantly reduces our research time and liability.",
    name: "Michael Chen, Esq.",
    title: "Real Estate Law Practice",
    icon: <Scale size={20} className="text-vigil-accent" />
  },
  {
    id: 3,
    content: "Our mortgage approval process is now 40% faster thanks to The Vigil's instant ownership verification. This has improved both our security posture and customer satisfaction.",
    name: "Rebecca Williams",
    title: "VP of Mortgage Services",
    icon: <Building size={20} className="text-vigil-accent" />
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-vigil-primary text-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Professionals</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Hear from real users about how The Vigil is helping them prevent property fraud and streamline verification processes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white/10 backdrop-blur-sm border-0 shadow-none hover:bg-white/15 transition-all">
              <CardContent className="p-6">
                <div className="mb-4 text-gray-200 italic">
                  "{testimonial.content}"
                </div>
                <div className="flex items-center mt-6">
                  <div className="bg-white/20 rounded-full p-2 mr-3">
                    {testimonial.icon}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-300">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
