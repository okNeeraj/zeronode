// Promise
const p = new Promise((resolve, reject) => {
  let data = 1 + 1;
  if (data == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is in the then - " + message);
}).catch((message) => {
  console.log("This is in the catch - " + message);
});


module.exports = p;