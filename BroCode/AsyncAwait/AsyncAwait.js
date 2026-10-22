// traditional promise way

function sendRequest(){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject('something is wrong')}
        ,2000);
    });
}
// 1. sendRequest() creates and returns a Promise object.
// 2. The Promise starts in the pending state.
// 3. setTimeout() schedules the callback to run after ~2 seconds.
// 4. When resolve('hello') executes,
//    the Promise changes from pending to fulfilled.
// 5. promise stores the Promise object, not 'hello'.
// 6. .then() registers a callback function.
// 7. When the Promise is fulfilled, the callback function will be executed and it
//    receives 'hello' as its parameter.
const promise = sendRequest();
promise.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(`ERROR ${error}`);
});

// AsyncAwait way
async function getMessage(){
    try{
        const message = await sendRequest();
        console.log(typeof message);
    }
    catch(message){
        console.log(`ERROR ${message}`);
    }
}

getMessage();