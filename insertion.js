//This file is not included in my schema I Just kept it for my reference

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
async function inserting(){
  await connection();
  fs.createReadStream('/Users/admin/Documents/Mongodb/courses.csv',{
   encoding: 'utf-8'
  }).pipe(csv())
  .on('data',  function(row){
     console.log(row);
     list.push(row);
     //  data_checking(row);

      console.log("Row name"+row.name);
  }).on('end', function(){
     list.forEach(async (element)=>{
        console.log(element);
        await data_checking(element);
     })
     console.log('Data inserted successfully');
  }).on('error',()=>{
   console.log("Error");
  })
}
inserting(); 