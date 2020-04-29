# List of issues

1.

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

2.

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

3.

    // Incorrect export
    // module.exports = Blog;
    module.exports = mongoose.model('Blog', BlogSchema);

4.

    // Incorrect import of router
    // const router = express.Route();
    const router = express.Router();

5.

    // Incorrect export of router
    // module.exports = route;
    module.exports = router;

6.

    // Missing dotenv
    require('dotenv').config();

7.

    //app declaration originally in wrong location
    const app = express();

8.

    // Originally too far down
    app.use('/', blogRouter);


You can view issues and corrections in controllers/BlogController, models/Blog, routes/blog, app.js.