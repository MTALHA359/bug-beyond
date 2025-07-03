import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: String,
  desc: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Blog || mongoose.model('Blog', blogSchema);
