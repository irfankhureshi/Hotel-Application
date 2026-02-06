import React from "react";

const About = () => {
  return (
    <section className="min-h-screen  text-white px-6 sm:px-10 lg:px-24 py-36 bg-[url('About.jpg')] bg-cover bg-no-repeat">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <p className="inline-block px-4 py-1 text-sm rounded-full bg-blue-900 text-blue-200">
          About Our Hotel App
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
          Redefining the Way You <br className="hidden sm:block" /> Experience Hotels
        </h1>

        <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg">
          Our hotel app is designed to make every stay smooth, comfortable, and memorable.
          From effortless booking to personalized services, we bring hospitality closer to you.
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Who We Are
          </h2>

          <p className="text-gray-300 leading-relaxed">
            We are a team of passionate designers, developers, and hospitality experts
            committed to building a seamless hotel booking and management experience.
            Our app connects travelers with trusted hotels across the globe.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Whether you are traveling for business, leisure, or a special occasion,
            our platform ensures you find the perfect stay with confidence and ease.
          </p>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Smart Booking",
              desc: "Search, compare, and book hotels instantly with transparent pricing."
            },
            {
              title: "Secure Payments",
              desc: "Fast, encrypted, and trusted payment methods for peace of mind."
            },
            {
              title: "Digital Experience",
              desc: "Contactless check-in, room services, and real-time notifications."
            },
            {
              title: "24/7 Support",
              desc: "Dedicated customer support whenever you need assistance."
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#020617] border border-gray-700 rounded-xl p-6 hover:border-blue-600 transition"
            >
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto mt-24 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {[
          { value: "10K+", label: "Hotels" },
          { value: "50+", label: "Countries" },
          { value: "4.8★", label: "User Rating" },
          { value: "1M+", label: "Users" },
        ].map((stat, i) => (
          <div key={i} className="space-y-2">
            <h3 className="text-3xl font-bold text-blue-500">
              {stat.value}
            </h3>
            <p className="text-gray-400 text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <div className="max-w-4xl mx-auto mt-24 text-center">
        <p className="text-gray-400 text-base sm:text-lg">
          We don’t just help you book hotels —  
          <span className="text-white font-semibold"> we create experiences you’ll remember.</span>
        </p>
      </div>

    </section>
  );
};

export default About;
