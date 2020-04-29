const express = require('express');
// Incorrect import of router
// const router = express.Route();
const router = express.Router();
const Blog = require('../models/Blog');
const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require('../controllers/BlogController');

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/blog', createBlog);

router.get('/blogs', getAllBlogs);

router.get('/blog/:id', getBlogById);

router.put('/blog/:id', updateBlog);

router.delete('/blog/:id', deleteBlog);

// Incorrect export of router
// module.exports = route;
module.exports = router;
