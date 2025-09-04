import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

const OurWork = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryItems = [
    {
      category: 'Gutter Cleaning',
      image: 'GUTTER CLEANING AND UNBLOCKING.webp',
      description: 'Complete gutter transformation removing years of buildup'
    },
    {
      category: 'Canopy Cleaning',
      image: 'Restored canopy to pristine condition with professional cleaning.jpeg',
      description: 'Restored canopy to pristine condition with professional cleaning'
    },
    {
      category: 'Residential Projects',
      image: 'Crystal clear windows enhancing natural light in residential spaces.webp',
      description: 'Crystal clear windows enhancing natural light in residential spaces'
    },
    {
      category: 'Commercial Projects',
      image: 'Professional office building window cleaning for enhanced business appearance.jpg',
      description: 'Professional office building window cleaning for enhanced business appearance'
    },
    {
      category: 'Post-Construction Cleaning',
      image: 'Complete post-construction cleanup revealing beautiful clear windows.jpg',
      description: 'Complete post-construction cleanup revealing beautiful clear windows'
    },
    {
      category: 'Building Wash',
      image: 'building washing.jpg',
      description: 'Professional building exterior cleaning for a fresh, clean look'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => {
      // If we're at the last pair or beyond, loop back to start
      if (prev >= galleryItems.length - 2) return 0;
      // Otherwise move to next pair
      return prev + 2;
    });
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => {
      // If we're at the first pair, loop to the last pair
      if (prev <= 0) return Math.max(0, galleryItems.length - (galleryItems.length % 2 === 0 ? 2 : 1));
      // Otherwise move to previous pair
      return Math.max(0, prev - 2);
    });
  };

  // Get current pair of images to display
  const getCurrentImages = () => {
    const firstImage = currentImageIndex;
    const secondImage = (currentImageIndex + 1) % galleryItems.length;
    return [galleryItems[firstImage], galleryItems[secondImage]];
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

          {/* Featured Image Carousel */}
          <div className="mb-16">
            <div className="bg-gray-50 rounded-2xl p-4 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {getCurrentImages().map((item, idx) => (
                  <div key={`${currentImageIndex}-${idx}`} className="relative aspect-video rounded-xl overflow-hidden shadow-lg group">
                    <img
                      src={item.image}
                      alt={item.category}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-xl font-bold mb-1">
                          {item.category}
                        </h3>
                        <p className="text-gray-200 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation */}
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={prevImage}
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <div className="flex space-x-2">
                  {Array.from({ length: Math.ceil(galleryItems.length / 2) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index * 2)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        currentImageIndex >= index * 2 && currentImageIndex < (index * 2) + 2 ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to images ${(index * 2) + 1}-${Math.min((index * 2) + 2, galleryItems.length)}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextImage}
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                  aria-label="Next image"
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
                    src={item.image}
                    alt={item.category}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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