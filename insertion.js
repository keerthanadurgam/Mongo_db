const Course = require('./Schema');
const fs = require('fs');
const csv = require('csv-parser');


function readCSVFile(filePath) {
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);
    });
}

readCSVFile('./course.csv');
module.exports = readCSVFile;
const coursesInsertion = async ()=>{
  try {
      await Course.deleteMany();

      // Insert new courses
      await Course.insertMany();

      console.log("Courses inserted successfully");
  } catch (error) {
      console.error("Error while inserting courses:", error);
  }
}
coursesInsertion();