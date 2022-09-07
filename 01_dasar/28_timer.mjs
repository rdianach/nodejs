// global module, tipe promise harus import 
// tipe callback
// setInterval(() => {
//     console.info(`Start time at ${new Date()}`);
// }, 1000);

// tipe promise 1
import timers from "timers/promises";

// console.info(new Date())

// const name = await timers.setTimeout(5000, "Amardian"); // info value

// console.info(new Date())
// console.info(name);

// tipe promise 2
for await(const startTime of timers.setInterval(1000, new Date())){
    console.info(`Start time at ${startTime}`)
}