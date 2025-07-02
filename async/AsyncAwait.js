import { promises } from "node:dns"
import {readFile,stat,readdir} from "node:fs/promises"
//1
function readFilePromise(path){
    readFile(path,"utf8")
    .then(data=>{
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })
}
// readFilePromise('file.txt')



//2
async function readFileAsync(path){
    try{
        const file = await readFile(path,"utf8")
        console.log(file)
        
    }
    catch(err){
        console.log(err)
    }
}
// readFileAsync('file.txt')

//3
async function getFileSize(path){
    try{
    const statFile = await stat(path,"utf8")
    console.log(statFile.size)
    }
    catch(err){
        console.log(err)
    }

}
// getFileSize('file.txt')

//4
async function listFiles(dir){
    try{
    const dir1 = await readdir(dir)
    console.log(dir1)
    }
    catch(err){
        console.log(err)
    }
}
// listFiles(`../`)

//5
async function readFilesInOrder(filesArray){
    for(const file of filesArray){
        try{
            const x = await readFile(file,"utf8")
            console.log(x)
        }
        catch(err){
            console.log(err)
        }
    }
}
readFilesInOrder([`name.txt`,`newfile.txt`,`file.txt`])

//6
async function readFilesParallel(files){
    try{
    const newArray = files.map(file =>{
        readFile(file,"utf8")
    })
    const x = await Promise.all(newArray)
    for(const file of x){
        console.log(file)
    }
    }
    catch(err){
        console.log(err)
    }
} 