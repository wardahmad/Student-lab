const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const studentSchema = new Schema({
    name: String,
    attending: {type: Boolean, default: true}
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;