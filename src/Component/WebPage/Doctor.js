import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Doc1 from '../img/doctors-1.jpg';
import Doc2 from '../img/doctors-2.jpg';
import Doc3 from '../img/doctors-3.jpg';
import Doc4 from '../img/doctors-4.jpg';
import { NavLink } from 'react-router-dom';

const doctors = [
  {
    id: 1,
    name: "Dr. Ayaan Sharma",
    specialty: "MBBS, MD, DNB - Cardiology",
    experience: "8+ years",
    image: Doc1,
    description: "Dr. Ayaan Sharma is a highly experienced cardiologist with expertise in diagnosing and treating various cardiovascular conditions.",
    calendlyLink: "https://calendly.com/khushi1909k" // Add the Calendly link here

  },
  {
    id: 2,
    name: "Dr. Priya Mehta",
    specialty: "MBBS, MD - Dermatology",
    experience: "10+ years",
    image: Doc2,
    description: "Dr. Priya Mehta is a renowned dermatologist known for her expertise in diagnosing and treating skin disorders.",
    calendlyLink: "https://calendly.com/khushi1909k" // Add the Calendly link here

  },
  {
    id: 3,
    name: "Dr. Rahul Verma",
    specialty: "MBBS, MS - Orthopaedics",
    experience: "12+ years",
    image: Doc3,
    description: "Dr. Rahul Verma specializes in orthopedic surgery with a focus on treating musculoskeletal injuries and conditions.",
    calendlyLink: "https://calendly.com/khushi1909k" // Add the Calendly link here

  },
  {
    id: 4,
    name: "Dr. Sneha Kapoor",
    specialty: "MBBS, MD - Pediatrics",
    experience: "6+ years",
    image: Doc4,
    description: "Dr. Sneha Kapoor is a dedicated pediatrician with expertise in child healthcare.",
    calendlyLink: "https://calendly.com/khushi1909k" // Add the Calendly link here

  },
];

const Doctor = ({user}) => {
  return (
    <div className="min-h-screen flex justify-center items-center py-20 bg-gray-100">
      <div className="grid grid-cols-2 gap-6 max-w-7xl mx-auto">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-gray-200 rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center justify-center text-centr md:text-left transform transition-transform hover:scale-105"
          >
            <div className="flex items-center justify-center bg-blue-200 rounded-full w-32 h-32 mb-4 overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="md:ml-4 flex-1">
              <h2 className="text-xl font-semibold mb-1 underline">{doctor.name}</h2>
              <p className="text-gray-400 mb-2">{doctor.experience}</p>
              <p className="text-gray-500 mb-2">{doctor.specialty}</p>
              <p className="text-gray-600 mb-4">{doctor.description}</p>
              <div className="flex space-x-4 mt-3"> {/* Added 3px gap */}
                <div className="flex space-x-4">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-blue-600 hover:text-blue-800 cursor-pointer transition-colors rounded-full bg-gray-100 px-2 py-1"
                  />
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-blue-400 hover:text-blue-600 cursor-pointer transition-colors rounded-full bg-gray-100 px-2 py-1"
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-pink-600 hover:text-pink-800 cursor-pointer transition-colors rounded-full bg-gray-100 px-2 py-1"
                  />
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-blue-700 hover:text-blue-900 cursor-pointer transition-colors rounded-full bg-gray-100 px-2 py-1"
                  />
                </div>
                <div className="flex space-x-4 ml-auto">
                 {user ? 
                  <NavLink to='/'>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                  onClick={() => window.open(doctor.calendlyLink, '_blank')}>
                   Book
                 </button> &nbsp; &nbsp;
                {/* &nbsp; &nbsp; <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                  onClick={() => window.location.href ='/chat'}>
                   Chat
                 </button> */}
                  </NavLink>:
                  
                 <NavLink to='/login'>
                   <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                  >
                    Book
                  </button>
                 {/* &nbsp; &nbsp; &nbsp; &nbsp; <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                  >
                    Chat
                  </button> */}
                  </NavLink>}
                  <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                  onClick={() => window.location.href ='/chat'}>
                   Chat
                 </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctor;
