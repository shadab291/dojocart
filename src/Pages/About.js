import React from 'react';
import bg from "../icons/1.jpg"

const AboutPage = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">About DojoCart</h1>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={bg} // Replace with your image URL
              alt="About DojoCart"
              className="rounded-lg shadow-md"
            />
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <p className="text-lg mb-4">
              Welcome to DojoCart, your ultimate destination for all things martial arts and fitness! We strive to provide high-quality products that resonate with your passion for martial arts, fitness, and well-being.
            </p>
            <p className="text-lg mb-4">
              Our mission is to empower enthusiasts, beginners, and professionals alike with top-notch gear, apparel, and equipment tailored to your training needs. From sparring gear to training essentials, DojoCart has you covered.
            </p>
            <p className="text-lg">
              We value your journey and commitment to your craft, which is why we curate our collections meticulously, ensuring you get the best tools to enhance your performance and elevate your experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
