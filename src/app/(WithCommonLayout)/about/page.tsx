import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          About <span className="text-indigo-600">homeHunt</span>
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
          Revolutionizing the way you find your perfect home.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-3xl mx-auto mb-20 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600">
          At HomeHunt, we believe everyone deserves a home that fits their
          dreams. We simplify rentals by connecting tenants with verified
          properties, offering transparency, and eliminating hidden costs.
        </p>
      </div>

      {/* Key Features */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3 mb-20">
        {[
          {
            title: "Verified Listings",
            desc: "Every property is vetted to ensure accuracy and quality.",
            icon: "✅",
          },
          {
            title: "No Broker Fees",
            desc: "Rent directly from owners, saving you money.",
            icon: "💰",
          },
          {
            title: "Smart Search",
            desc: "AI-powered filters to match your exact needs.",
            icon: "🔍",
          },
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <span className="text-2xl">{feature.icon}</span>
            <h3 className="text-lg font-semibold mt-2">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Meet the Team</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              name: "Tohid",
              role: "Founder",
              bio: "Real estate expert with 10+ years of experience.",
            },
            {
              name: "Hasibul",
              role: "Tech Lead",
              bio: "Built the platform from the ground up.",
            },
            {
              name: "Jordan",
              role: "Customer Care",
              bio: "Ensures your renting journey is smooth.",
            },
          ].map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-2xl font-bold">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-indigo-600">{member.role}</p>
              <p className="mt-2 text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
