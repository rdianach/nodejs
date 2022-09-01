// file nya
// non-blocking dengan promise saran digunakan
// import fs from "fs"; // biasa

// const buffer = fs.readFileSync("18_file_system.mjs"); // membaca file

// console.info(buffer.toString());

// fs.writeFileSync("tmp.txt", "Hello World") // menulis file


// dengan promise
import fs from "fs/promises";

const buffer = await fs.readFile("18_file_system.mjs");

console.info(buffer.toString())

await fs.writeFile("temp.txt", "Hello nodejs")