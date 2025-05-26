import React, { useState } from "react";
import { FaHeart, FaStar, FaCartPlus } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

// ─── Sample data ───────────────────────────────────────────
const sampleProducts = Array.from({ length: 12 }).map((_, i) => ({
  id: (i + 1).toString(),
  name: `Sample Product ${i + 1}`,
  image: `https://picsum.photos/600/600?random=${i + 1}`,
  price: 1000 + i * 100,
  description:
    "This is a beautifully designed cloth, made with love and precision. Ideal for any occasion.",
  rating: 5 - (i % 5),
  category: ["Jewelry", "Decor", "Necklaces", "Bracelets", "Earrings"][i % 5],
  inStock: i % 3 !== 0 // roughly 2 / 3 of items are in stock
}));

// ─── Component ─────────────────────────────────────────────
const ProductDetails = () => {
  const { id } = useParams();
  const product = sampleProducts.find((p) => p.id === id);
  const [liked, setLiked] = useState(false);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="text-center py-20 text-red-500 font-semibold">
        Product not found.
      </div>
    );
  }

  // Filter similar items (same category, not the current product)
  const similarProducts = sampleProducts.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const toggleLike = () => setLiked((prev) => !prev);

  return (
    <>
      {/* ── Product Card ────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white shadow-xl rounded-2xl p-8 md:p-12">
          {/* Image */}
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-slate-800">
              {product.name}
            </h1>

            {/* Price + Stock Badge */}
            <div className="flex items-center gap-4">
              <p className="text-2xl text-emerald-600 font-semibold">
                Ksh {product.price.toLocaleString()}
              </p>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  product.inStock
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-rose-100 text-rose-700"
                }`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-lg ${
                    i < product.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-gray-500 ml-2">
                {product.rating} / 5
              </span>
            </div>

            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            {/* Buttons */}
            <div className="flex gap-4 items-center pt-4">
              <button
                onClick={toggleLike}
                className={`rounded-full p-3 border-2 transition-all duration-300 ${
                  liked
                    ? "bg-red-100 border-red-500 text-red-500 animate-pulse"
                    : "bg-white border-slate-400 text-slate-600 hover:bg-slate-100"
                }`}
                title={liked ? "Unlike" : "Like"}
              >
                <FaHeart />
              </button>

              <button
                onClick={() => addToCart(product)}
                disabled={!product.inStock}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all
                  ${
                    product.inStock
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-slate-300 text-slate-500 cursor-not-allowed"
                  }`}
              >
                <FaCartPlus className="text-lg" />
                Add to Cart
              </button>
            </div>

            <Link
              to="/shop"
              className="inline-block mt-6 text-sm text-blue-600 hover:underline"
            >
              ← Back to Shop
            </Link>
          </div>
        </div>
      </section>

      {/* ── Similar Products Carousel ───────────────────────── */}
      {similarProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pb-16">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            Similar {product.category}
          </h2>

          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2">
            {similarProducts.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="min-w-[220px] snap-start bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-44 w-full object-cover"
                />
                <div className="p-4 space-y-1">
                  <p className="font-medium text-slate-800 truncate">
                    {item.name}
                  </p>
                  <p className="text-sm text-emerald-600 font-semibold">
                    Ksh {item.price.toLocaleString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetails;


// // Add a "You might also like" section at the bottom with related products.

// // Persist likes to localStorage or backend for logged-in users.
// import React, { useState, useEffect } from "react";
// import { FaHeart, FaStar, FaCartPlus } from "react-icons/fa";
// import { useParams, Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import axios from "axios";
// import CircularProgress from "@mui/material/CircularProgress";

// const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [relatedLoading, setRelatedLoading] = useState(true);
//   const [liked, setLiked] = useState(false);
//   const { addToCart } = useCart();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`${SERVER_URL}/api/products/${id}`);
//         setProduct(res.data);
//         setLoading(false);

//         // Fetch related products after main product is loaded
//         fetchRelatedProducts(res.data.category, res.data._id);
//       } catch (err) {
//         console.error("Failed to fetch product", err);
//         setLoading(false);
//       }
//     };

//     const fetchRelatedProducts = async (category, currentId) => {
//       try {
//         const res = await axios.get(`${SERVER_URL}/api/products`);
//         const filtered = res.data.filter(
//           (p) => p.category === category && p._id !== currentId
//         );
//         setRelatedProducts(filtered);
//         setRelatedLoading(false);
//       } catch (err) {
//         console.error("Failed to fetch related products", err);
//         setRelatedLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   const toggleLike = () => setLiked((prev) => !prev);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center py-20">
//         <CircularProgress style={{ color: "#D97706" }} />
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="text-center py-20 text-red-500 font-semibold">
//         Product not found.
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10 mt-10 bg-white shadow-lg rounded-lg">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row gap-10">
//         {/* Image */}
//         <div className="flex-1">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
//           />
//         </div>

//         {/* Info */}
//         <div className="flex-1 space-y-4">
//           <h2 className="text-3xl font-bold text-blue-900">{product.name}</h2>
//           <p className="text-2xl font-semibold text-blue-700">
//             Ksh {product.price}
//           </p>

//           {/* Rating */}
//           <div className="flex items-center gap-1 text-yellow-500">
//             {[...Array(5)].map((_, i) => (
//               <FaStar
//                 key={i}
//                 className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
//               />
//             ))}
//             <span className="ml-2 text-sm text-gray-600">
//               ({product.rating} / 5)
//             </span>
//           </div>

//           {/* Description */}
//           <p className="text-gray-700 leading-relaxed">{product.description}</p>

//           {/* Actions */}
//           <div className="flex items-center gap-4 mt-6">
//             <button
//               onClick={toggleLike}
//               className={`p-3 rounded-full border-2 transition-all ${
//                 liked
//                   ? "bg-red-100 border-red-500 text-red-500"
//                   : "bg-white border-blue-900 text-blue-900 hover:bg-blue-100"
//               }`}
//               title={liked ? "Unlike" : "Like"}
//             >
//               <FaHeart />
//             </button>

//             <button
//               className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
//               onClick={() => addToCart(product)}
//             >
//               <FaCartPlus />
//               Add to Cart
//             </button>
//           </div>

//           {/* Back Link */}
//           <Link
//             to="/shop"
//             className="inline-block mt-8 text-sm text-blue-600 hover:underline"
//           >
//             ← Back to Shop
//           </Link>
//         </div>
//       </div>

//       {/* Related Products */}
//       <div className="mt-14">
//         <h3 className="text-xl font-semibold mb-4 text-blue-800">
//           You might also like
//         </h3>
//         {relatedLoading ? (
//           <div className="flex justify-center py-10">
//             <CircularProgress style={{ color: "#D97706" }} />
//           </div>
//         ) : relatedProducts.length === 0 ? (
//           <p className="text-gray-500">No related products found.</p>
//         ) : (
//           <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-blue-500">
//             {relatedProducts.map((p) => (
//               <Link
//                 to={`/product/${p._id}`}
//                 key={p._id}
//                 className="min-w-[200px] bg-white border rounded-lg shadow hover:shadow-lg transition p-4"
//               >
//                 <img
//                   src={p.image}
//                   alt={p.name}
//                   className="h-48 w-full object-cover rounded mb-2"
//                 />
//                 <h4 className="text-md font-semibold">{p.name}</h4>
//                 <p className="text-blue-700 font-bold">Ksh {p.price}</p>
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
