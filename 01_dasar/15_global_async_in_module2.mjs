// default behafior async function
function samplePromise(){
    return Promise.resolve("Amardian");
}

const name = await samplePromise();
console.info(name);



