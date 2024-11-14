import React from 'react';
import {FaInstagram } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: 'John Doe', text: 'Great experience with the service! Lorem ipsum dolor, consectetur adipiscing elit. Nulla vel lorem vel justo sodales placerat. Phasellus a semper dui, eget sodales odio. Vivamus eu pellentesque turpis. Sed eget eros dui. Sed gravida justo vel dui pharetra, a scelerisque lorem luctus.' },
    { id: 2, name: 'Jane Smith', text: 'Highly recommend this product. Ut efficitur tincidunt semper. Fusce vehicula ligula in tincidunt consectetur. Suspendisse potenti. Nullam interdum lacus sit amet quam fermentum, ac luctus quam vestibulum. Cras quis tortor dui. Nullam vitae dui non lectus accumsan hendrerit.' },
    { id: 3, name: 'Michael Johnson', text: 'Excellent customer support. Pellentesque varius odio libero, at tincidunt felis venenatis vel. Proin tempor orci sed bibendum pretium. Nam scelerisque, justo in sodales tristique, libero nulla vestibulum metus, vel suscipit sapien nisi eu ex.' },
    { id: 4, name: 'Sarah Brown', text: 'Changed my life. Thank you! Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc auctor nunc ac nisl eleifend, id volutpat odio eleifend. Donec ut turpis eget felis convallis maximus.' },
  ];

  return (
    <div className="chivo-mono bg-gray-200 py-20 ">
    <h1 className='text-gray-800 font-bold text-center text-4xl mb-10'>What Our Users Say</h1>
      <div className="grid grid-cols-2 gap-8 px-36">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="cursor-pointer transition-all duration-500 hover:translate-y-2 w-70 h-70 bg-neutral-50 rounded-lg shadow-xl flex flex-col items-center justify-center gap-4 px-4"
          >
            <div className="rounded-full overflow-hidden mt-6 w-24 h-24">
              <img src={`https://randomuser.me/api/portraits/men/${testimonial.id}.jpg`} alt={testimonial.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-bold">{testimonial.name}</h3>
            <p className="text-sm text-center">{testimonial.text}</p>
            <FaInstagram className="h-6 w-6 mb-4 text-pink-500 hover:text-pink-400" />

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
