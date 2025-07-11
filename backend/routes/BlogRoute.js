const express = require('express');
const router = express.Router();
const BlogPost = require('../models/Blog');

// GET all blog posts with a limit (e.g., GET /api/blogs?limit=3)
router.get('/', async (req, res) => {
  try {
    const { limit } = req.query;
    const blogs = await BlogPost.find({}, 'title date description author')
      .limit(limit ? parseInt(limit) : 0);  // Apply limit if provided
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// GET single blog post by ID
router.get('/:id', async (req, res) => {
  try {
    const blog = await BlogPost.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new blog post (admin only)
router.post('/', async (req, res) => {
  try {
    const { title, description, date, author, content } = req.body;
    const newPost = new BlogPost({ title, description, date, author, content });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT (update) a blog post by ID (admin only)
router.put('/:id', async (req, res) => {
  try {
    const updatedPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedPost) return res.status(404).json({ message: 'Not found' });
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a blog post by ID (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const deletedPost = await BlogPost.findByIdAndDelete(req.params.id);
    if (!deletedPost) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
