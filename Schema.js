const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: {
        type: String,
    
    },
    courseLevel: {
        type: String,
    },
    prerequisite:[{
        type: String,
    }]
});
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
