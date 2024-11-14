import React from 'react';

function Service() {
  return (
    <>
      <div className="bg-blue-50 chivo-mono py-20">
        <div className="mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-700">Services</h2>
            <p className="mt-4 text-lg text-zinc-600">
              Our consultant service is driven by a relentless pursuit of excellence, offering compassionate care and cutting-edge medical treatments to promote your health and well-being. With a dedicated team of professionals.
            </p>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Therapist Card */}
            <div className="icon-box bg-white p-6 transition-all duration-500 ease-out hover:bg-[#1977cc] hover:text-white  rounded-sm shadow-md">
              <div className="icon mb-4 text-4xl">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Therapist</h4>
              <p className="text-gay-600">
                Our therapists will be by your side every step of the way. Find a therapist for depression, anxiety, stress, grief, and more. Benefit from the Amaha approach of delivering high-quality, affordable treatment. Our therapists speak multiple languages for better communication.
              </p>
              <ul className="mt-4 tet-gray-600">
                <li>Individual and group sessions</li>
                <li>Cognitive Behavioral Therapy (CBT)</li>
                <li>Mindfulness and relaxation techniques</li>
              </ul>
            </div>

            {/* Psychiatrists Card */}
            <div className="icon-box bg-white p-6 transition-all duration-500 ease-out hover:bg-[#1977cc] hover:text-white  rounded-sm shadow-md">
              <div className="icon mb-4 text-blue-400 text-4xl">
                <i className="fas fa-pills"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Psychiatrists</h4>
              <p className="">
                Getting psychiatric help can be daunting. Our highly experienced psychiatrists provide personalized care for conditions like anxiety disorders, mood disorders, and addiction. We use evidence-based treatments to support your mental health journey.
              </p>
              <ul className="mt-4 ">
                <li>Psychiatric assessments and evaluations</li>
                <li>Medication management and therapy</li>
                <li>Integrated treatment plans</li>
              </ul>
            </div>

            {/* Couple Therapist Card */}
            <div className="icon-box bg-white p-6 transition-all duration-500 ease-out hover:bg-[#1977cc] hover:text-white  rounded-sm shadow-md">
              <div className="icon mb-4 text-blue-400 text-4xl">
                <i className="fas fa-hospital-user"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Couple Therapist</h4>
              <p className="">
                Online therapy has proven to be just as effective as in-person couples therapy. Couples experiencing emotional distress can significantly benefit from talking to a therapist together. Rediscover the strengths of your relationship and improve communication.
              </p>
              <ul className="mt-4 ">
                <li>Conflict resolution and communication skills</li>
                <li>Emotionally focused therapy (EFT)</li>
                <li>Intimacy and trust-building exercises</li>
              </ul>
            </div>

            {/* Healing Therapy Card */}
            <div className="icon-box bg-white p-6 transition-all duration-500 ease-out hover:bg-[#1977cc] hover:text-white  rounded-sm shadow-md">
              <div className="icon mb-4 text-blue-400 text-4xl">
                <i className="fas fa-leaf"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Healing Therapy</h4>
              <p className="">
                Healing therapy focuses on holistic approaches to restore balance and promote well-being. Our therapists use techniques such as art therapy, mindfulness, and energy healing to address physical, emotional, and spiritual health.
              </p>
              <ul className="mt-4 ">
                <li>Art therapy and expressive arts</li>
                <li>Energy healing and chakra balancing</li>
                <li>Integration of mind-body practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
