import React from 'react';
import { Award, Shield, DollarSign, Users, Target, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Experienced & Fully Insured Professionals',
      description: 'Our team consists of skilled professionals with comprehensive insurance coverage'
    },
    {
      icon: Shield,
      title: 'Eco-Friendly Cleaning Solutions',
      description: 'We use environmentally safe products that protect both your property and the planet'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Fair, competitive rates with no hidden fees or surprise charges'
    },
    {
      icon: Heart,
      title: 'Customer-First Service',
      description: 'Every interaction is designed around your satisfaction and convenience'
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to become Auckland's first choice in window care, 
            we started with a simple mission: to deliver exceptional, reliable, and 
            affordable services that make every property shine.
          </p>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Sets Us Apart?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
            <Target className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Clean windows do more than look good—they transform your space, 
            lift your mood, and create a brighter, healthier environment.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Behind First Window Cleaning is a passionate team of experts who treat 
              your property like their own, ensuring precision and care every step of the way.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose "First"?
            </h3>
            <p className="text-lg text-gray-700">
              Because when it comes to quality, detail, and trust—you deserve nothing but the best.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;