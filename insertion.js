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