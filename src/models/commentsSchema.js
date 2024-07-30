import mongoose from 'mongoose';

const Comment = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.ObjectId,
    required: true,
  },
});

export default mongoose.model('Comments', Comment);
