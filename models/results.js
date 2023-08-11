const mongoose = require('mongoose');

const resultSchema = mongoose.Schema({
    interview: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Interview',
        required: true
    },
    student: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Student',
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['FAIL', 'PASS', 'On hold', 'Did not attempt '],
    }

});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;