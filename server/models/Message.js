import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true,
      maxlength: 50 
    },
    email: { 
      type: String, 
      required: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email format']
    },
    message: { 
      type: String, 
      required: true,
      maxlength: 500 
    },
  },
  { timestamps: true }
);

const Message = mongoose.model('Message', messageSchema);
export default Message;