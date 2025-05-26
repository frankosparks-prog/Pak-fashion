import React from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Define categories as used in the Navbar
const categoryMap = {
  'mens-clothing': "Men's Clothing",
  'womens-clothing': "Women's Clothing",
  'kids-clothing': "Kids' Clothing",
  'shoes': 'Shoes',
  'bags-accessories': 'Bags & Accessories',
};

// Sample products with updated categories
const sampleProducts = Array.from({ length: 20 }).map((_, i) => {
  const keys = Object.keys(categoryMap);
  const categoryKey = keys[i % keys.length];
  return {
    id: (i + 1).toString(),
    name: `Sample Product ${i + 1}`,
    image: `https://picsum.photos/500/500?random=${i + 1}`,
    price: 1000 + i * 200,
    description: 'A timeless item crafted for elegance.',
    rating: 4 + (i % 2),
    category: categoryKey, // Use the URL-style key
  };
});

const Categories = () => {
  const { categoryName } = useParams();

  const filteredProducts = sampleProducts.filter(
    (product) => product.category === categoryName
  );

  const displayCategory = categoryMap[categoryName] || categoryName;

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 mt-16 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-blue-900 mb-6 capitalize">
        {displayCategory}
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-600">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group bg-white border border-gray-200 rounded-2xl p-4 shadow hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold text-blue-800 group-hover:underline">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-1">Ksh {product.price}</p>
              <div className="flex items-center gap-1 text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < product.rating ? '' : 'text-gray-300'} />
                ))}
              </div>
              <p className="text-sm text-gray-500">
                {categoryMap[product.category]}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;


// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { FaStar } from "react-icons/fa";
// import axios from "axios";
// import CircularProgress from "@mui/material/CircularProgress";

// const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// const Categories = () => {
//   const { categoryName } = useParams();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchCategoryProducts = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get(
//           `${SERVER_URL}/api/products?category=${encodeURIComponent(
//             categoryName
//           )}`
//         );
//         setProducts(res.data);
//       } catch (err) {
//         setError("Failed to fetch products.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategoryProducts();
//   }, [categoryName]);

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-4 mt-16 bg-white shadow-lg rounded-lg">
//       <h1 className="text-4xl font-bold text-blue-900 mb-6 capitalize">
//         {categoryName}
//       </h1>

//       {loading ? (
//         <div className="flex justify-center items-center py-20">
//           <CircularProgress style={{ color: "#D97706" }} />
//         </div>
//       ) : error ? (
//         <p className="text-red-600">{error}</p>
//       ) : products.length === 0 ? (
//         <p className="text-gray-600">No products found in this category.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <Link
//               to={`/product/${product._id}`}
//               key={product._id}
//               className="group bg-white border border-gray-200 rounded-2xl p-4 shadow hover:shadow-lg hover:scale-105 transition-all duration-300"
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-64 object-cover rounded-xl mb-4"
//               />
//               <h2 className="text-xl font-semibold text-blue-800 group-hover:underline">
//                 {product.name}
//               </h2>
//               <p className="text-gray-600 mb-1">Ksh {product.price}</p>
//               <div className="flex items-center gap-1 text-yellow-500 mb-2">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar
//                     key={i}
//                     className={i < product.rating ? "" : "text-gray-300"}
//                   />
//                 ))}
//               </div>
//               <p className="text-sm text-gray-500">{product.category}</p>
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Categories;
