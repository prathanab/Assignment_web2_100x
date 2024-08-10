// Since fetch natively returns a promise, you don’t need to manually create a promise to handle asynchronous operations.
// When dealing with older APIs or custom functions that use callbacks, we might need to promisify them.
function getDataAsync() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data');
      }, 1000);
    });
  }
  
  getDataAsync()
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  