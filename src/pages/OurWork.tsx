import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

const OurWork = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryItems = [
    {
      category: 'Before & After: Gutter Cleaning',
      before: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete gutter transformation removing years of buildup'
    },
    {
      category: 'Before & After: Canopy Cleaning',
      before: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Restored canopy to pristine condition with professional cleaning'
    },
    {
      category: 'Residential Projects',
      before: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Crystal clear windows enhancing natural light in residential spaces'
    },
    {
      category: 'Commercial Projects',
      before: 'https://images.pexels.com/photos/380337/pexels-photo-380337.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional office building window cleaning for enhanced business appearance'
    },
    {
      category: 'Post-Construction Results',
      before: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete post-construction cleanup revealing beautiful clear windows'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See the Difference
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our results speak for themselves. From stubborn grime to sparkling finishes, 
            we transform windows, gutters, and building exteriors with precision and care.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Gallery Highlights
          </h2>

          {/* Featured Before/After */}
          <div className="mb-16">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {galleryItems[currentImageIndex].category}
                </h3>
                <p className="text-gray-600">
                  {galleryItems[currentImageIndex].description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 text-center">Before</h4>
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={galleryItems[currentImageIndex].before}
                      alt="Before cleaning"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 text-center">After</h4>
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={galleryItems[currentImageIndex].after}
                      alt="After cleaning"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex items-center justify-center mt-8 space-x-4">
                <button
                  onClick={prevImage}
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <div className="flex space-x-2">
                  {galleryItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextImage}
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                onClick={() => setCurrentImageIndex(index)}
              >
                <div className="aspect-video">
                  <img
                    src={item.after}
                    alt={item.category}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.category}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <Award className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every project reflects our commitment to excellence, dependability, 
            and service you can trust.
          </p>
        </div>
      </section>
    </div>
  );
};

export default OurWork;