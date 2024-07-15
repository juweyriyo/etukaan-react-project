import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
        <p className="text-gray-700 mb-4">
          Welcome to our platform! We are dedicated to providing the best tutoring services to help students excel in their studies. Our team of experienced tutors is here to guide you through every step of your learning journey.
        </p>
        <p className="text-gray-700 mb-4">
          Our mission is to make quality education accessible to everyone. We believe that personalized learning can make a significant difference in a student's academic performance and overall confidence. That's why we focus on matching students with tutors who meet their individual needs and learning styles.
        </p>
        <p className="text-gray-700 mb-4">
          We offer a variety of subjects and levels, from elementary school to college, ensuring that each student receives the support they need. Our platform is user-friendly and designed to make scheduling sessions and tracking progress as seamless as possible.
        </p>
        <p className="text-gray-700 mb-4">
          Thank you for choosing our platform. We look forward to helping you achieve your academic goals!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
