const mongoose = require('mongoose');
const Course = require('./Schema');
const uri = 'mongodb://localhost/interns';
const csv = require('csv-parser');
const fs = require('fs');

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

const results = [];
function readCSVFile(filePath) {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log(results);
      });
  }
  const csvfile=('./course.csv');
  readCSVFile(csvfile)
  
  const data =readCSVFile(csvfile)

  const course1 = results[data];
//reading data from csv file
const coursesInsertion = async ()=>{
    try {
        await Course.deleteMany();
  
        // Insert new courses
        await Course.insertMany(course1);
  
        console.log("Courses inserted successfully");
    } catch (error) {
        console.error("Error while inserting courses:", error);
    }
  }
  
  coursesInsertion();

