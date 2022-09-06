// buffer ada di global
// const buffer = Buffer.from("Amardian Achmad")
// console.info(buffer)
// console.info(buffer.toString())

// buffer.reverse()
// console.info(buffer.toString())

// buffer encoding
const buffer = Buffer.from("Amardian Achmad", "utf8");

console.info(buffer.toString("base64"));
console.info(buffer.toString("hex"));

const bufferBase64 = Buffer.from("QW1hcmRpYW4gQWNobWFk", "base64url");

console.info(bufferBase64.toString("utf8"))








