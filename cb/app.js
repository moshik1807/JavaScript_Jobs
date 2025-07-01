import readline from 'node:readline';
import { read, readFile, writeFile } from "node:fs"


const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function readF(cb) {
    readFile("arrayObj.txt", "utf8", (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        cb(data)
    })
}

function writeF() {
    r.question("", (answer) => {
    let newObj;
    newObj = JSON.parse(answer)
    console.log(answer)
    r.close();
    readF((data) => {
        console.log(answer)
        const arr = JSON.parse(data)
        arr.push(newObj);
        writeFile("arrayObj.txt", JSON.stringify(arr), (err,data) =>{
            console.log(data ? 'success' : err)
        })
    })
}
)}

writeF()
