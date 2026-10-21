//Asynchronous vs synchronous

function show2(){
    console.log(2)
};

console.log(1);
setTimeout(show2,3000);
console.log(3);

function myPromise(callback){
    function success(){
        return 'success';
    };
    function failed(){
        return 'failed';
    };

    callback(success(),failed());
}

myPromise(function(a,b){
    console.log(a+b);
});