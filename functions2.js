const data = [
{
name: "John",
birthday: "1-1-1995",
favoriteFoods: {
meats: ["hamburgers","sausages"],
fish: ["salmon","pike"],
}
},
{
name: "Mark",
birthday: "10-5-1980",
favoriteFoods: {
meats: ["hamburgers","steak","lamb"],
fish: ["tuna","salmon","barracuda"]
}
}
]
//1
function returnAllNames(arrayObj){
    const arrayNames = []
    for(const obj of arrayObj){
        arrayNames.push(obj.name)
    }
    return arrayNames
}
console.log(returnAllNames(data))
//2
function x(arrayObj){
    const newArrayobj = arrayObj.filter((obj)=>{
        return Number(obj.birthday.slice(-4)) < 1990
    })
    return newArrayobj
}
console.log(x(data))
//3
function allTheFood(arrayObj){
    let newObj = {}
    for (const element of arrayObj){
        for(const arrayFood in element.favoriteFoods){
            for(const food of element.favoriteFoods[arrayFood]){
                if(newObj[food]){
                     newObj[food] += 1
                }
                else{
                     newObj[food] = 1
                }
            }
        }
    }
    return newObj
}
console.log(allTheFood(data))
