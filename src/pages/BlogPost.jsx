// import React from 'react';
// import { Calendar, ArrowLeft } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// function BlogPost() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-white text-blue-900 mt-4">
//       {/* Hero */}
//       <div className="bg-blue-100 py-12 px-6 text-center">
//         <h1 className="text-4xl font-bold mb-4">How Beadwork Became a Global Fashion Statement</h1>
//         <div className="flex justify-center items-center text-sm text-blue-700">
//           <Calendar className="w-4 h-4 mr-2" />
//           May 1, 2025
//         </div>
//       </div>

//       {/* Back Button */}
//       <div className="max-w-4xl mx-auto px-4 mt-6">
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center text-sm text-blue-700 hover:underline mb-4"
//         >
//           <ArrowLeft className="w-4 h-4 mr-1" />
//           Back to Blog
//         </button>
//       </div>

//       {/* Blog Content */}
//       <article className="max-w-4xl mx-auto px-4 pb-20 leading-relaxed text-lg text-blue-800">
//         <p className="mb-6">
//           Beadwork has transcended its origins as a form of cultural expression to become a
//           prominent player in the world of fashion. From traditional Maasai bead necklaces in
//           East Africa to contemporary haute couture pieces, beads are telling global stories.
//         </p>

//         <p className="mb-6">
//           Fashion houses are now incorporating handcrafted beaded elements into runways, celebrating
//           heritage while setting trends. Artisans behind the scenes are gaining visibility and fair
//           trade movements have further supported their craft.
//         </p>

//         <p className="mb-6">
//           As customers become more intentional about what they wear, beadwork offers an emotional
//           and artistic connection—linking modern aesthetics with timeless tradition.
//         </p>

//         <p className="mb-6">
//           Stay tuned as we continue to spotlight the makers, materials, and magic behind every stitch
//           and string.
//         </p>

//         <hr className="my-10" />

//         <p className="text-sm text-blue-600 italic">
//           Written by Beadworks Team
//         </p>
//       </article>
//     </div>
//   );
// }

// export default BlogPost;

// BlogPost.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";
import CircularProgress from "@mui/material/CircularProgress";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`${SERVER_URL}/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!blog)
    return (
      <div className="flex justify-center items-center py-20">
        {" "}
        <CircularProgress style={{ color: "black" }} />
      </div>
    );
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
    <div className="min-h-screen bg-white text-blue-900 mt-4">
      <div className="bg-blue-100 py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="flex justify-center items-center text-sm text-blue-700">
          <Calendar className="w-4 h-4 mr-2" />
          {/* {blog.date} */}
          {formatDateWithSuffix(blog.date)}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-sm text-blue-700 hover:underline mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Blog
        </button>
      </div>

      <article className="max-w-4xl mx-auto px-4 pb-20 leading-relaxed text-lg text-blue-800">
        {blog.content.split("\n").map((para, idx) => (
          <p className="mb-6" key={idx}>
            {para}
          </p>
        ))}

        <hr className="my-10" />

        <p className="text-sm text-blue-600 italic">
          Written by {blog.author}
        </p>
      </article>
    </div>
  );
}

export default BlogPost;
