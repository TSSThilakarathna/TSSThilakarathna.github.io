import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa';

const feedbacks = [
  {
    name: 'John Doe',
    role: 'Startup Founder',
    image: '/public/people/person1.jpg',
    message: 'Sachin delivered an amazing UI/UX design for our app. It’s clean, fast, and user-friendly.',
    rating: 5,
  },
  {
    name: 'Sarah Lee',
    role: 'Product Manager at TechHive',
    image: '/public/people/person2.jpg',
    message: 'The web application he built works flawlessly. Very impressed with the speed and clarity.',
    rating: 4,
  },
  {
    name: 'Michael Raj',
    role: 'Freelance Marketer',
    image: '/public/people/person3.jpg',
    message: 'His designs helped us stand out online. Great experience working with him!',
    rating: 5,
  },
];

function FeedbackSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="relative top-[400px] px-4 py-10 flex flex-col items-center text-center">
      <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold text-[#FED035]">
        What People Say
      </h2>

      <div className="w-full max-w-3xl">
        <Slider {...settings}>
          {feedbacks.map((fb, index) => (
            <div key={index} className="p-6">
              <div className="bg-[#1319295b] p-6 rounded-xl shadow-md flex flex-col items-center">

                {/* Name & Role */}
                <h3 className="text-[#FED035] text-[16px] sm:text-[18px] md:text-[18px] font-semibold text-lg">{fb.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{fb.role}</p>

                {/* Message */}
                <p className="text-gray-300 text-sm  sm:text-center max-w-md">
                  {fb.message}
                </p>

                {/* Star Rating */}
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-yellow-400 text-lg ${i < fb.rating ? 'opacity-100' : 'opacity-30'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FeedbackSlider;
