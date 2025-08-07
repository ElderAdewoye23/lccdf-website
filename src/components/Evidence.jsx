
import React from 'react'
import { carouselData } from '../data/data'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Evidence() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-heading text-primary text-center mb-8">
          Visual Evidence
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Our impact in pictures - See how we're making a difference in communities across Nigeria
        </p>
        
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            showStatus={false}
            interval={4000}
            transitionTime={400}
            swipeable
            emulateTouch
            showArrows={true}
            dynamicHeight={false}
            className="carousel-container"
          >
            {carouselData.map((item, index) => (
              <div key={index} className="carousel-slide">
                <div className="relative aspect-w-16 aspect-h-9">
                  <img 
                    src={item.image}  
                    alt={`Slide ${index + 1}`} 
                    className="rounded-lg object-cover w-full h-full"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
                    <p className="text-white text-sm md:text-base font-medium">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Evidence
