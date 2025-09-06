import React from 'react';


const AboutUs = () => {
  return (
    <div className="about-us-container p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
  {/* Company Video */}
      {/* Company Video */}
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <iframe
          className="w-full h-64 rounded-lg shadow"
          src="https://www.youtube.com/embed/1A2V9Xy5p3g"
          title="About Our Company"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {/* Company Description */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
        <p className="text-gray-700 mb-2">
          At HotelBooking, we are a passionate team of travel and technology enthusiasts committed to revolutionizing the way people book hotels. Our platform is designed to make your journey from searching to booking as smooth as possible, offering a wide range of accommodations, exclusive deals, and a secure booking process.
        </p>
        <p className="text-gray-700 mb-2">
          We partner with top hotels to ensure quality and satisfaction for every guest. Our innovative tools empower hotel owners to manage their properties efficiently, while travelers enjoy a seamless and personalized experience.
        </p>
        <p className="text-gray-700">
          With a focus on customer support and continuous improvement, we strive to be your trusted companion for all your travel needs.
        </p>
      </section>
      <h2 className="text-xl font-semibold mt-6 mb-2">Our Story</h2>
      <p className="mb-4 text-gray-700">
        Founded in 2025, our team is passionate about hospitality and technology. We believe in providing a user-friendly platform that empowers both guests and hotel owners to manage bookings with ease and confidence.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Why Choose Us?</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Wide selection of hotels and rooms</li>
        <li>Exclusive deals and offers</li>
        <li>Secure and easy booking process</li>
        <li>Dedicated customer support</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="text-gray-700">
        Have questions or need help? Reach out to us at <a href="mailto:support@hotelbooking.com" className="text-blue-600 underline">support@hotelbooking.com</a>.
      </p>
    </div>
  );
};

export default AboutUs;
