import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Quote } from 'lucide-react';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(`${SERVER_URL}/api/testimonials`);
        setTestimonials(res.data);
      } catch (err) {
        console.error('Failed to load testimonials:', err);
      }
    };
    fetchTestimonials();
  }, []);

  // Limit to 9 if showAll is false
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 9);

  return (
    <div className="min-h-screen bg-white py-20 px-6 sm:px-12 lg:px-24 font-sans text-black mt-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold text-black mb-4">What Our Customers Say</h1>
        <p className="text-lg text-yellow-700">
          Real experiences from people who love our handcrafted fashion.
        </p>
        <div className="w-24 h-1 bg-yellow-500 rounded-full mx-auto mt-4"></div>
      </div>

      {testimonials.length === 0 ? (
        <p className="text-center text-yellow-600">No testimonials yet.</p>
      ) : (
        <>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {displayedTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 shadow hover:shadow-md transition relative"
              >
                <Quote className="text-yellow-600 absolute -top-4 -left-4 bg-white p-2 rounded-full shadow" size={32} />

                <p className="text-black text-base leading-relaxed mb-6 italic">
                  “{t.message}”
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-black">{t.name}</h4>
                    <p className="text-sm text-yellow-700">{new Date(t.date).toLocaleDateString()}</p>
                  </div>
                  {t.isVerified && (
                    <span className="text-xs bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full font-semibold">
                      Verified
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Show More / Show Less Button */}
          {testimonials.length > 9 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full shadow transition"
              >
                {showAll ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Testimonials;
