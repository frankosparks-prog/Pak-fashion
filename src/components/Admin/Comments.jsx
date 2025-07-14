import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { Trash2, ChevronLeft, ChevronRight, Search } from "lucide-react";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-hot-toast";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const PER_PAGE = 6;

function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  // Fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const { data } = await axios.get(`${SERVER_URL}/api/blogs/comments`);
        setComments(data);
      } catch {
        toast.error("Failed to fetch comments");
        console.error("Error fetching comments");
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this comment?")) return;
    try {
      await axios.delete(`${SERVER_URL}/api/blogs/comments/${id}`);
      setComments((prev) => prev.filter((c) => c._id !== id));
    } catch {
      toast.error("Failed to delete comment");
    }
  };

  const filteredComments = useMemo(() => {
    return comments.filter(
      (c) =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.text.toLowerCase().includes(query.toLowerCase()) ||
        c.blogId?.title?.toLowerCase().includes(query.toLowerCase())
    );
  }, [comments, query]);

  const maxPage = Math.ceil(filteredComments.length / PER_PAGE);
  const paginated = filteredComments.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">🗨️ Blog Comments</h1>

        <label className="relative w-full sm:w-72">
          <Search className="absolute left-2.5 top-2.5 text-gray-400" size={18} />
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search by name, blog, or text"
            className="w-full pl-8 pr-3 py-2 border rounded focus:outline-none"
          />
        </label>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <CircularProgress size={40} sx={{ color: "black" }} />
        </div>
      ) : filteredComments.length === 0 ? (
        <p>No comments match your search.</p>
      ) : (
        <>
          <div className="space-y-4">
            {paginated.map((comment) => (
              <div
                key={comment._id}
                className="bg-gray-50 border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-md font-semibold text-gray-800">
                      {comment.name}
                    </h2>
                    <p className="text-sm text-gray-600 italic mb-2">
                      On blog:{" "}
                      <span className="text-blue-600 font-medium">
                        {comment.blogId?.title || "Untitled Blog"}
                      </span>
                    </p>
                    <p className="text-gray-700">{comment.text}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(comment.createdAt).toLocaleString()}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDelete(comment._id)}
                    className="text-red-600 hover:text-red-800 transition p-1"
                    title="Delete comment"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="px-2 py-1 text-sm border rounded disabled:opacity-50"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="text-sm">
              Page {page} of {maxPage}
            </span>
            <button
              disabled={page === maxPage}
              onClick={() => setPage((p) => p + 1)}
              className="px-2 py-1 text-sm border rounded disabled:opacity-50"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Comments;
