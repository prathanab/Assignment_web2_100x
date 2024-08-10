const fs = require('fs');

function readFileAsync(filePath, encoding = 'utf8') {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Usage
readFileAsync('./week2day1/a.txt')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error reading file:', error);
  });
