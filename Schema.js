const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    courseLevel: {
        type: String,
        required: true,
    },
    prerequisites: [{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

module.exports = courseSchema;
