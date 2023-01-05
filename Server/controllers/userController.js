const User = require('../models/userModel.js');
const bcrypt = require('bcrypt')
const userController = {};

/**
 * Middleware to show all users in database.
 *  TODO: remove once of of dev phase
 */

// DEV
// userController.getAllUsers = (req, res, next) => {
//   User.find()
//     .then((usersDoc) => {
//       res.locals.users = usersDoc;
//       return next();
//     })
//     .catch((error) => {
//       return next({
//         log: `ERROR in userController.getAllUsers ${error}`,
//         message: { err: `Encountered an error in userController.getAllUsers` },
//       });
//     });
// };

/**
 * Middleware to add a user to database.
 * TODO: re-write once ID auto-increment is added for the User model
 */
userController.addUser = async (req, res, next) => {
  console.log('got into addUser')
  const { email, password, name } = req.body;
  const hash = await bcrypt.hash(password, 10)
  User.create({ email: email, password: hash, name: name })
    .then((userDoc) => {
      res.locals.newUser = userDoc;
      // console.log('this is the hashed password', userDoc.hash);
      return next();
    })
    .catch((error) => {
      return next({
        log: `ERROR in userController.addUser ${error}`,
        message: { err: `Encountered an error in userController.addUser` },
      });
    });
};

userController.verifyUser = (req, res, next) => {
  console.log('Made it to verifyUser');

  const { email, password, name } = req.body;

  User.findOne({
    email: email
  })
    .then((user) => {
      if (!user) return 'user not found';

      bcrypt.compare(password, user.password, function(err, result) {
        if (result) {
          console.log('passwords match')
          
        } else {
          console.log('passwords do not match')
        }
      });
        res.locals.user = user;
        return next();
  
    })
    .catch((error) => {
      return next({
        log: `ERROR in userController.verifyUser ${error}`,
        message: { err: `Encountered an error in userController.verifyUser` },
      })
    })
}


module.exports = userController;
