// models/Post.js
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  imageLink: {
    type: String,
    required: true
  }
});

let Post;

try {
  // Check if the model is already defined
  Post = mongoose.model('Post');
} catch {
  // If not, define the model
  Post = mongoose.model('Post', postSchema);
}

export default Post;
