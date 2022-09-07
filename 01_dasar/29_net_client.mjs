// berbasis tcp, object stream
// turunan eventEmitter
import net from "net";

const connection = net.createConnection({
    port: 3000, 
    host: "localhost"
});

// setInterval(() => {
//    client.write("Amardian\r\n")
//}, 2000);

setInterval(function(){ // handler
    connection.write("Amardian\r\n"); // buffer
    connection.write(`${process.argv[2]}\r\n`); 
}, 2000); //timeout


// client.addListener("data", (data) => {
//    console.info(`Receive data from server : ${data.toString()}`);    
//})

connection.addListener("data", function(data){ // event, listener, buffer
    console.info(`Receive data from server : ${data.toString()}`); // data
})






