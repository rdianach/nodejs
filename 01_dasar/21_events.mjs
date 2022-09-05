import {EventEmitter} from "events"

const emitter = new EventEmitter();

emitter.addListener("hello", (name) => { // semacam callback yg akan di panggil 
    console.info(`Hello ${name}`);
});

emitter.addListener("hello", (name) => {
    console.info(`Halo ${name}`);
})

emitter.emit("hello", "Amardian");




