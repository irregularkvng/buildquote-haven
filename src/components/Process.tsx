
import { Card, CardContent } from '@/components/ui/card';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Enter Project Details",
      description: "Provide basic information about your construction project including size, type, and location."
    },
    {
      number: "02",
      title: "Select Materials & Services",
      description: "Choose from our comprehensive database of materials and services or add custom items."
    },
    {
      number: "03",
      title: "Review & Adjust",
      description: "Our system generates an estimate that you can fine-tune based on your knowledge of the project."
    },
    {
      number: "04",
      title: "Deliver Professional Quote",
      description: "Send a beautifully formatted quote to your client via email or downloadable PDF."
    }
  ];

  return (
    <section id="process" className="section-container bg-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-block mb-4">
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
            Simple Process
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-balance">
          How BuildQuote Works
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto text-balance">
          Our streamlined process takes the complexity out of construction quoting, letting you create accurate estimates in just a few steps.
        </p>
      </div>
      
      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-blue-100 transform -translate-x-1/2 hidden md:block"></div>
        
        <div className="relative z-10 space-y-12 md:space-y-0">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
              } items-center gap-8 animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex-1">
                <Card className="bg-white shadow-md border-0 hover-lift">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold shadow-md z-10">
                {step.number.split('').map((char, i) => (
                  <span key={i}>{char}</span>
                ))}
              </div>
              
              <div className="flex-1 md:block hidden"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
