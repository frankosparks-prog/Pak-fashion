import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { ArrowRight, Truck, Sparkles, Users, Gift } from "lucide-react";
import { Helmet } from "react-helmet-async";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const fontLink = (
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap"
    rel="stylesheet"
  />
);
const perks = [
  {
    icon: <Truck className="h-8 w-8 text-yellow-500" />,
    title: "Fast & Global Delivery",
    description: "From Nanyuki to the world – get your order wherever you are!",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-yellow-500" />,
    title: "New Styles Weekly",
    description:
      "Fresh drops every week. Follow us @pakfashions to stay trendy.",
  },
  {
    icon: <Users className="h-8 w-8 text-yellow-500" />,
    title: "Loved by Fashionistas",
    description: "Hundreds of happy icons across Kenya and beyond!",
  },
  {
    icon: <Gift className="h-8 w-8 text-yellow-500" />,
    title: "Give the Gift of Style",
    description: "We offer stylish gift cards for your loved ones.",
  },
];
function Home() {
  const [featured, setFeatured] = useState([]);
  // const [blogs, setBlogs] = useState([]);
  // const [faq, setFaq] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    AOS.init({ duration: 1100, once: true });
    // Fetch all dynamic content
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [
        featuredRes,
        // faqRes,
        testimonialsRes,
        newArrivalsRes,
        bestSellerRes,
      ] = await Promise.all([
        axios.get(`${SERVER_URL}/api/products?category=Clearance Sale&limit=4`),
        // axios.get(`${SERVER_URL}/api/blogs?limit=3`),
        // axios.get(`${SERVER_URL}/api/faq`),
        axios.get(`${SERVER_URL}/api/testimonials`),
        axios.get(`${SERVER_URL}/api/products?tag=New Arrival&limit=4`),
        axios.get(`${SERVER_URL}/api/products?tag=Bestseller&limit=4`),
      ]);

      setFeatured(featuredRes.data);
      // setBlogs(blogsRes.data);
      // setFaq(faqRes.data);
      setTestimonials(testimonialsRes.data);
      setNewArrivals(newArrivalsRes.data);
      setBestSeller(bestSellerRes.data);
    } catch (error) {
      console.error("Failed to fetch homepage data:", error);
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
              "https://web.facebook.com/PAKFASHIONSKE",
              "https://www.instagram.com/pakfashionske?igsh=MXZsbXd3YnRhamltYg==",
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
          className="relative flex flex-col justify-center items-center text-center px-6 h-[50vh] md:h-auto py-20 md:py-40 bg-cover bg-center bg-black text-white"
          // style={{
          //   backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.7), rgba(0,0,0,0.7)), url('./PakFashionslogo.jpg')`,
          // }}
        >
          <h1
            className="text-4xl md:text-6xl font-extrabold drop-shadow mt-8"
            data-aos="fade-down"
          >
            <span className="text-yellow-600">Where style meets </span>{" "}
            <br />
            every generation{" "}
          </h1>
          <p
            className="mt-4 md:mt-6 max-w-xl text-base md:text-xl text-yellow-100 font-medium"
            data-aos="fade-up"
          >
            Fashion that fits you and your budget.
          </p>
          <Link to="/shop" className="mt-6 md:mt-10" data-aos="zoom-in">
            <button className="bg-yellow-500 text-black font-semibold px-8 md:px-10 py-3 md:py-4 rounded-full shadow hover:brightness-110 transform hover:scale-105 transition">
              Shop Now
            </button>
          </Link>
        </section>

        {/* About Section */}
        {/* <section className="py-20 px-6 bg-white text-center">
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
        </section> */}

        {/* New Arrivals*/}
        <section className="bg-yellow-50 py-20 px-6">
          <h2
            className="text-4xl font-bold text-center text-black mb-14"
            data-aos="fade-up"
          >
            New Arrivals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {newArrivals.map((item, index) => (
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
        </section>

        <section className="bg-yellow-50 py-20 px-6">
          <h2
            className="text-4xl font-bold text-center text-black mb-14"
            data-aos="fade-up"
          >
            Sale upto 50% Off
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
        </section>

        {/* Best Sellers */}
        <section className="bg-yellow-50 py-20 px-6">
          <h2
            className="text-4xl font-bold text-center text-black mb-14"
            data-aos="fade-up"
          >
            Best Seller
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {bestSeller.map((item, index) => (
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
              <button className="bg-yellow-700 text-white px-6 py-2 rounded-lg hover:bg-yellow-800 transition">
                View All Products
              </button>
            </Link>
          </div>
        </section>
        {/* Blog Section */}
        {/* <section className="bg-white py-20 px-6">
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
                  // src={`https://picsum.photos/600/600?random=${index + 1}`}
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
        </section> */}
        <section className="bg-yellow-50 py-20 px-6">
          <h2
            className="text-4xl font-bold text-center text-black mb-12"
            data-aos="fade-up"
          >
            Why Shop With Us?
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {perks.map((perk, idx) => (
              <div
                key={idx}
                className="bg-black p-6 rounded-2xl shadow hover:shadow-xl text-center transition duration-600 transform hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div className="flex justify-center mb-4">{perk.icon}</div>
                <h3 className="text-lg font-semibold text-yellow-600 mb-2">
                  {perk.title}
                </h3>
                <p className="text-gray-200 text-sm">{perk.description}</p>
              </div>
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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.slice(0, 2).map((testimonial, index) => (
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
        {/* <section className="bg-white py-20 px-6 max-w-4xl mx-auto">
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
                className="p-5 border border-yellow-600 rounded-lg"
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
        </section> */}
      </main>
    </>
  );
}

export default Home;
