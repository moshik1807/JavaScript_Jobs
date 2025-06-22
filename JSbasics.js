//1
let a = "some string"
let b = "other string"
a = a+b
b = a.slice(0,b.length)
a = a.slice(a.length-b.length)
console.log(a)
console.log(b)

//2
const arr = [["w","X","g",5,"x"],["y","q","X",0,"x"],["u","d","x","x","X"]]
let sum = 0
for (let i = 0;i < arr.length;i++)
{
    for(let j = 0;j < arr[i].length;j++)
    {
        if(arr[i][j] === "X")
        {
            console.log(i,j)
            sum ++
        }
    }
}

//3
let family = { parents: {}, children: [ {name: "Ali"}, {name: "Lea"}, {name: "Mona"} ] };
console.log(family.children[2].name)

//4
let str = "abcde"
let tempe = ""
for(let i = str.length-1;i >-1;i--)
{
    tempe += str[i]
}
console.log(tempe)

// 5
let array = ["2",5,true,10,9,87,,,,,,,,,]
let x = {}
for(let i = 0;i<array.length;i++)
{
    if (x[typeof array[i]]) 
        {
            x[typeof array[i]] = x[typeof array[i]] + 1
        }
        else
        {
            x[typeof array[i]] = 1
        }
}
for (let key of Object.keys(x))
{
    console.log(key + ": " + x[key])
}