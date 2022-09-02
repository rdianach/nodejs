function sayHello(name){
    debugger;
    return `Hello ${name}`;
}

const firstName = "Amardian";
debugger;
console.info(sayHello(firstName));

// ➜  01_dasar git:(main) ✗ node inspect 19_debugger.mjs
// < Debugger listening on ws://127.0.0.1:9229/61f64ba1-8cb6-4e39-a109-962d39d01bdc
// < For help, see: https://nodejs.org/en/docs/inspector
// < 
// connecting to 127.0.0.1:9229 ... ok
// < Debugger attached.
// < 
// Break on start in 19_debugger.mjs:1
// > 1 function sayHello(name){
//   2     debugger;
//   3     return `Hello ${name}`;
// debug> c
// break in 19_debugger.mjs:7
//   5 
//   6 const firstName = "Amardian";
// > 7 debugger;
//   8 console.info(sayHello(firstName));
// debug> watch("name");
// debug> c
// break in 19_debugger.mjs:2
// Watchers:
//   0: name = 'Amardian'

//   1 function sayHello(name){
// > 2     debugger;
//   3     return `Hello ${name}`;
//   4 }
// debug> c
// < Hello Amardian
// < 
// < Waiting for the debugger to disconnect...
// < 
// debug> 
// (To exit, press Ctrl+C again or Ctrl+D or type .exit)
// debug></debug>