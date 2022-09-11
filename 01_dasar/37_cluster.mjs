// cluster cpu multicore production
// cluster primary
import cluster from "cluster";
import os from "os";
import process from "process";
import http from "http";

if(cluster.isPrimary){
    // jalankan worker
    console.info(`primary : ${process.pid}`)
    for(let i = 0; i < os.cpus().length; i++){
        cluster.fork();
    }

    cluster.addListener("exit", (worker) => {
    //cluster.addListener("exit", function(worker){
        console.info(`Worker ${worker.id} is exited`);
        cluster.fork(); // jika detect mati running lg
    })
}
if(cluster.isWorker){
    console.info(`worker : ${process.pid}`);

    const server = http.createServer((request, response) => {
        response.write(`Response from process ${process.pid}`);
        response.end();
        process.exit();
    });

    server.listen(3000);
}














