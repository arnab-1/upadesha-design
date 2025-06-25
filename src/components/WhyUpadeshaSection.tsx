
import { CircleDot, User, Users } from 'lucide-react';

const WhyUpadeshaSection = () => {
  const reasons = [
    {
      title: "Rooted in Vedic Science",
      description: "Our approach combines ancient Vedic wisdom with modern numerical analysis.",
      icon: <CircleDot className="w-8 h-8 text-indigo-600" />,
      count: "5,000+",
      label: "Years of Wisdom",
    },
    {
      title: "1-on-1 Guidance",
      description: "Personal consultations with Raajeshh A Keshri for tailored solutions.",
      icon: <User className="w-8 h-8 text-indigo-600" />,
      count: "100%",
      label: "Personal Attention",
    },
    {
      title: "Lives Transformed",
      description: "Join our growing community of individuals experiencing profound life changes.",
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      count: "1,000+",
      label: "Success Stories",
    },
  ];

  return (
    <section id="why-upadesha" className="py-20 relative bg-slate-50">
      <div 
        className="absolute inset-0 bg-yantra-pattern bg-center opacity-5"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">Why Upadesha Works</h2>
          <p className="text-blue-700 max-w-2xl mx-auto">
            Our unique approach has helped thousands achieve remarkable transformations in their lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md">
              <div className="mb-4 p-3 rounded-full bg-white border border-blue-200/30">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-indigo-800">{reason.title}</h3>
              <p className="text-blue-600 mb-6">{reason.description}</p>
              <div className="mt-auto">
                <div className="text-3xl font-bold text-indigo-700">{reason.count}</div>
                <div className="text-blue-500 text-sm">{reason.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUpadeshaSection;
