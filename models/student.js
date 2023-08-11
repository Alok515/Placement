const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    name: { 
        type: String,
        required: true 
    },
    college: { 
        type: String, 
        required: true 
    },
    status: { 
        type: String, 
        enum: ["placed", "not_placed"], 
        required: true 
    },
    dsaScore: { 
        type: Number 
    },
    webdScore: { 
        type: Number 
    },
    reactScore: { 
        type: Number 
    },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
