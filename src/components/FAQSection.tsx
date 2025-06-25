
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is numerology and how does it work?",
      answer: "Numerology is the ancient science of numbers and their vibrations. It works by analyzing the numerical values of your name, birth date, and other significant numbers in your life to reveal patterns, insights, and guidance about your personality, destiny, and life path."
    },
    {
      question: "How can a numerology session help change my life?",
      answer: "A numerology consultation provides deep insights into your strengths, challenges, and life purpose. By understanding your numbers, you can make better decisions, align with your true nature, overcome obstacles, and unlock your full potential for success in career, relationships, and personal growth."
    },
    {
      question: "Is this based on astrology or is it different?",
      answer: "While both numerology and astrology are ancient metaphysical sciences, they are distinct. Numerology focuses specifically on the vibrational energy of numbers derived from your name and birth date, while astrology studies planetary positions. Both can complement each other for a holistic understanding."
    },
    {
      question: "What do I need to prepare before a consultation?",
      answer: "For your consultation, please have your full birth name (as written on your birth certificate), your current legal name if different, your birth date, and any specific questions or areas of life you'd like to focus on during the session."
    },
    {
      question: "How soon can I expect results after applying the guidance?",
      answer: "Results can vary depending on the individual and the specific guidance provided. Some people notice immediate shifts in awareness and energy, while practical changes typically manifest within 3-6 months of consistently applying the recommended practices and adjustments."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">
            Frequently Asked Questions
          </h2>
          <p className="text-blue-700 max-w-2xl mx-auto">
            Find answers to common questions about numerology and our consultation process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="multiple" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-pearl rounded-xl shadow-md border border-blue-100/30 px-5 py-3 hover:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-medium text-indigo-800 hover:text-indigo-900 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-blue-600 pb-4 pt-0 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
