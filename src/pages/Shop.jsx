import React, { useState, useEffect } from "react";
import {
  FaHeart,
  FaCartPlus,
  FaSearch,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

AOS.init();

const sampleProducts = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `Sample Product ${i + 1}`,
  image: `https://picsum.photos/300/300?random=${i + 1}`,
  price: 1000 + i * 100,
  category: [
    "Men's Clothing",
    "Women's Clothing",
    "Kids' Clothing",
    "Shoes",
    "Bags & Accessories",
  ][i % 7],
  tag: ["New Arrival", "Bestseller", "Featured"][i % 3],
  dateAdded: Date.now() - i * 10000000,
  rating: 5 - (i % 5),
}));

function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [likedProducts, setLikedProducts] = useState([]);
  const itemsPerPage = 6;
  const { addToCart } = useCart();

  useEffect(() => {
    AOS.refresh();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1); // Reset page when filtering
  };

  const filteredProducts = sampleProducts
    .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((p) =>
      selectedCategories.length ? selectedCategories.includes(p.category) : true
    )
    .filter((p) => p.price <= maxPrice)
    .sort((a, b) => {
      switch (sortOption) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "newest":
          return b.dateAdded - a.dateAdded;
        case "rated":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleLike = (productId) => {
    setLikedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const categories = [
    "Men's Clothing",
    "Women's Clothing",
    "Kids' Clothing",
    "Shoes",
    "Bags & Accessories",
  ];

  const tags = ["New Arrival", "Bestseller", "Featured"];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} className="text-yellow-400" />
        ) : (
          <FaRegStar key={i} className="text-yellow-300" />
        )
      );
    }
    return stars;
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen px-6 py-12 sm:px-12 lg:px-20 mt-12 font-sans text-blue-900">
      {/* Hero */}
      <header className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-5xl font-extrabold tracking-tight mb-3 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-400">
          Shop Our Collection
        </h1>
        <div className="mx-auto max-w-3xl text-blue-700 text-lg">
          <p>
            Discover handcrafted jewelry made with love and tradition. Find your
            perfect piece today.
          </p>
          <div className="h-1 w-28 bg-blue-400 rounded-full mx-auto mt-4"></div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Filters Sidebar */}
        <aside
          className="md:w-1/4 bg-white p-8 rounded-2xl shadow-lg border border-blue-100 sticky top-24 self-start"
          // data-aos="fade-right"
          aria-label="Filters Sidebar"
        >
          <div className="space-y-10">
            {/* Search */}
            <div>
              <h2 className="text-2xl font-semibold mb-5 border-b border-blue-200 pb-2">
                Search Products
              </h2>
              <div className="relative text-blue-600 focus-within:text-blue-900">
                <FaSearch className="absolute left-4 top-3.5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-12 pr-4 py-3 border border-blue-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  aria-label="Search products"
                />
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-semibold text-xl mb-5 border-b border-blue-200 pb-2">
                Categories
              </h3>
              <div className="flex flex-col space-y-4 max-h-52 overflow-auto pr-2">
                {categories.map((cat) => (
                  <label
                    key={cat}
                    className="inline-flex items-center space-x-3 cursor-pointer text-blue-800 hover:text-blue-600 transition select-none"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => handleCategoryChange(cat)}
                      className="form-checkbox h-5 w-5 text-blue-600"
                      aria-checked={selectedCategories.includes(cat)}
                    />
                    <span className="text-lg">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Max Price */}
            <div>
              <h3 className="font-semibold text-xl mb-4 border-b border-blue-200 pb-2">
                Max Price:{" "}
                <span className="text-blue-700 font-semibold">
                  Ksh {maxPrice}
                </span>
              </h3>
              <input
                type="range"
                min="100"
                max="5000"
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full accent-blue-600"
                aria-valuemin={100}
                aria-valuemax={5000}
                aria-valuenow={maxPrice}
                aria-label="Max price filter"
              />
            </div>

            {/* Tags */}
            <div>
              <h3 className="font-semibold text-xl mb-5 border-b border-blue-200 pb-2">
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium select-none shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {/* Sort */}
          <div
            className="flex justify-between items-center mb-8"
            data-aos="fade-left"
          >
            <div className="text-lg font-semibold text-blue-800">
              {filteredProducts.length} Products Found
            </div>
            <select
              className="border border-blue-300 p-3 rounded-md text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              aria-label="Sort products"
            >
              <option value="">Sort By</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest Arrivals</option>
              <option value="rated">Best Rated</option>
            </select>
          </div>

          {/* Product Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            data-aos="fade-up"
          >
            {paginatedProducts.length === 0 && (
              <p className="text-center text-blue-500 col-span-full">
                No products match your filters.
              </p>
            )}
            {paginatedProducts.map((product) => (
              <article
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300 cursor-pointer relative"
                data-aos="zoom-in"
              >
                {/* <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </Link> */}
                <div className="relative">
                  <Link
                    to={`/product/${product.id}`}
                    aria-label={`View ${product.name}`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </Link>
                  <span className="absolute top-3 left-3 bg-amber-600 text-white text-xs px-3 py-1 rounded-full shadow-md font-medium">
                    {product.tag}
                  </span>
                </div>

                <div className="p-5 flex flex-col justify-between h-56">
                  <div>
                    <h3 className="font-semibold text-xl text-blue-900 mb-2 truncate">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      {renderStars(product.rating)}
                      <span className="text-sm text-blue-600 font-medium">
                        ({product.rating})
                      </span>
                    </div>
                    <p className="text-lg font-bold text-blue-800">
                      Ksh {product.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <button
                      aria-pressed={likedProducts.includes(product.id)}
                      onClick={() => toggleLike(product.id)}
                      className={`p-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        likedProducts.includes(product.id)
                          ? "bg-red-100 text-red-500"
                          : "text-blue-400 hover:bg-blue-100"
                      }`}
                      title={
                        likedProducts.includes(product.id)
                          ? "Remove from Wishlist"
                          : "Add to Wishlist"
                      }
                    >
                      <FaHeart size={20} />
                    </button>

                    <button
                      onClick={() => addToCart(product)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <FaCartPlus /> Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <nav
            aria-label="Product pagination"
            className="mt-12 flex justify-center items-center space-x-3"
            data-aos="fade-up"
          >
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-full border border-blue-400 text-blue-600 disabled:text-blue-200 disabled:border-blue-200 hover:bg-blue-100 transition"
              aria-label="Previous page"
            >
              &lt;
            </button>

            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page + 1}
                onClick={() => setCurrentPage(page + 1)}
                aria-current={currentPage === page + 1 ? "page" : undefined}
                className={`px-4 py-2 rounded-full border text-blue-600 border-blue-400 hover:bg-blue-200 transition ${
                  currentPage === page + 1
                    ? "bg-blue-600 text-white font-semibold"
                    : "bg-white"
                }`}
              >
                {page + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-full border border-blue-400 text-blue-600 disabled:text-blue-200 disabled:border-blue-200 hover:bg-blue-100 transition"
              aria-label="Next page"
            >
              &gt;
            </button>
          </nav>
        </main>
      </div>
    </div>
  );
}

export default Shop;

// import React, { useState, useEffect } from "react";
// import { FaHeart, FaCartPlus, FaSearch } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import axios from "axios";
// import CircularProgress from "@mui/material/CircularProgress";

// const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// AOS.init();

// function Shop() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [maxPrice, setMaxPrice] = useState(5000);
//   const [sortOption, setSortOption] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [likedProducts, setLikedProducts] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const itemsPerPage = 6;
//   const { addToCart } = useCart();

//   // Fetch products from backend
//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       setError("");

//       try {
//         const queryParams = new URLSearchParams({
//           search: searchTerm,
//           maxPrice: maxPrice,
//           sort: sortOption,
//         });

//         // Add selected category filters
//         if (selectedCategories.length === 1) {
//           queryParams.append("category", selectedCategories[0]);
//         }

//         const res = await axios.get(
//           `${SERVER_URL}/api/products?${queryParams}`
//         );
//         setProducts(res.data);
//       } catch (err) {
//         setError("Failed to load products.");
//       }

//       setLoading(false);
//     };

//     fetchProducts();
//   }, [searchTerm, selectedCategories, maxPrice, sortOption]);

//   const totalPages = Math.ceil(products.length / itemsPerPage);
//   const paginatedProducts = products.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handleCategoryChange = (category) => {
//     setSelectedCategories((prev) =>
//       prev.includes(category)
//         ? prev.filter((c) => c !== category)
//         : [...prev, category]
//     );
//   };

//   const toggleLike = (productId) => {
//     setLikedProducts((prev) =>
//       prev.includes(productId)
//         ? prev.filter((id) => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   return (
//     <div className="bg-blue-50 text-blue-900 min-h-screen px-4 sm:px-6 py-10 mt-12 md:mt-6">
//       <div className="text-center mb-10" data-aos="fade-down">
//         <h1 className="text-4xl font-bold mb-3">Shop Our Collection</h1>
//         <p className="text-lg max-w-2xl mx-auto text-blue-800">
//           Discover handcrafted jewelry made with love and tradition.
//         </p>
//       </div>

//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Filters Sidebar */}
//         <aside className="md:w-1/4" data-aos="fade-right">
//           <div className="bg-white p-6 rounded-lg shadow space-y-6">
//             <div>
//               <h2 className="text-xl font-semibold mb-2">Search</h2>
//               <div className="relative">
//                 <FaSearch className="absolute left-3 top-3 text-blue-400" />
//                 <input
//                   type="text"
//                   placeholder="Search products..."
//                   className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div>
//               <h3 className="font-bold mb-2">Category</h3>
//               {[
//                 "Home & living",
//                 "Decor",
//                 "Fashion",
//                 "Accessories",
//                 "Art & collectibles",
//               ].map((cat) => (
//                 <div key={cat}>
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="checkbox"
//                       checked={selectedCategories.includes(cat)}
//                       onChange={() => handleCategoryChange(cat)}
//                     />
//                     {cat}
//                   </label>
//                 </div>
//               ))}
//             </div>

//             <div>
//               <h3 className="font-bold mb-2">Max Price</h3>
//               <input
//                 type="range"
//                 min="10"
//                 max="5000"
//                 value={maxPrice}
//                 onChange={(e) => setMaxPrice(e.target.value)}
//                 className="w-full"
//               />
//               <p className="text-sm text-blue-700 mt-1">Ksh {maxPrice}</p>
//             </div>

//             <div>
//               <h3 className="font-bold mb-2">Tags</h3>
//               <div className="flex flex-wrap gap-2">
//                 {["New Arrival", "Bestseller", "Featured"].map((tag) => (
//                   <span
//                     key={tag}
//                     className="bg-blue-200 px-2 py-1 rounded-full text-sm"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <div className="flex-1">
//           {/* Sort */}
//           <div className="flex justify-end mb-6" data-aos="fade-left">
//             <select
//               className="border border-blue-300 p-2 rounded"
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//             >
//               <option value="">Sort by</option>
//               <option value="price-low">Price: Low to High</option>
//               <option value="price-high">Price: High to Low</option>
//               <option value="newest">Newest</option>
//               <option value="rated">Best Rated</option>
//             </select>
//           </div>

//           {/* Products Grid */}
//           {loading ? (
//             <div className="flex justify-center items-center py-20">
//               <CircularProgress style={{ color: "#D97706" }} />{" "}
//               {/* Tailwind blue-600 */}
//             </div>
//           ) : error ? (
//             <p className="text-center text-red-600 bg-red-100 border border-red-300 px-4 py-2 rounded-md w-fit mx-auto font-semibold mb-6">
//               {error}
//             </p>
//           ) : (
//             <div
//               className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
//               // data-aos="fade-up"
//             >
//               {paginatedProducts.map((product) => (
//                 <div
//                   key={product._id}
//                   className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition relative"
//                 >
//                   <Link to={`/product/${product._id}`}>
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-64 object-cover rounded-lg mb-4"
//                     />
//                   </Link>
//                   <span className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 text-xs rounded-full">
//                     {product.tag}
//                   </span>
//                   <h3 className="font-semibold text-lg">{product.name}</h3>
//                   <p className="text-blue-700 font-bold mb-3">
//                     Ksh {product.price}
//                   </p>
//                   <div className="flex gap-3">
//                     <button
//                       className="flex-1 bg-blue-900 text-white py-2 rounded hover:bg-blue-800"
//                       onClick={() => addToCart(product)}
//                     >
//                       <FaCartPlus className="inline mr-2" /> Add to Cart
//                     </button>
//                     <button
//                       onClick={() => toggleLike(product._id)}
//                       className={`p-2 rounded border ${
//                         likedProducts.includes(product._id)
//                           ? "bg-red-100 border-red-500 text-red-500"
//                           : "bg-white border-blue-900 text-blue-900 hover:bg-blue-100"
//                       }`}
//                     >
//                       <FaHeart />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Pagination */}
//           <div className="flex justify-center items-center space-x-4">
//             <button
//               disabled={currentPage === 1}
//               onClick={() => setCurrentPage((p) => p - 1)}
//               className="px-4 py-2 bg-blue-900 text-white rounded disabled:opacity-50"
//             >
//               Prev
//             </button>
//             {[...Array(totalPages)].map((_, i) => (
//               <button
//                 key={i}
//                 className={`px-3 py-1 rounded-full text-sm font-medium ${
//                   currentPage === i + 1
//                     ? "bg-blue-500 text-white"
//                     : "bg-blue-100"
//                 }`}
//                 onClick={() => setCurrentPage(i + 1)}
//               >
//                 {i + 1}
//               </button>
//             ))}
//             <button
//               disabled={currentPage === totalPages}
//               onClick={() => setCurrentPage((p) => p + 1)}
//               className="px-4 py-2 bg-blue-900 text-white rounded disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Shop;
