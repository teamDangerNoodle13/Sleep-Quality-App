const mongooseInstance = require('./mongoUtil.js');

const userSchema = mongooseInstance.Schema(
  {
    
    firstName: { type: String, required: true },
    // doubles as username and email
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // for UI purposes mainly
    
  },
  { timestamps: true }
);

const UserModel = mongooseInstance.model('user', userSchema);

module.exports = UserModel;

