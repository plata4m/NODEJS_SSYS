const mongoose = require('mongoose');

const EmployeestSchema = new mongoose.Schema({
   
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    birth_date: {
        type: Date,
        required: true,
    }, 
    // Data atual do registro no banco
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Employees', EmployeestSchema);