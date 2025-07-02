//1
function userById(id){
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then(res=>{
    return res.json()
})
.then(data=>{
    console.log(data.name)
})
} 
// userById(2)
//2
function getPost(postId){
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res =>{
        return res.json()
    })
    .then(data=>{
        console.log(data.title)
    })
}
// getPost(2)

//3
function getEmailById(id){
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then(res=>{
    return res.json()
})
.then(data=>{
    console.log(data.email)
})
} 
// getEmailById(1)

//4
function listUserTodos(userId){
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        console.log(`user ${userId} has ${data.length}`)
    })
}
// listUserTodos(10)

//5
function cheackPostExists(postId){
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res=>{
        return res.json()
    }).then((data)=> {
        if(!data.id) throw new Error("Post not found");
        console.log("post exists")
    })

    .catch(err=>{
        console.log(err)
    })
}
// cheackPostExists(30)


//6
function fetchWithDelay(url,delay){
    setTimeout(()=>{
        fetch(url)
        .then(res=>{
            return res.text()
        })
        .then(data=>{
            console.log(data.slice(0,50))
        })
    },delay)
}
// fetchWithDelay(`https://jsonplaceholder.typicode.com/users/`,1000)

//7
function suowKeys(url){
    fetch(url)
    .then(res=>{
        return res.json()
    })
    
}