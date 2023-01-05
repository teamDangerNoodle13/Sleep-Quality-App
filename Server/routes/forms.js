const express = require('express');
const router = express.Router();

const formController = require('../controllers/formController');

// POST http://localhost:3000/forms
router.post('/', formController.saveFormResponse, (req, res) => {
  return res.status(200).json(res.locals.savedFormResponses);
});

// GET  http://localhost:3000/forms
router.get('/response', formController.replyToForm, (req, res) => { // this is the route that will be used to reply to the form
  return res.status(200).json(res.locals.replyToForm);
});

// GET http://localhost:3000/forms/:formID
router.get('/:formId', formController.getSingleForm, (req, res) => {
  return res.status(200).json(res.locals.foundForm);
});

// GET http://localhost:3000/forms/?user=userID
router.get('/', formController.getUserFormsResponses, (req, res) => {
  return res.status(200).json(res.locals.allUserForms);
});




module.exports = router;

