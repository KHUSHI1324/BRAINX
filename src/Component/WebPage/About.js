import React from 'react';

function About() {
  return (
    <>
      <div className="bg-gray-200 rail py-64 ">
        <div className=" mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl text-blue-900 font-bold rail -mt-44">
              No matter where you are in your mental health journey, Radiant
              Life will meet you there and partner with you so you can feel
              better, get better, and stay better
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Icon Box 1 */}
            <div className="bg-white rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-blue-200 p-6 flex flex-col items-center">
              <div className="flex items-center justify-center bg-blue-500 text-white rounded-full w-12 h-12 mb-4">
                {/* Replace with SVG icon or image */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <h4 className="text-xl text-blue-900 mb-2">The Problem</h4>
              <p className="text-blue-gray-700 text-center">
                India’s mental health is in a state of crisis. While 1 billion
                people around the world live with a mental health condition,
                India alone accounts for a third of the global burden of
                depression, addictions, and suicides. India has the youngest
                population in the world - and yet, over 100 million children
                and youth have diagnosed mental health conditions. Due to a
                combination of poor awareness, stigma, and lack of access to
                quality care, a person who is struggling with their mental
                health often does not receive the treatment and care they need
                to get better.
              </p>
            </div>

            {/* Icon Box 2 */}
            <div className="bg-white rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-blue-200 p-6 flex flex-col items-center">
              <div className="flex items-center justify-center bg-blue-500 text-white rounded-full w-12 h-12 mb-4">
                {/* Replace with SVG icon or image */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <h4 className="text-xl text-blue-900 mb-2">The Radiant Solution</h4>
              <p className="text-blue-gray-700 text-center">
                Radiant is transforming the way mental healthcare is delivered
                in India, by bringing together the latest science in clinical
                practice and modern technological tools to deliver the best
                outcome for each individual and family. Our integrated mental
                health ecosystem offers treatment, care, and support for all
                kinds of mental health concerns. Using the experience and
                expertise of our team of trained mental health professionals,
                we strive to ensure that each individual can navigate their
                mental healthcare journey seamlessly and easily.
              </p>
            </div>

            {/* Icon Box 3 */}
            <div className="bg-white rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-blue-200 p-6 flex flex-col items-center">
              <div className="flex items-center justify-center bg-blue-500 text-white rounded-full w-12 h-12 mb-4">
                {/* Replace with SVG icon or image */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <h4 className="text-xl text-blue-900 mb-2">Your Safety</h4>
              <p className="text-blue-gray-700 text-center">
                Your safety is our top priority, and we maintain rigorous
                protocols and measures to ensure a secure and protected
                environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
