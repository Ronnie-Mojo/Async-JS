const promiseOne = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async task is complete")
        resolve();
    },1000);
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2")
        resolve()
    },1000)

}).then(function(){
    console.log("Async 2 resolved")
});


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){  
       resolve({username: "Anshul" , email:"example@gmail.com"})
    },1000)
})
promiseThree.then(function(data){
    console.log(data)
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
           resolve({username:"Promise 4", password:"4milu"})
        }else{
           reject('Error: Something went wrong');
        }
    },1000)
})

promiseFour
.then((data)=>{
    console.log(data)
    return data.password
})
.then((pass)=>{
    console.log(pass)
})
.catch((err) => console.log(err))
.finally(()=> console.log("The promise 4 is either resoved or rejected"))



const promiseFive = new Promise ((resolve,reject) => {
    setTimeout(()=>{
       let error = false;
       if(!error){
        resolve({username:"promise5", number:"5" , working:"Promise 5 is working"})
       }else{
        reject('Error: something went wrong in promise5')
       }
    },1000)
});

  async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

consumePromiseFive()




fetch('https://jsonplaceholder.typicode.com/users')
.then((data) => {
    return data.json()
})
.then((response) => console.log(response))
.catch((error)=> console.log(error))
.finally(()=> console.log("All done with api's and fetch"))