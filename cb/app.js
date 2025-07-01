import readline from 'node:readline';
import {read, readFile, writeFile} from "node:fs"


const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// r.question("", (answer) => {
//   console.log("" + answer + "!");
//   r.close();
// });


function readF(cb){
    readFile("arrayObj.txt","utf8",(err,data)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(data)
        cb(data)
    })
}


function writeF(){
    writeFile("arrayObj.txt","utf8",(err,data)=>{
        if(err){
            console.log(err)
            return
        }

    })
}


readF()
function uppdeat(){
    r.question
}

function createObj(){
    r.question("enter new json: ",())
}