// v16 masih callback, v17 sudah promise
// v16
import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Siapa nama anda? : ", (nama) => {
    console.info(`Hello ${nama}`);
    input.close();
});













