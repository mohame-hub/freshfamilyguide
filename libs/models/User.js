// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

let User;

try {
  // Check if the model is already defined
  User = mongoose.model('User');
} catch {
  // If not, define the model
  User = mongoose.model('User', userSchema);
}

export default User;
