import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Google Fonts Poppins
const fontLink = (
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap"
    rel="stylesheet"
  />
);

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1100, once: true });
  }, []);

  return (
    <>
      {fontLink}
      <main
        className="min-h-screen bg-gray-50 text-gray-900"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Hero Section */}
        <section
          className="relative flex flex-col justify-center items-center text-center px-6 py-32 md:py-40 bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.6), rgba(30, 64, 175, 0.6)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTon1Hk_Hhi4vMcBzAR-lp2JWeQDv_CiA7mdQ&s')`,
          }}
          aria-label="Hero Section"
        >
        {/* <section
          className="relative flex flex-col justify-center items-center text-center px-6 py-32 md:py-40 bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 text-white"
          aria-label="Hero Section"
        > */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            viewBox="0 0 800 600"
          >
            <circle cx="400" cy="300" r="300" fill="url(#grad1)" />
            <defs>
              <radialGradient
                id="grad1"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
                spreadMethod="pad"
              >
                <stop offset="0%" stopColor="#d8b4fe" />
                <stop offset="100%" stopColor="#6366f1" />
              </radialGradient>
            </defs>
          </svg>

          <h1
            className="relative z-10 text-white text-5xl md:text-6xl font-extrabold max-w-4xl drop-shadow-lg"
            data-aos="fade-down"
          >
            Stylish Clothes and more and more
            <br />
            At Unbeatable Prices
          </h1>
          <p
            className="relative z-10 mt-6 max-w-3xl text-lg md:text-xl font-medium text-blue-200 drop-shadow"
            data-aos="fade-up"
          >
            Discover sustainable fashion with quality pre-loved items — refresh
            your wardrobe without hurting the planet.
          </p>
          <Link to="/shop" className="relative z-10 mt-10">
            <button
              className="bg-gradient-to-r from-purple-600 to-blue-700 text-white font-semibold px-10 py-4 rounded-lg shadow-lg hover:brightness-110 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400"
              data-aos="zoom-in"
            >
              Shop Now
            </button>
          </Link>
        </section>

        {/* About Section */}
        <section
          className="py-20 px-6 bg-white max-w-5xl mx-auto text-center"
          aria-labelledby="about-heading"
        >
          <h2
            id="about-heading"
            className="text-4xl font-semibold mb-6 tracking-wide text-blue-900"
            data-aos="fade-up"
          >
            Why Choose Pak Fashion?
          </h2>
          <p
            className="text-blue-700 text-lg leading-relaxed max-w-3xl mx-auto font-medium"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            We believe in fashion that’s affordable, sustainable, and stylish.
            Our carefully curated collection of  clothes and more gives you
            trendy options while reducing waste and supporting the community.
          </p>
        </section>

        {/* Featured Products */}
        <section className="bg-blue-50 py-20 px-6">
          <h2
            className="text-4xl font-semibold text-center mb-14 tracking-tight text-blue-900"
            data-aos="fade-up"
          >
            Featured Picks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[1, 2, 3].map((item) => (
              <article
                key={item}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={item * 150}
                tabIndex={0}
                role="group"
                aria-label={`Featured Clothing Item ${item}`}
              >
                <div
                  className="h-56 bg-cover bg-center rounded-lg mb-5 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://picsum.photos/400/500?random=${
                      item + 20
                    }')`,
                  }}
                  aria-hidden="true"
                />
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                  Stylish Jacket {item}
                </h3>
                <p className="text-gray-600 mb-4 text-base font-light">
                  Trendy and comfy  jacket, perfect for all seasons.
                </p>
                <span className="font-bold text-blue-700 text-lg">
                  ksh 40.00
                </span>
              </article>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link to="/shop">
              <button className="bg-gradient-to-r from-purple-600 to-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:brightness-110 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400">
                View All Products
              </button>
            </Link>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section
          className="py-20 px-6 bg-white text-center max-w-xl mx-auto"
          data-aos="fade-up"
          aria-label="Newsletter Signup"
        >
          <h2 className="text-4xl font-semibold text-blue-900 mb-6">
            Join Our Fashion Community
          </h2>
          <p className="text-blue-700 mb-8 text-lg font-medium">
            Subscribe to get the latest styles, exclusive deals, and sustainable
            fashion tips.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-5 justify-center"
            aria-live="polite"
          >
            <input
              type="email"
              aria-label="Email address"
              placeholder="Enter your email"
              className="px-5 py-3 border border-blue-300 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-500 flex-grow text-lg"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-blue-700 text-white font-semibold px-8 py-3 rounded-md shadow-md hover:brightness-110 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              Subscribe
            </button>
          </form>
        </section>

        {/* Blog Section */}
        <section className="bg-blue-50 py-20 px-6">
          <h2
            className="text-4xl font-semibold text-center mb-14 tracking-tight text-blue-900"
            data-aos="fade-up"
          >
            Style Tips & Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[1, 2, 3].map((blog) => (
              <article
                key={blog}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={blog * 100}
                tabIndex={0}
                role="group"
                aria-label={`Blog Post ${blog}`}
              >
                <img
                  src={`https://picsum.photos/400/300?random=${blog + 30}`}
                  alt={`Blog thumbnail ${blog}`}
                  className="w-full h-52 object-cover rounded-md mb-5"
                  loading="lazy"
                />
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                  Blog Title {blog}
                </h3>
                <p className="text-gray-600 mb-5 text-base font-light">
                  Expert tips on rocking  fashion and making it your
                  own.
                </p>
                <Link
                  to={`/blog/${blog}`}
                  className="text-blue-700 font-medium hover:underline"
                >
                  Read More &rarr;
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Instagram Grid */}
        <section className="py-20 px-6 bg-white">
          <h2
            className="text-4xl font-semibold text-center mb-14 tracking-wide text-blue-900"
            data-aos="fade-up"
          >
            #Pak Fashion
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {[7, 8, 9, 10, 11, 12].map((img) => (
              <div
                key={img}
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={img * 20}
                tabIndex={0}
                role="img"
                aria-label={`Instagram image ${img}`}
              >
                <img
                  src={`https://picsum.photos/400/250?random=${img + 40}`}
                  alt="Instagram Grid"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 px-6 bg-white">
          <h2
            className="text-4xl font-semibold text-center mb-14 tracking-wide text-blue-900"
            data-aos="fade-up"
          >
            Shop Our Collection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[4, 5, 6].map((item) => (
              <div
                key={item}
                className="rounded overflow-hidden shadow-md hover:shadow-xl transition"
                data-aos="fade-up"
                data-aos-delay={item * 100}
              >
                <img
                  src={`https://picsum.photos/400/250?random=${item + 50}`}
                  alt="Gallery"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="bg-blue-50 py-20 px-6">
          <h2
            className="text-4xl font-semibold text-center mb-14 text-blue-900"
            data-aos="fade-up"
          >
            What Our Customers Say
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "Sarah",
                feedback:
                  "Absolutely love the quality of the clothes and more. Great value and service!",
              },
              {
                name: "James",
                feedback:
                  "It’s refreshing to see sustainable fashion done right!",
              },
              {
                name: "Maria",
                feedback:
                  "Fast delivery and beautiful packaging. I’m coming back for more.",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <p className="text-gray-700 text-lg italic">
                  “{testimonial.feedback}”
                </p>
                <h3 className="mt-4 text-blue-900 font-semibold text-xl">
                  – {testimonial.name}
                </h3>
              </div>
            ))}
          </div>
        </section>
        {/* FAQ Section */}
        <section className="py-20 px-6 bg-white max-w-4xl mx-auto">
          <h2
            className="text-4xl font-semibold text-center text-blue-900 mb-10"
            data-aos="fade-up"
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Are the clothes cleaned before delivery?",
                a: "Yes, all clothes are thoroughly cleaned and inspected before being sent out.",
              },
              {
                q: "Can I return or exchange items?",
                a: "Yes, we offer returns within 7 days of delivery. See our returns policy for full details.",
              },
              {
                q: "Do you deliver outside Kenya?",
                a: "Currently, we only deliver within Kenya but are working to expand soon.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-blue-200 rounded-lg p-5"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import axios from "axios";
// import { toast } from 'react-hot-toast';

// const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// function Home() {
//   const [featured, setFeatured] = useState([]);
//   const [blogs, setBlogs] = useState([]);
//   const [beaded, setBeaded] = useState([]);
//   const [inspiration, setInspiration] = useState([]);
//   const [testimonials, setTestimonials] = useState([]);
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     AOS.init({ duration: 1000 });

//     // Fetch all dynamic content
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const [featuredRes, blogsRes, beadedRes, inspirationRes, testimonialsRes] = await Promise.all([
//         axios.get(`${SERVER_URL}/api/products?tag=Featured&limit=3`),
//         axios.get(`${SERVER_URL}/api/blogs?limit=3`),
//         axios.get(`${SERVER_URL}/api/products?collection=BeadedWithLove&limit=6`),
//         axios.get(`${SERVER_URL}/api/products?collection=Inspiration&limit=3`),
//         axios.get(`${SERVER_URL}/api/testimonials`),
//       ]);

//       setFeatured(featuredRes.data);
//       setBlogs(blogsRes.data);
//       setBeaded(beadedRes.data);
//       setInspiration(inspirationRes.data);
//       setTestimonials(testimonialsRes.data);
//     } catch (error) {
//       console.error("Failed to fetch homepage data:", error);
//     }
//   };

//   const handleSubscribe = async (e) => {
//   e.preventDefault();
//   try {
//     await axios.post(`${SERVER_URL}/api/subscribe`, { email });
//     toast.success("Thanks for subscribing!");
//     setEmail("");
//   } catch (err) {
//     toast.error("Subscription failed. Please try again.");
//     console.error(err);
//   }
// };

//   return (
//     <div>
//       {/* Hero Section */}
//       <section
//         className="bg-cover bg-center text-center py-32 px-4"
//         style={{
//           backgroundImage:
//             "url('https://img.freepik.com/free-photo/multi-colored-balls-with-abstract-patterns-shiny-jewelry-generated-by-ai_188544-21784.jpg?t=st=1746705694~exp=1746709294~hmac=bd738b84a458eea4b3629a724ba873af955632319fbe3d6d03ba59f6b41b00a8&w=1060')",
//         }}
//       >
//         <h1
//           className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg"
//           data-aos="fade-down"
//         >
//           Handmade Beadworks, Crafted with Love
//         </h1>
//         <p
//           className="text-lg text-white mb-6 max-w-xl mx-auto drop-shadow-lg"
//           data-aos="fade-up"
//         >
//           Explore our unique collection of beaded mats, jewelry, and home decor
//           — each piece tells a story.
//         </p>
//         <Link to="/shop">
//           <button
//             className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
//             data-aos="zoom-in"
//           >
//             Shop Now
//           </button>
//         </Link>
//       </section>

//       {/* About Section */}
//       <section className="py-16 px-6 text-center bg-white">
//         <h2
//           className="text-3xl font-semibold mb-4 text-blue-900"
//           data-aos="fade-up"
//         >
//           Our Story
//         </h2>
//         <p
//           className="text-blue-800 max-w-2xl mx-auto"
//           data-aos="fade-up"
//           data-aos-delay="200"
//         >
//           Every bead, every stitch, every color — tells a story rooted in
//           African tradition and modern creativity. We are passionate about
//           sharing the beauty of handmade craft with the world.
//         </p>
//       </section>

//       {/* Featured Creations */}
//       <section className="bg-blue-50 py-16 px-6">
//         <h2 className="text-3xl font-semibold text-center mb-10 text-blue-900" data-aos="fade-up">
//           Featured Creations
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {featured.map((item, index) => (
//             <Link to={`/product/${item._id}`}>
//             <div
//               key={item._id}
//               className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition transform hover:-translate-y-1"
//               data-aos="zoom-in"
//               data-aos-delay={index * 150}
//             >
//               <div
//                 className="h-48 bg-cover bg-center rounded mb-4"
//                 style={{ backgroundImage: `url(${item.image})` }}
//               ></div>
//               <h3 className="text-xl font-semibold text-blue-800">{item.name}</h3>
//               <p className="text-sm text-gray-600 mt-1 mb-2">{item.description}</p>
//               <span className="font-bold text-blue-700">ksh {item.price}</span>
//             </div>
//             </Link>
//           ))}
//         </div>
//         <div className="text-center mt-10">
//           <Link to="/shop">
//             <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
//               View All Products
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* Newsletter Signup */}
//       <section className="py-16 px-6 bg-white text-center" data-aos="fade-up">
//         <h2 className="text-3xl font-semibold text-blue-900 mb-4">Stay in the Loop</h2>
//         <p className="text-blue-800 mb-6">
//           Subscribe to our newsletter for updates, deals, and stories from our workshop.
//         </p>
//         <form onSubmit={handleSubscribe} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 justify-center">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
//           />
//           <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
//             Subscribe
//           </button>
//         </form>
//       </section>

//       {/* Blog Section */}
//       <section className="py-16 px-6 bg-blue-50">
//         <h2 className="text-3xl font-semibold text-center mb-10 text-blue-900" data-aos="fade-up">
//           From the Blog
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {blogs.map((blog, index) => (
//             <div
//               key={blog._id}
//               className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-4"
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             >
//               <img
//                 src={"https://img.freepik.com/free-photo/multi-colored-balls-with-abstract-patterns-shiny-jewelry-generated-by-ai_188544-21784.jpg?t=st=1746705694~exp=1746709294~hmac=bd738b84a458eea4b3629a724ba873af955632319fbe3d6d03ba59f6b41b00a8&w=1060"}
//                 alt="blog"
//                 className="w-full h-48 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-xl font-semibold text-blue-800 mb-2">{blog.title}</h3>
//               <p className="text-sm text-gray-600 mb-2">{blog.description}</p>
//               <Link to={`/blog/${blog._id}`} className="text-blue-700 font-medium hover:underline">
//                 Read More
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* #BeadedWithLove Instagram-style Grid */}
//       <section className="py-16 px-6 bg-white">
//         <h2 className="text-3xl font-semibold text-center mb-10 text-blue-900" data-aos="fade-up">
//           #BeadedWithLove
//         </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-6xl mx-auto">
//           {beaded.map((item, index) => (
//             <img
//               key={item._id}
//               src={item.image}
//               alt="beaded"
//               className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 rounded-lg"
//               data-aos="zoom-in"
//               data-aos-delay={index * 100}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Inspiration Gallery */}
//       <section className="py-16 px-6 bg-white">
//         <h2 className="text-3xl font-semibold text-center mb-10 text-blue-900" data-aos="fade-up">
//           Inspiration Gallery
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {inspiration.map((item, index) => (
//             <img
//               key={item._id}
//               src={item.image}
//               alt="inspiration"
//               className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             />
//           ))}
//         </div>
//       </section>
//       {/* Testimonials */}
//       <section className="py-16 px-6 bg-blue-50">
//         <h2 className="text-3xl font-semibold text-center mb-10 text-blue-900" data-aos="fade-up">
//           What Our Customers Say
//         </h2>
//         <div className="flex flex-col md:flex-row justify-center items-center gap-6">
//           {testimonials.slice(0, 3).map((testimonial, index) => (
//             <div
//               key={testimonial._id}
//               className="bg-white p-6 rounded-lg shadow-lg max-w-xs"
//               data-aos="fade-up"
//               data-aos-delay={index * 150}
//             >
//               <p className="text-sm text-gray-600 mb-4">"{testimonial.message}"</p>
//               <div className="text-blue-800 font-semibold">{testimonial.name}</div>
//               <span className="text-gray-500 text-xs">Verified Buyer</span>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;
