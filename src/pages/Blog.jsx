// import React from 'react';
// import { Calendar } from 'lucide-react';

// const blogPosts = [
//   {
//     id: 1,
//     title: 'How Beadwork Became a Global Fashion Statement',
//     date: 'May 1, 2025',
//     description: 'Explore how traditional bead artistry has taken the global fashion world by storm with its vibrant colors and rich culture.',
//     link: '/blog/1'
//   },
//   {
//     id: 2,
//     title: 'Top 10 Beaded Accessories for 2025',
//     date: 'April 15, 2025',
//     description: 'A curated list of must-have beaded accessories that elevate your wardrobe this year.',
//     link: '/blog/2'
//   },
//   {
//     id: 3,
//     title: 'Meet the Artisans Behind Our Boutique',
//     date: 'March 30, 2025',
//     description: 'Get to know the talented hands crafting each piece in our boutique with love and precision.',
//     link: '/blog/3'
//   },
// ];

// function Blog() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="bg-blue-100 text-center py-16 px-4">
//         <h1 className="text-4xl font-bold text-blue-900 mb-4">Beadworks Blog</h1>
//         <p className="text-lg text-blue-800 max-w-xl mx-auto">
//           Stories, insights, and style tips from the world of beads and fashion.
//         </p>
//       </section>

//       {/* Blog Grid */}
//       <section className="max-w-6xl mx-auto px-4 py-16 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {blogPosts.map((post) => (
//           <div key={post.id} className="border rounded-xl shadow-sm hover:shadow-lg transition p-6 bg-blue-50">
//             <h3 className="text-xl font-semibold text-blue-900 mb-2">{post.title}</h3>
//             <div className="flex items-center text-sm text-blue-700 mb-3">
//               <Calendar className="w-4 h-4 mr-2" /> {post.date}
//             </div>
//             <p className="text-blue-800 mb-4">{post.description}</p>
//             <a href={post.link} className="text-blue-700 font-medium hover:underline">Read more →</a>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }

// export default Blog;

import React, { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${SERVER_URL}/api/blogs`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
const formatDateWithSuffix = (dateStr) => {
  const dateObj = new Date(dateStr);

  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "long" });
  const year = dateObj.getFullYear();

  // Determine the ordinal suffix
  const getSuffix = (d) => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };

  return `${day}${getSuffix(day)} ${month} ${year}`;
};
  return (
    <div className="min-h-screen bg-white mt-12 md:mt-4">
      {/* Hero Section */}
      <section className="bg-blue-100 text-center py-16 px-4">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Pak_Fashion_Nanyuki_Blog
        </h1>
        <p className="text-lg text-blue-800 max-w-xl mx-auto">
          Stories, insights, and style tips from the world of beads and fashion.
        </p>
      </section>

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          {" "}
          <CircularProgress style={{ color: "#D97706" }} />
        </div>
      ) : (
        <section className="max-w-6xl mx-auto px-4 py-16 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post._id}
                className="border rounded-xl shadow-sm hover:shadow-lg transition p-6 bg-blue-50"
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {post.title}
                </h3>
                <div className="flex items-center text-sm text-blue-700 mb-1">
                  <Calendar className="w-4 h-4 mr-2" />{formatDateWithSuffix(post.date)}
                </div>
                <p className="text-sm text-blue-700 italic mb-2">
                  By {post.author}
                </p>
                <p className="text-blue-800 mb-4">{post.description}</p>
                <button
                  onClick={() => navigate(`/blog/${post._id}`)}
                  className="text-blue-700 font-medium hover:underline"
                >
                  Read more →
                </button>
              </div>
            ))
          ) : (
            <div className="text-center text-blue-700 col-span-full">
              No blog posts available.
            </div>
          )}
        </section>
      )}
    </div>
  );
}

export default Blog;
