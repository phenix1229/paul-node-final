const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: { type: String, default: '' },
  author: { type: String, default: '', unique: true },
  subject: { type: String, default: '' },
  article: { type: String, default: '' },
});

// Incorrect export
// module.exports = Blog;
module.exports = mongoose.model('Blog', BlogSchema);
