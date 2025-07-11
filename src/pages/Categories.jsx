import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Categories = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${SERVER_URL}/api/products?category=${encodeURIComponent(
            categoryName
          )}`
        );
        setProducts(res.data);
      } catch (err) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [categoryName]);

  return (
    <div className="min-h-screen px-6 py-20 mt-12 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-10 text-center">
          <span className="bg-yellow-400 px-4 py-1 rounded-xl text-black shadow">
            {categoryName}
          </span>
        </h1>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <CircularProgress style={{ color: "black" }} />
          </div>
        ) : error ? (
           <p className="text-center text-red-600 bg-red-100 border border-red-300 px-4 py-2 rounded-md w-fit mx-auto font-semibold mb-6">
              {error}
            </p>
        ) : products.length === 0 ? (
          <p className="text-center text-red-600 bg-red-100 border border-red-300 px-4 py-2 rounded-md w-fit mx-auto font-semibold mb-6">No products found in this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {products.map((product) => (
              <Link
                to={`/product/${product._id}`}
                key={product._id}
                className="group bg-yellow-50 rounded-2xl p-5 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 border border-yellow-200"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-xl mb-4 group-hover:opacity-90 transition duration-300"
                />
                <h2 className="text-xl font-bold text-black group-hover:underline">
                  {product.name}
                </h2>
                <p className="text-gray-700 mb-2">Ksh {product.price}</p>
                <div className="flex items-center gap-1 text-yellow-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < product.rating ? "" : "text-gray-300"}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">{product.category}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
