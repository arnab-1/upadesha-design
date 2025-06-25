
import { Calendar, User, Briefcase, Heart, Activity, CircleDot } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Numerology Consultation",
      description: "Discover your life path and personal year numbers to understand your journey.",
      icon: <CircleDot className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: "Name Correction",
      description: "Align your name's vibration with your destiny for improved life outcomes.",
      icon: <User className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: "Career & Wealth Guidance",
      description: "Unlock your financial potential and find the career path meant for you.",
      icon: <Briefcase className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: "Relationship Alignment",
      description: "Harmonize your relationships through numerical compatibility assessment.",
      icon: <Heart className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: "Health Remedies",
      description: "Discover numerical solutions to improve your physical and mental wellbeing.",
      icon: <Activity className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: "Personalized Yantras",
      description: "Custom sacred geometry to amplify your intentions and manifestations.",
      icon: <Calendar className="w-10 h-10 text-indigo-600" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-blue-50 to-indigo-100 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">Our Services</h2>
          <p className="text-blue-700 max-w-2xl mx-auto">
            Transform every aspect of your life with our specialized numerological services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-blue-50 border border-blue-200/30">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-indigo-800">{service.title}</h3>
              <p className="text-blue-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl shadow-lg max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-indigo-900">Ready to Transform Your Life?</h3>
          <p className="text-blue-700 mb-6">Schedule your personalized numerology consultation today.</p>
          <a 
            href="#consult" 
            className="inline-block rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 px-8 py-3 text-lg font-medium text-white shadow transition-all hover:scale-105"
          >
            Consult Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
