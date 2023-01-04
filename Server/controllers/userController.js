const User = require('../models/userModel.js');

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
userController.addUser = (req, res, next) => {
  console.log('got into addUser')
  const { email, password, name } = req.body;
  User.create({ email: email, password: password, name: name })
    .then((userDoc) => {
      res.locals.newUser = userDoc;
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
  const { email, password, name } = req.body;

  User.findOne({
    email: email
  })
    .then((user) => {
      if (user.email === email && user.password === password) {
        res.locals.user = 'login successful';
        return next();
      }
    })
    .catch((error) => {
      return next({
        log: `ERROR in userController.verifyUser ${error}`,
        message: { err: `Encountered an error in userController.verifyUser` },
      })
    })
}


module.exports = userController;
