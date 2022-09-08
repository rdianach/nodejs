// kompresi dengan Gzip
import zlib from "zlib";
import fs from "fs";

const source = fs.readFileSync("32_zlib.mjs") // sync blocking
//console.info(source.toString())
const result = zlib.gzipSync(source); // harus buffer
//console.info(result.toString())

fs.writeFileSync("32_zlib.mjs.txt", result)

