import readline from 'node:readline';
import { read, readFile, writeFile } from "node:fs"
import { json } from 'node:stream/consumers';


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
    r.question("enter new object ", (answer) => {
    let newObj;
    newObj = JSON.parse(answer)
    r.close();
    readF((data) => {
        const arr = JSON.parse(data)
        arr.push(newObj);
        writeFile("arrayObj.txt", JSON.stringify(arr), (err) =>{
            if(err){
                console.log(err)
            }
        })
    })
}
)}


function updeatObj(){
    r.question("entr id obj to you want chenge", (answer) => {
    let id = (answer)
    r.question("enter new valu",(answer) =>{
    let newValu = answer
    r.close()
    readF((data) =>{
        const arr = JSON.parse(data)
        for(let element of arr){
            if(element.id == id){
                element.name = newValu
                break
            }
        }
        writeFile("arrayObj.txt", JSON.stringify(arr), (err) =>{
            if(err){
                console.log(err)
            }
        })
    })
    })
}
)}


function DeletObj(){
    r.question("entr id obj to you want delet", (answer) => {
    let d = answer
    r.close()
    readF((data)=>{
        const arr = JSON.parse(data)
        arr.forEach((element,i)=>{
            if(element.id == d){
                arr.splice(i,1)
                return
            }
        })
         writeFile("arrayObj.txt", JSON.stringify(arr), (err) =>{
            if(err){
                console.log(err)
            }
        })
    })

    })
}


function menu(){
    console.log("to read pres 1")
    console.log("to add pres 2")
    console.log("to updeat name by id pres 3")
    console.log("to delet obj by id pres 4")
    r.question("",(answer)=>{
        let Answer = answer
        switch (Answer) {
            case "1":
                readF(console.log)
                r.close()
                break;
            case "2":
                writeF()
                break;
            case "3":
                updeatObj()
                break;
            case "4":
                DeletObj()
                break;
            default:
                break;
        }
    })
}

menu()