import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Explore Common Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-1">
          {[1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6 bg-white text-black hover:text-blue-400"
              >
                <span className="flex items-center text-lg font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
                    <text x="12" y="16" textAnchor="middle" fill="black" fontSize="12">
                      ?
                    </text>
                  </svg>
                  {index === 1 && 'How can I get started with therapy?'}
                  {index === 2 && 'What are the benefits of couple therapy?'}
                  {index === 3 && 'What should I expect during a healing therapy session?'}
                  {index === 4 && 'How often should I attend therapy sessions?'}
                  {index === 5 && 'Are your therapy sessions confidential?'}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>
              <div
                className={`px-4 pb-5 sm:px-6 sm:pb-6 transition-all duration-500 overflow-hidden bg-gray-100 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
                style={{ maxHeight: activeIndex === index ? '300px' : '0' }}
              >
                <p className="text-black">
                  {index === 1 &&
                    'Getting started with therapy is simple. Just sign up on our platform and schedule your first session with a therapist of your choice. You will be guided through the process step-by-step, ensuring you are comfortable and prepared for your sessions. Our platform offers various resources and support to help you on your journey.'}
                  {index === 2 &&
                    'Couple therapy helps improve communication, resolve conflicts, and strengthen your relationship. It provides a safe space to address issues and build a healthier connection. Our therapists are trained to help you and your partner understand each other better and develop effective strategies to navigate your relationship challenges.'}
                  {index === 3 &&
                    'During a healing therapy session, you can expect a relaxing and supportive environment where our therapists use techniques to help you manage stress and promote well-being. These sessions are designed to help you explore your feelings and experiences in a safe and nurturing space, facilitating personal growth and healing.'}
                  {index === 4 &&
                    'The frequency of therapy sessions depends on your individual needs and goals. Typically, weekly sessions are recommended to start, but this can be adjusted over time. Regular sessions help to maintain progress and address any emerging issues promptly, ensuring you receive continuous support on your therapeutic journey.'}
                  {index === 5 &&
                    'Yes, all our therapy sessions are completely confidential. We prioritize your privacy and ensure that your information is securely protected. Our commitment to confidentiality allows you to discuss sensitive issues freely and openly, knowing that your privacy is always safeguarded.'}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 text-base mt-9">
          Still have questions?{' '}
          <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
            Contact our support
          </span>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
