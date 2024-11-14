import React from 'react';

function Appont() {
  return (
    <>
      <div id="appointment" className="section-bg py-10 bg-gray-200">
        <div className=" mx-auto px-4 py-12">
          <div className="section-title2 text-center">
            <h2 className="text-3xl font-bold">Make an Appointment</h2>
            <p className="mt-4 text-lg text-gray-600">
              Making an appointment is quick and easy at our hospital, ensuring
              you receive timely access to the medical care you need, when you
              need it.
            </p>
          </div>

          <form >
            <div className=" my-2">
              <input
                type="text"
                name="name"
                className="form-control focus:ring-2 focus:ring-blue-400 border-2 border-gray-200 focus:border-blue-400 w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline"
                id="name"
                placeholder="Your Name"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 characters"
              />
            </div>

            <div className=" my-2">
              <input
                type="email"
                className="form-control focus:ring-2 focus:ring-blue-400 border-2 border-gray-200 focus:border-blue-400 w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline"
                name="email"
                id="email"
                placeholder="Your Email"
                data-rule="email"
                data-msg="Please enter a valid email"
              />
            </div>

            <div className=" my-2">
              <input
                type="tel"
                className="form-control focus:ring-2 focus:ring-blue-400 border-2 border-gray-200 focus:border-blue-400 w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline"
                name="phone"
                id="phone"
                placeholder="Your Phone"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 characters"
              />
            </div>

            <div className="mb-6">                                                                              
              <textarea
                className="form-control w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 border-2 border-gray-200 focus:border-blue-400 transition duration-300 ease-in-out h-32 resize-none"
                placeholder="Message (optional)"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 mt-4 text-lg font-medium text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Make An Appointment
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Appont;
