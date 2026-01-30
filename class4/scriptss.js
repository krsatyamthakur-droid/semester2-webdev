// // // synchronoua code
// // console.log("hello james");
// // function fun(){
// //     console.log("hello henry")
// // }
// // fun();
// // console.log("harry james potter");

// // // Asynchronous code
// // console.log("before");
// // function funn(){
// //     console.log("henry superman")
// // }
// // setTimeout(funn,0);
// // console.log("after");
// console.log("before");
// const fun2=() => {
//     console.log("set timout 1");
//     let timeInFuture=Date.now()+7000;

//     while(Date.now() < timeInFuture){}
//     console.log("after while");
// };
// const fun1=() => console.log("hello");
// setTimeout(fun1,2000);
// setTimeout(fun2,1000);
// console.log("after");

console.log("start");

setTimeout(() => {
    console.log("first Timeout (1s)");

    setTimeout(() => {
        console.log("inner Timeout (0.5s)");
    }, 500);

}, 1000);

setTimeout(() => {
    console.log("second timeout (0s)");
}, 0);

function runTask() {
    console.log("Inside runTask");

    setTimeout(() => {
        console.log("time inside (300ms)");
    }, 300);
}

function innerTask() {
    console.log("inside innerTask");
}

innerTask();
runTask();
