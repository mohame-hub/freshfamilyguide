// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
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
