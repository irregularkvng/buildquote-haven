
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "BuildQuote has transformed our business. We're saving at least 5 hours per week on quote preparation, and our conversion rate has improved by 30%.",
    author: "Michael Thompson",
    role: "General Contractor",
    company: "Thompson Construction"
  },
  {
    quote: "The accuracy of the quotes generated by BuildQuote is impressive. It's helped us win more projects while ensuring we maintain our profit margins.",
    author: "Sarah Williams",
    role: "Project Manager",
    company: "Williams & Sons"
  },
  {
    quote: "As a small construction company, efficiency is everything. BuildQuote gives us the professional look and quick turnaround of much larger firms.",
    author: "Robert Chen",
    role: "Owner",
    company: "Chen Building Services"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="section-container bg-blue-50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-block mb-4">
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
            Success Stories
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-balance">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto text-balance">
          Discover how BuildQuote has helped contractors and construction companies streamline their quoting process.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <Card className="glass border-0 shadow-lg overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="text-blue-600 mb-6">
              <Quote size={48} className="opacity-50" />
            </div>
            
            <div className="relative overflow-hidden" style={{ minHeight: '12rem' }}>
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-500 absolute w-full ${
                    activeIndex === index 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-20'
                  }`}
                  style={{ transitionDelay: '0.1s' }}
                >
                  <p className="text-xl md:text-2xl font-medium text-gray-800 mb-6 text-balance">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <div className="flex justify-center mt-8 gap-4">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? 'bg-blue-600 w-6' : 'bg-blue-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
