// stream hanya kontrak saja
import fs from "fs";

const writer = fs.createWriteStream("target.log"); // replace file

writer.write("Amardian\n"); 
writer.write("D\n");
writer.write("Achmad\n");
writer.close();

const reader = fs.createReadStream("target.log");
// reader.on("data", function(data){
//     console.info(data.toString());
//     reader.close();
// });
//atau
reader.addListener("data", (data) => {
    console.info(data.toString())
});