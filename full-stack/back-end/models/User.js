const  mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String, 
    lowercase: true, 
    required: [true, "can't be blank"], 
  },
  email: {
    type: String, 
    lowercase: true, 
    required: [true, "can't be blank"],
  },
  bio: String,
  imageURL: String,
}, {timestamps: true});

UserSchema.statics.findByLogin = async (login) => {
  let user = await this.findOne({
    username: login,
  });
 
  if (!user) {
    user = await this.findOne({ email: login });
  }
 
  return user;
};

mongoose.model('User', UserSchema);
