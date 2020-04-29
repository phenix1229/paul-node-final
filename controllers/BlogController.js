const Blog = require('../models/Blog');

module.exports = {
  getAllBlogs: (req, res) => {
    Blog.find({}).then((blogs) => {
      return res.json(blogs);
    });
  },
  createBlog: (req, res) => {
    const newBlog = new Blog();
    // Does not match model
    // newBlog.name = req.body.name;
    // newBlog.writer = req.body.writer;
    // newBlog.about = req.body.about;
    // newBlog.description = req.body.description;
    newBlog.title = req.body.title;
    newBlog.author = req.body.author;
    newBlog.subject = req.body.subject;
    newBlog.article = req.body.article;
    newBlog.save().then((blog) => {
      return res.json(blog);
    });
  },
  getBlogById: (req, res) => {
    Blog.findById({ _id: req.params.id }).then((blog) => {
      return res.json(blog);
    });
  },
  updateBlog: (req, res) => {
    Blog.findById({ _id: req.params.id }).then((blog) => {
      // // Does not match model
      // blog.name = req.body.name ? req.body.name : blog.name;
      // blog.writer = req.body.writer ? req.body.writer : blog.writer;
      // blog.about = req.body.about ? req.body.about : blog.about;
      // blog.description = req.body.description
      //   ? req.body.description
      //   : blog.description;
      blog.title = req.body.title ? req.body.title : blog.title;
      blog.author = req.body.author ? req.body.author : blog.author;
      blog.subject = req.body.subject ? req.body.subject : blog.subject;
      blog.article = req.body.article
        ? req.body.article
        : blog.article;
      blog.save().then((blog) => res.json(blog));
    });
  },
  deleteBlog: (req, res) => {
    Blog.findByIdAndDelete({ _id: req.params.id }).then(
      res.json({ message: 'deleted' })
    );
  },
};
