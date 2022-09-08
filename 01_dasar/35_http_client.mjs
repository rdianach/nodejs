// http // https
import https from "https"; 

const endpoint = "https://hookb.in/dmL1OxpP2DUxBzMxPGB9";
const request = https.request(endpoint, {
    method: "POST", 
    header: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`Recive data : ${data.toString()}`);
    })
});

const body = JSON.stringify({
    firstName : "Amardian",
    lastName : "Achmad",
})

request.write(body);
request.end();
