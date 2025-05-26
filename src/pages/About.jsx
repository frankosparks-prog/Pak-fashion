import React, { useEffect } from "react";
import { FaRecycle, FaUsers, FaHeart, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 text-blue-900 px-6 py-20 mt-12">
      {/* Hero Section */}
      <div className="text-center mb-20" data-aos="fade-down">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
          About Pak Fashion
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-800 leading-relaxed">
          Quality pre-loved fashion with a purpose — making style affordable, sustainable, and community-driven.
        </p>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
      </div>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto mb-24 grid md:grid-cols-2 gap-16 items-center">
        <img
          src="https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80"
          alt="Pak Fashion Store"
          className="rounded-3xl shadow-2xl w-full object-cover h-96 hover:scale-105 transition-transform duration-500"
          data-aos="fade-right"
        />
        <div data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-800 relative">
            <span className="border-l-4 border-blue-600 pl-4">Our Story & Mission</span>
          </h2>
          <p className="text-blue-800 leading-relaxed text-lg mb-4">
            Founded in 2018, Pak Fashion is dedicated to providing high-quality, affordable second-hand clothing to our community. We believe in extending the life of fashion while promoting sustainability and reducing waste.
          </p>
          <p className="text-blue-800 leading-relaxed text-lg">
            Our carefully curated collection supports eco-friendly shopping habits and helps customers find unique styles without compromising their budget or the planet.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="text-center mb-28 px-4" data-aos="zoom-in">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 tracking-wide text-blue-800">
          What We Stand For
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <FaRecycle className="text-5xl text-emerald-600 mb-5 mx-auto" />,
              title: "Sustainability",
              desc: "Giving clothes a second life to reduce fashion waste and protect the environment.",
            },
            {
              icon: <FaUsers className="text-5xl text-blue-600 mb-5 mx-auto" />,
              title: "Community",
              desc: "Supporting local families and fostering connections through affordable, quality clothing.",
            },
            {
              icon: <FaHeart className="text-5xl text-pink-500 mb-5 mx-auto" />,
              title: "Passion",
              desc: "Passionate about fashion that’s both stylish and responsible.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300 border border-blue-100"
              data-aos={`flip-${i === 0 ? "left" : i === 1 ? "up" : "right"}`}
            >
              {icon}
              <h3 className="text-xl font-semibold mb-3 text-blue-900">{title}</h3>
              <p className="text-blue-700 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative max-w-5xl mx-auto mb-24 px-8 py-12 bg-white rounded-3xl shadow-xl" data-aos="fade-up">
        <div className="absolute inset-x-0 top-0 h-1 bg-blue-500 rounded-t-3xl" />
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-blue-900">
          Why Shop With Pak Fashion?
        </h2>
        <p className="text-center text-blue-700 leading-relaxed text-lg max-w-3xl mx-auto">
          We combine affordability, quality, and sustainability. Every item in our store is carefully inspected and selected to ensure you get great style without compromising the planet. Join us in making fashion circular and empowering our local community.
        </p>
      </section>

      {/* Contact CTA */}
      <div className="text-center" data-aos="zoom-in-up">
        <Link to="/contact" aria-label="Contact Us Page">
          <button className="mt-6 inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg transition duration-300">
            <FaPhoneAlt className="text-lg" />
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
