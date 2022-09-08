import { unwatchFile } from "fs";
import util from "util";

// sebelum ada backtick
const firstName = "Amardian";
const lastName = "Achmad";

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));

const person = {
    firstName: "Amardian",
    lastName: "Achmad"
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));

//util.promisify() // callback to promise