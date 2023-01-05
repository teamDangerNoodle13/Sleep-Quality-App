const mongooseInstance = require('./mongoUtil.js');


const formSchema = mongooseInstance.Schema(
  {
    userId: { type: mongooseInstance.Types.ObjectId, ref: 'user' },
    answers: { type: Array, required: true },
    totalScore: { type: Number, required: true, default: 0 },
    // journalId: { type: mongooseInstance.Types.ObjectId, ref: 'journal' },
    // Umair: I think we should have a field for the date of the form submission
    // and the date of the form creation. This will help us in the future when we
    // want to show the user the history of their forms.
    // dateCreated: { type: Date, required: true, default: Date.now },
    // dateSubmitted: { type: Date, required: true, default: Date.now },
    // isSubmitted: { type: Boolean, required: true, default: false },
    // isDeleted: { type: Boolean, required: true, default: false },
  },
);

const FormModel = mongooseInstance.model('form', formSchema);

module.exports = FormModel;
