const mongoose = require('mongoose');
const readCSVFile = require('./insertion');
const courseSchema = require('./Schema');
const uri = 'mongodb://localhost/interns';

// Function to connect to MongoDB using Mongoose
async function connectToMongoDB() {
    try {
        await mongoose.connect(uri)
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
connectToMongoDB();
//reading data from csv file
async function InsertFile() {
    try {
        const courses = await readCSVFile('course.csv');
        console.log(courses);
    } catch (e) {
        console.log("error", e);
    }
}

InsertFile();