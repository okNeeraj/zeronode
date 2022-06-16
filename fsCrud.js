const path = require("path");
const fs = require("node:fs/promises");

const dirLocation = path.join(__dirname, "fscrud");
const fileList = [
  ["file_one.txt", "This is file no. one"],
  ["file_two.txt", "This is file no. two"],
  ["file_three.txt", "This is file no. three"],
  ["file_four.txt", "This is file no. four"],
];

// Create files from given array
(async (fileList) => {
    try {
        for (let i = 0; i < fileList.length; i++) {
          const fileName = fileList[i];
          await fs.writeFile(`${dirLocation}/${fileName[0]}`, fileName[1]);
        }
        console.log("Files create successfully");
    } catch (error) {
        console.log("Write error:  " + error.message);
    }
})(fileList);



// Read directory
// fs.readdir(dirLocation, (error, files) => {
//     files.forEach((file) => {
//         console.log(file);
//     });
// })
