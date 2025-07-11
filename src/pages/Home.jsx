import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { toast } from "react-hot-toast";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const fontLink = (
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap"
    rel="stylesheet"
  />
);

function Home() {
  const [featured, setFeatured] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [instagram, setInstagram] = useState([]);
  const [faq, setFaq] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [email, setEmail] = useState("");
  useEffect(() => {
    AOS.init({ duration: 1100, once: true });
    // Fetch all dynamic content
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [featuredRes, blogsRes, instaRes, faqRes, testimonialsRes] =
        await Promise.all([
          axios.get(`${SERVER_URL}/api/products?tag=Featured&limit=3`),
          axios.get(`${SERVER_URL}/api/blogs?limit=3`),
          axios.get(`${SERVER_URL}/api/products?collection=Instagram&limit=6`),
          axios.get(`${SERVER_URL}/api/faq`),
          axios.get(`${SERVER_URL}/api/testimonials`),
        ]);

      setFeatured(featuredRes.data);
      setBlogs(blogsRes.data);
      setInstagram(instaRes.data);
      setFaq(faqRes.data);
      setTestimonials(testimonialsRes.data);
    } catch (error) {
      console.error("Failed to fetch homepage data:", error);
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${SERVER_URL}/api/subscribe`, { email });
      toast.success("Thanks for subscribing!");
      setEmail("");
    } catch (err) {
      toast.error("Subscription failed. Please try again.");
      console.error(err);
    }
  };
  return (
    <>
      {fontLink}
      <main
        className="min-h-screen bg-white text-black"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Hero Section */}
        <section
          className="relative flex flex-col justify-center items-center text-center px-6 py-32 md:py-40 bg-cover bg-center bg-black text-white"
          style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.7), rgba(0,0,0,0.7)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTon1Hk_Hhi4vMcBzAR-lp2JWeQDv_CiA7mdQ&s')`,
          }}
        >
          <h1
            className="text-5xl md:text-6xl font-extrabold drop-shadow"
            data-aos="fade-down"
          >
            <span className="text-yellow-400">Stylish Clothes</span> & More{" "}
            <br />
            At <span className="text-yellow-300">Unbeatable Prices</span>
          </h1>
          <p
            className="mt-6 max-w-xl text-lg md:text-xl text-yellow-100 font-medium"
            data-aos="fade-up"
          >
            Discover quality pre-loved fashion — refresh your wardrobe without
            hurting the planet.
          </p>
          <Link to="/shop" className="mt-10" data-aos="zoom-in">
            <button className="bg-yellow-400 text-black font-semibold px-10 py-4 rounded-full shadow hover:brightness-110 transform hover:scale-105 transition">
              Shop Now
            </button>
          </Link>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 bg-white text-center">
          <h2
            className="text-4xl font-bold text-yellow-600 mb-6"
            data-aos="fade-up"
          >
            Why Choose Pak Fashion?
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto text-gray-700 font-medium"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            We believe in fashion that’s affordable, sustainable, and stylish.
            Our carefully curated collection offers trendy options while
            reducing waste and supporting the community.
          </p>
        </section>

        {/* Featured Creations */}
        <section className="bg-yellow-50 py-20 px-6">
          <h2
            className="text-4xl font-bold text-center text-black mb-14"
            data-aos="fade-up"
          >
            Featured Picks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {featured.map((item, index) => (
              <Link to={`/product/${item._id}`}>
                <div
                  key={item._id}
                  className="bg-white rounded-lg p-6 shadow hover:shadow-xl hover:-translate-y-2 transition transform"
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                >
                  <div
                    className="h-56 bg-cover bg-center rounded-lg mb-4"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <h3 className="text-xl font-bold text-yellow-600 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm">
                    {item.description}
                  </p>
                  <span className="text-black font-semibold">
                    ksh {item.price}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/shop">
              <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
                View All Products
              </button>
            </Link>
          </div>
        </section>

        {/* Newsletter */}
        <section
          className="bg-black py-20 px-6 text-center text-white"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">
            Join Our Fashion Community
          </h2>
          <p className="text-yellow-100 mb-6 text-lg">
            Get updates on latest styles, exclusive deals, and tips.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 justify-center mt-6" onSubmit={handleSubscribe} >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-5 py-3 rounded-full text-black focus:ring-yellow-300"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transform transition"
            >
              Subscribe
            </button>
          </form>
        </section>

        {/* Blog Section */}
        <section className="bg-white py-20 px-6">
          <h2
            className="text-4xl font-bold text-center text-yellow-600 mb-14"
            data-aos="fade-up"
          >
            Style Tips & Stories from the Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogs.map((blog, index) => (
              <div
                key={blog._id}
                className="bg-yellow-50 p-6 rounded-lg shadow hover:shadow-lg transition"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={`https://picsum.photos/400/300?random=${blog + 30}`}
                  alt={`Blog ${blog}`}
                  className="rounded mb-4"
                />
                <h3 className="text-xl font-bold text-black mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-700 mb-3">{blog.description}</p>
                <Link
                  to={`/blog/${blog._id}`}
                  className="text-yellow-500 font-medium hover:underline"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Instagram Grid */}
        <section className="bg-yellow-50 py-20 px-6">
          <h2
            className="text-4xl font-bold text-center text-black mb-10"
            data-aos="fade-up"
          >
            #PakFashions
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-6xl mx-auto">
             {instagram.map((item, index) => (
            <img
              key={item._id}
              src={item.image}
              alt="beaded"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 rounded-lg"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            />
          ))}
          </div>
        </section>


        {/* Testimonials */}
        <section className="bg-white py-20 px-6">
          <h2
            className="text-4xl font-bold text-center text-yellow-600 mb-12"
            data-aos="fade-up"
          >
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial._id}
                className="bg-yellow-50 p-6 rounded shadow"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <p className="italic text-gray-700 mb-3">"{testimonial.message}"</p>
              <div className="font-semibold text-black">–{testimonial.name}</div>
              <span className="text-gray-500 text-xs">Verified Buyer</span>
            </div>
          ))}
        </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-20 px-6 max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold text-center text-black mb-10"
            data-aos="fade-up"
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">

            {faq.slice(0, 3).map((faq, index) => (
            <div
              key={faq._id}
              className="p-5 border border-yellow-300 rounded-lg"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
               <h3 className="text-lg font-bold text-yellow-600 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-800">{faq.answer}</p>
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
//       const [featuredRes, blogsRes, instaRes, faqRes, testimonialsRes] = await Promise.all([
//         axios.get(`${SERVER_URL}/api/products?tag=Featured&limit=3`),
//         axios.get(`${SERVER_URL}/api/blogs?limit=3`),
//         axios.get(`${SERVER_URL}/api/products?collection=BeadedWithLove&limit=6`),
//         axios.get(`${SERVER_URL}/api/products?collection=Inspiration&limit=3`),
//         axios.get(`${SERVER_URL}/api/testimonials`),
//       ]);

//       setFeatured(featuredRes.data);
//       setBlogs(blogsRes.data);
//       setBeaded(instaRes.data);
//       setInspiration(faqRes.data);
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
