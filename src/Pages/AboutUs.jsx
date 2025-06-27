import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Empowering people to connect, share, and grow through shared hobbies and interests.
        </p>
      </div>

      {/* Two Column Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image/Visual */}
        <div className="flex-1">
          <img
            src="https://i.ibb.co/4wPqXCGp/6241ecde-8dd7-4493-8733-e9e35141680b.png"
            alt="Community"
            className="rounded-xl shadow-lg w-full max-w-md mx-auto"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            HobbyHub is a platform created for hobby enthusiasts of all kinds — from photography and painting to tech
            and travel. We believe in the power of shared interests to bring people together and build lasting
            communities.
          </p>

          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We make it simple to start or join local interest groups, attend events, and make meaningful connections.
            Our mission is to inspire learning, growth, and fun — both online and offline.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To become the go-to platform for hobby communities worldwide — where creativity meets connection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
