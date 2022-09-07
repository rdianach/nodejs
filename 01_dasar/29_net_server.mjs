// berbasis tcp, object stream
// turunan eventEmitter
import net from "net";

//const server = net.createServer(function (client){ // callback
const server = net.createServer((client) => {
    console.info("Client connected");

    //client.on("data", function(data){ // eventListener on alias
    client.addListener("data", (data) => {
        console.info(`Receive data from client : ${data.toString()}`); // convert
        client.write(`Hello ${data.toString()}\r\n`) // tamba enter satu baris
    })
});

server.listen(3000, "localhost");






