import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { toast } from "react-hot-toast";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Pak Fashions | Stylish, Affordable Clothing in Kenya</title>
        <meta
          name="description"
          content="Shop Pak Fashions for elegant, affordable men's, women's, and kids' clothing, shoes, bags & accessories. Based in Nanyuki, Laikipia."
        />
        <meta
          name="keywords"
          content="pak fashions, stylish clothes, affordable fashion Kenya, Nanyuki fashion, Laikipia fashion, elegant wear, thrift fashion"
        />
        <meta name="author" content="Pak Fashions developer (~frank)" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for Facebook, WhatsApp */}
        <meta
          property="og:title"
          content="Pak Fashions | Unleash Your Elegance"
        />
        <meta
          property="og:description"
          content="Affordable, trendy fashion for men, women, and kids. Located in Nanyuki 🌸 Fast delivery. 🌍"
        />
        <meta
          property="og:image"
          content="https://pakfashions.co.ke/PakFashions-logo.jpg"
        />
        <meta property="og:url" content="https://pakfashions.co.ke" />
        <meta property="og:type" content="website" />

        {/* Twitter Card (optional) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pak Fashions" />
        <meta
          name="twitter:description"
          content="Affordable, sustainable fashion in Kenya. For men, women, and kids."
        />
        <meta
          name="twitter:image"
          content="https://pakfashions.co.ke/PakFashions-logo.jpg"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ClothingStore",
            name: "Pak Fashions",
            image: "https://pakfashions.co.ke/PakFashions-logo.jpg",
            description:
              "Stylish and affordable clothing store for men, women, and kids. Based in Nanyuki, Laikipia, Kenya.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "237G+MQ6, Nanyuki",
              addressLocality: "Nanyuki",
              addressRegion: "Laikipia",
              addressCountry: "KE",
            },
            telephone: "+254 726 329 260",
            email: "info@pakfashion.co.za",
            url: "https://pakfashions.co.ke",
            sameAs: [
              "https://facebook.com/pakfashions",
              "https://instagram.com/pakfashions",
            ],
            openingHours: "Mo-Su 07:00-21:00",
          })}
        </script>
      </Helmet>
      {fontLink}
      <main
        className="min-h-screen bg-white text-black"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Hero Section */}
        <section
          className="relative flex flex-col justify-center items-center text-center px-6 py-32 md:py-40 bg-cover bg-center bg-black text-white"
          style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.7), rgba(0,0,0,0.7)), url('./PakFashionslogo.jpg')`,
          }}
        >
          {/* <section
          className="relative flex flex-col justify-center items-center text-center px-6 py-32 md:py-40 bg-cover bg-center bg-black text-white"
          style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.7), rgba(0,0,0,0.7)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTon1Hk_Hhi4vMcBzAR-lp2JWeQDv_CiA7mdQ&s')`,
          }}
        > */}
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
            Discover quality loved fashion — refresh your wardrobe without
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
            Our carefully curated collection offers trendy options supporting
            the community and making the world a beautiful place.
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

          <form
            className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
            onSubmit={handleSubscribe}
          >
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
                  src={`${blog.image}`}
                  // src={`https://picsum.photos/400/300?random=${index + 1}`}
                  alt={`Blog ${blog.title}`}
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
                  Read More →
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
              <Link to={`/product/${item._id}`}>
              <img
                key={item._id}
                src={item.image}
                alt="beaded"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 rounded-lg"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              />
              </Link>
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
                <p className="italic text-gray-700 mb-3">
                  "{testimonial.message}"
                </p>
                <div className="font-semibold text-black">
                  –{testimonial.name}
                </div>
                <span className="text-gray-500 text-xs">Verified Buyer</span>
              </div>
            ))}
          </div>
          <Link
            to={`/testimonials`}
            className="text-yellow-500 font-medium hover:underline flex items-center justify-center mt-6"
          >
            Read More <ArrowRight className="ml-2" size={18} />
          </Link>
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
            <Link
              to={`/faqs`}
              className="text-yellow-500 font-medium hover:underline flex items-center justify-end"
            >
              Read More <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
