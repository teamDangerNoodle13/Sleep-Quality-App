const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// GET http://localhost:3000/users
// TODO: remove once of of dev phase; should not be publicly accessible

// DEV
// router.get('/', userController.getAllUsers, (req, res) => {
//   return res.status(200).json(res.locals.users);
// });

router.post('/', (req, res) => {
  console.log(req.body);
  return next();
});

// POST http://localhost:3000/users
// route for creating a new user
router.post('/register', userController.addUser, (req, res) => {

  return res.status(200).json(res.locals.newUser);
});

// route for logging in an existing user
router.post('/login', userController.verifyUser, (req, res) => {
  console.log('in router login');
  return res.status(200).json(res.locals.user);
})

module.exports = router;
