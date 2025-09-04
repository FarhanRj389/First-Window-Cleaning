import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Award, Shield, DollarSign, Users } from 'lucide-react';

const Home = () => {
  const services = [
    'Residential & Commercial Window Cleaning',
    'Post-Construction Window Cleaning',
    'Gutter Cleaning & Unblocking',
    'Building Wash (Coming Soon)'
  ];

  const features = [
    {
      icon: Award,
      title: '10+ Years of Experience',
      description: 'Proven expertise in professional window care'
    },
    {
      icon: Shield,
      title: 'Safe & Eco-Friendly Solutions',
      description: 'Environmentally conscious cleaning methods'
    },
    {
      icon: Users,
      title: 'Customer-Focused Service',
      description: 'Tailored solutions for your specific needs'
    },
    {
      icon: DollarSign,
      title: 'Affordable, Transparent Pricing',
      description: 'No hidden fees, fair and competitive rates'
    }
  ];

  return (
    <div className='relative overflow-hidden'>
      <div className='fixed w-full min-h-screen z-0'>
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-black opacity-30"></div>
        <img src="hero.webp" alt="Logo" className="w-full max-h-screen  object-cover top-1/2" />
      </div>
      {/* Hero Section */}
      <section className=" py-40 z-10 relative">

        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 ">

          <div className="text-center">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Elevate your view with the
              <span className="text-blue-700 block">art of luxury Window Care</span>
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Book Us Today
              </Link>
              <a
                href="tel:0224012900"
                className="inline-flex items-center space-x-2 border-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-200"
              >
                <Phone className="h-5 w-5" />
                <span>022 401 2900</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className=" rounded-2xl p-8 mb-16">
            <h2 className="text-7xl font-bold text-gray-900 mb-14 text-center flex items-center justify-center">
              What&nbsp;<span className="text-blue-700 block">We Offer</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                <div className="aspect-video">
                  <img
                    src="/COMMERCIAL RESIDENTIAL.webp"
                    alt="Residential window cleaning"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Residential & Commercial Window Cleaning</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                <div className="aspect-video">
                  <img
                    src="/post construncion cleaning.jpeg"
                    alt="Post-construction cleaning"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Post-Construction Window Cleaning</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                <div className="aspect-video">
                  <img
                    src="/GUTTER CLEANING AND UNBLOCKING.webp"
                    alt="Gutter cleaning"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Gutter Cleaning & Unblocking</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                <div className="aspect-video">
                  <img
                    src="/BUILDING WASH COMMERCIAL.jpeg"
                    alt="Building wash service"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Building Wash (Coming Soon)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Why Choose Us */}
      <div className='py-20 bg-black/10 z-10 relative'>
        <h2 className="text-5xl font-bold text-white text-center mb-12">
          Why Choose Us?
        </h2>
        <div className="text-center mb-12">
          <p className="text-lg text-white max-w-4xl mx-auto leading-relaxed">
            At First Window Cleaning, we bring clarity and brightness to your spaces.
            With over 10 years of expertise, we are Auckland's trusted choice for
            residential, commercial, and post-construction window care.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-200"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-600 transition-colors duration-200">
                <feature.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <section className=" py-16 bg-gray-900 border-white border- z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to brighten your view?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Book Us Today
            </Link>
            <span className="text-white text-lg">or call</span>
            <a
              href="tel:0224012900"
              className="inline-flex items-center space-x-2 text-white border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              <Phone className="h-5 w-5" />
              <span>022 401 2900</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;