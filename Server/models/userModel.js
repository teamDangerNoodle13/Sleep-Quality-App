const mongooseInstance = require('./mongoUtil.js');
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10;

const userSchema = mongooseInstance.Schema(
  {
    // doubles as username and email
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // for UI purposes mainly
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const UserModel = mongooseInstance.model('user', userSchema);

module.exports = UserModel;