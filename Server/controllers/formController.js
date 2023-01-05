const Form = require('../models/formModel.js');

const formController = {};

/**
 * Middleware to save the form responses into the database.
 *  TODO: link journal entries
 */
formController.saveFormResponse = (req, res, next) => {
  const { userId, answers, totalScore } = req.body;

  Form.create({ userId: userId, answers: answers, totalScore: totalScore })
    .then((formDoc) => {
      res.locals.savedFormResponses = formDoc;
      return next();
    })
    .catch((error) => {
      return next({
        log: `ERROR in formController.saveFormResponse ${error}`,
        message: {
          err: `Encountered an error in formController.saveFormResponse`,
        },
      });
    });
};

/**
 * Middleware to read all the form responses for a particular user from the database.
 */
formController.getUserFormsResponses = (req, res, next) => {
  const { user } = req.query;

  Form.find({ userId: user })
    .then((formsDoc) => {
      res.locals.allUserForms = formsDoc;
      return next();
    })
    .catch((error) => {
      return next({
        log: `ERROR in formController.getUserFormsResponses ${error}`,
        message: {
          err: `Encountered an error in formController.getUserFormsResponses`,
        },
      });
    });
};

/**
 * Middleware to read a particular form from the database.
 */
formController.getSingleForm = (req, res, next) => {
  const { formId } = req.params;

  Form.find({ _id: formId })
    .then((formDoc) => {
      res.locals.foundForm = formDoc;
      return next();
    })
    .catch((error) => {
      return next({
        log: `ERROR in userController.getSingleForm ${error}`,
        message: {
          err: `Encountered an error in userController.getSingleForm`,
        },
      });
    });
};

formController.replyToForm = (req, res, next) => {
  if(!req.query.score) { next('you fucked up') };
  const reply = "Thank you for taking our survey and here is your score. If you scored 0-8 congratulations, your sleep hygiene is impeccable. Otherwise more works need to be done and you access the following links for more information.";
  res.locals.replyToForm = reply;
  return next();
};



module.exports = formController;
