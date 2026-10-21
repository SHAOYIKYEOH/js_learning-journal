//callback function

function a(execute){
    execute();
}

function callbackFunction(){
    console.log('sry for late!');
}

a(callbackFunction);

// promise (constructor function)
const problem = false;

const p = new Promise((resolve, reject) => {
    if(problem){
        resolve("order placed");
    } else {
        reject("order cancelled");
    }
})

// .then() callbacks run asynchronously after the Promise is fulfilled.
// Promise 成功后，.then() 中的回调函数会异步执行。
p
.then(function (message){
    console.log(`${message} - succeed!`);
})
.catch((message) => {
    console.log(`${message} - failed`);
});

// fetch() returns a Promise object 【書き方1】
const pokemon = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

const X = pokemon
            .then((response)=>{
                return response.json();
            });

X.then((data)=>{
    console.log(data)
}) // 長い書き方

// fetch() returns a Promise object 【書き方2】
const pokemon2 = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

pokemon2
.then((response)=>{
    return response.json();
}).then((data)=>{console.log(data)});//ショットカット

// fetch() returns a Promise object 【書き方3】
fetch("https://pokeapi.co/api/v2/pokemon/Gardevoir")
.then((response)=>{return response.json()})
.then((data)=>{console.log(data)});//ショットカット

// fetch() returns a Promise object 【書き方3.1】
fetch("https://pokeapi.co/api/v2/pokemon/Gardevoir")
.then((response)=>{return response.json()})
.then((data)=>{console.log(data)})
.then