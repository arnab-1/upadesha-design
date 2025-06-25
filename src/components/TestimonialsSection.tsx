
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Vikram Mehta",
      location: "Mumbai",
      rating: 5,
      text: "The numerology consultation with Raajeshh completely changed my business trajectory. After implementing his suggestions, I saw incredible growth within just 3 months!",
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      text: "I was skeptical at first, but the name correction Raajeshh suggested brought such positive energy into my life. My relationships improved and new opportunities started flowing in.",
    },
    {
      name: "Raj Malhotra",
      location: "Bangalore",
      rating: 5,
      text: "The personalized yantra that Upadesha created for me has been a powerful addition to my home. I feel more centered, focused, and my financial situation has improved dramatically.",
    },
    {
      name: "Ananya Patel",
      location: "Ahmedabad",
      rating: 5,
      text: "After struggling with health issues for years, the remedies suggested by Raajeshh made a noticeable difference. I'm sleeping better and my energy levels have increased.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative bg-gradient-to-b from-purple-100 to-blue-200">
      <div 
        className="absolute inset-0 bg-yantra-pattern bg-center opacity-5"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">
            Client Testimonials
          </h2>
          <p className="text-blue-700 max-w-2xl mx-auto">
            Read what our clients have to say about their transformational experience with Upadesha.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="testimonial-card relative overflow-hidden">
            <div 
              className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-purple-400 text-purple-400" />
                ))}
              </div>
              
              <blockquote className="text-lg mb-6 italic text-indigo-700">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div>
                <div className="font-bold text-indigo-800">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm text-blue-500">
                  {testimonials[currentIndex].location}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-indigo-700" : "bg-blue-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-8">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white border border-blue-200 flex items-center justify-center text-indigo-600 hover:bg-indigo-50 hover:text-indigo-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-8">
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white border border-blue-200 flex items-center justify-center text-indigo-600 hover:bg-indigo-50 hover:text-indigo-800 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
