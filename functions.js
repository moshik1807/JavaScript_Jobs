//1
function multi(num)
{
    return num * 2
}

function doubleValues(arrayNumbers)
{
    const newArray = arrayNumbers.map(multi)
    return newArray
}
console.log(doubleValues([1,2,3,4]))


//2
function oldNumber(num)
{
    if(num%2 === 0)
    {
        return num
    }
}

function arrayOldNumber(arrayNumbers)
{
    const newArray = []
    for (const element of arrayNumbers)
    {
        if(element%2===0)
        {
            newArray.push(element)
        }
    }
    return newArray
}
console.log(arrayOldNumber([1,2,3,4,5,6,7,8,9,10]))


//3
function showFirstAndLast(array)
{
    let newArray = array.filter((num)=>
        {
           return (typeof num == "string") && ((array[0] === num)||(array[array.length-1] === num)) 
        })
    return newArray
}
console.log(showFirstAndLast(["a","b","c","d"]))


//4
function vowelCount(str)
{
    const result = {}
    for(const element of str)
    {
        if(element in result)
        {
            result[element]++
        }
        else
        {
            result[element] = 1
        }
    }
    return result
}
const a = vowelCount("vsvsvdf")
console.log(Object.keys(a))
console.log(Object.values(a))


//5
function capitalize(str)
{
    let newStr = ""
    for(const element of str)
    {  
        newStr += element.toUpperCase()
    }
    return newStr
}
console.log(capitalize("abcdef"))


//6
function previousLetter(str)
{
    newStr = str.charCodeAt()
    newStr --
    return String.fromCharCode(newStr)
}
function shiftLetters(str)
{
    let newStr = ""
    for(const element of str)
    {
       newStr +=  previousLetter(element)
    }
    return newStr
}
console.log(shiftLetters('bcd'))


//7
function swapCase(str){
    let newStr = ""
    let counter = 0;
    for(const element of str){
        if(counter%2 == 0){
            newStr += element.toUpperCase()
        }
        else{
             newStr += element
        }
        counter++
    }
    return newStr
}
console.log(swapCase("abcdef"))