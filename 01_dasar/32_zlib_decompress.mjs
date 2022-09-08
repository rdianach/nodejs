// dekompresi dengan Gzip
import zlib from "zlib";
import fs from "fs";

const source = fs.readFileSync("32_zlib.mjs.txt")
console.info(source.toLocaleString()); // compress

const result = zlib.unzipSync(source);
console.info(result.toString()); // decompress