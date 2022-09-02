// domain name server // hosting
import dns from "dns/promises";

const address = await dns.lookup("www.programmerzamannow.com"); // balikan object

console.info(address.address);
console.info(address.family);
