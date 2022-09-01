// butuh async function
function samplePromise(){
    return Promise.resolve("Amardian");
}

async function run(){
    const name = await samplePromise();
    console.info(name)
}

run();





