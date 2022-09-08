import {Console} from "console"; 
import fs from "fs";

const file = fs.createWriteStream("application.log")

const log = new Console({
    stdout: file, 
    stderr: file,
})

log.info("Hello");
log.error("World");

const person = {
    firstName : "Amardian",
    lastName : "Achmad",

}

log.table(person);














