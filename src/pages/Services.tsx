import React from 'react';
import { Home, Building, HardHat, Droplets, Paintbrush, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Window Cleaning ',
      description: 'Enjoy sparkling clean windows that brighten up your home and create a welcoming atmosphere.',
      features: ['Interior & exterior cleaning', 'Window sill cleaning', 'Screen cleaning', 'Regular maintenance plans']
    },
    {
      icon: Building,
      title: 'Commercial Window Cleaning',
      description: 'Make the best impression on clients and employees with streak-free, professional window care.',
      features: ['High-rise window cleaning', 'Storefront maintenance', 'Office building services', 'Flexible scheduling']
    },
    {
      icon: HardHat,
      title: 'Post-Construction Cleaning',
      description: 'From dust to debris, we ensure your property shines after any building project.',
      features: ['Construction debris removal', 'Paint splatter removal', 'Deep cleaning service', 'Final inspection cleaning']
    },
    {
      icon: Droplets,
      title: 'Gutter Cleaning & Unblocking',
      description: 'Protect your property from water damage with clean and clear gutters.',
      features: ['Complete gutter cleaning', 'Downspout unblocking', 'Gutter guard installation', 'Water damage prevention']
    },
    {
      icon: Paintbrush,
      title: 'Building Wash',
      description: 'Comprehensive exterior washing for both residential and commercial properties.',
      badge: 'Coming Soon',
      features: ['Pressure washing', 'Soft wash techniques', 'Exterior surface cleaning', 'Driveway & walkway cleaning']
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional window cleaning and exterior care services designed to 
            make your property shine and create lasting impressions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              >
                {service.badge && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.badge}
                  </div>
                )}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors duration-200">
                      <service.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-200" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Our Promise</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every service is carried out by skilled, insured professionals using 
            eco-friendly cleaning solutions, ensuring safety, sustainability, and quality.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;