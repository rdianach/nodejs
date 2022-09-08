// http // https
import http from "http"; 

const server = http.createServer((request, response) => {
    console.info(request.method);
    console.info(request.url);
    //console.table(request.headers);

    if(request.url == "/amardian"){
        response.write("Hello Amardian");
    }else{
        response.write("Hello HTTP Server")
    }

    //response.write("Hello HTTP Server")
    response.end();
});

server.listen(3000);