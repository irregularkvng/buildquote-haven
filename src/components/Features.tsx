
import { Calculator, FileText, Calendar, Clock } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="glass rounded-2xl p-6 hover-lift animate-fade-in">
      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Accurate Pricing",
      description: "Our proprietary algorithm considers material costs, labor rates, and project specifics for precise quotes."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Customizable Templates",
      description: "Choose from industry-specific templates or create your own to match your business needs."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Project Scheduling",
      description: "Integrate project timelines directly into your quotes for better client communication."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time Savings",
      description: "Generate professional quotes in minutes instead of days, freeing you up to focus on your projects."
    }
  ];

  return (
    <section id="features" className="section-container relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 z-0"></div>
      <div className="relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
              Powerful Features
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-balance">
            Everything You Need for Perfect Construction Quotes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto text-balance">
            Our platform combines powerful tools with an intuitive interface to streamline your quoting process from start to finish.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
