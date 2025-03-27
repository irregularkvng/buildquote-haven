
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0"></div>
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-fade-in mb-4">
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
              Streamline Your Construction Quoting Process
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 animate-fade-in animate-delay-100 text-balance">
            Fast, Accurate Construction Quotes in Minutes
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in animate-delay-200 text-balance">
            Transform your construction business with our AI-powered quoting platform that delivers precise estimates, saving you time and winning more bids.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animate-delay-300">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-lg font-medium text-lg shadow-md hover:shadow-lg transition-all w-full sm:w-auto">
              Get Free Quote
            </Button>
            <Button variant="outline" className="border-blue-200 hover:border-blue-300 text-blue-700 px-6 py-6 rounded-lg font-medium text-lg group w-full sm:w-auto">
              <span>See How It Works</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 animate-fade-in animate-delay-400">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-blue-600">1,200+</span> contractors trust BuildQuote
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
