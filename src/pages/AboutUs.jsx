import React from 'react';


const AboutUs = () => {
  return (
    <div className="about-us-container p-4 sm:p-8 max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-auto min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-800">About Us</h1>
      {/* Images Row */}
      <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center items-center mb-10">
        <img src="/src/assets/heroImage.png" alt="Hotel Lobby" className="w-full sm:w-72 h-44 object-cover rounded-xl shadow-lg" />
        <img src="/src/assets/roomImg1.png" alt="Room 1" className="w-full sm:w-72 h-44 object-cover rounded-xl shadow-lg" />
        <img src="/src/assets/roomImg2.png" alt="Room 2" className="w-full sm:w-72 h-44 object-cover rounded-xl shadow-lg" />
      </div>

      {/* Who We Are */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 text-blue-700">Who We Are</h2>
        <p className="text-gray-700 mb-2">
          At <span className="font-semibold text-blue-700">HotelBooking</span>, we are a passionate team of travel and technology enthusiasts committed to revolutionizing the way people book hotels. Our platform is designed to make your journey from searching to booking as smooth as possible, offering a wide range of accommodations, exclusive deals, and a secure booking process.
        </p>
        <p className="text-gray-700 mb-2">
          We partner with top hotels to ensure quality and satisfaction for every guest. Our innovative tools empower hotel owners to manage their properties efficiently, while travelers enjoy a seamless and personalized experience.
        </p>
        <p className="text-gray-700">
          With a focus on customer support and continuous improvement, we strive to be your trusted companion for all your travel needs.
        </p>
      </section>

      {/* Our Story */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 text-blue-700">Our Story</h2>
        <p className="text-gray-700">
          Founded in 2025, our team is passionate about hospitality and technology. We believe in providing a user-friendly platform that empowers both guests and hotel owners to manage bookings with ease and confidence.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 text-blue-700">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4">
          <li>Wide selection of hotels and rooms</li>
          <li>Exclusive deals and offers</li>
          <li>Secure and easy booking process</li>
          <li>Dedicated customer support</li>
        </ul>
      </section>

      {/* Contact Us */}
      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-3 text-blue-700">Contact Us</h2>
        <p className="text-gray-700">
          Have questions or need help? Reach out to us at{' '}
          <a href="mailto:support@hotelbooking.com" className="text-blue-600 underline font-medium">support@hotelbooking.com</a>.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
