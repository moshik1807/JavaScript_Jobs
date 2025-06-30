import {readFile,stat}from "node:fs"
//1
function readText(){
    readFile("file.txt",'utf8',(err,data)=>{
        if (err) {
            console.error("error:", err);
            return;
        }

        console.log(`File Content: ${data}`);

        stat("file.txt", (err, stats) => {
            if (err) {
            console.error("error:", err);
            return;
        }

       console.log(`Size: ${stats.size} bytes`);
       console.log("Created At:", stats.birthtime.toISOString());
    });
  });
}
readText();

//2

