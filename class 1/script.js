// // // function great(a){
// // // console.log("parameter",a);
// // // return "function great called ";
// // // }


// // // great(7);
// // // let a =great(7);
// // // console.log(a);

// // console.log(sum(543,435))
// //  function sum(a,b){
// //     return a+b;
// // }
// // sum(435,4536);
// // // ANONAMUS FUNCTION ==> WAISA FUNCTION JISKA NAME NHI HOTA 


// // function great(a="234", ...rest){
// //     console.log("parem",a,"extra:",);

// // }
// // great()
// // great(1);
// // great(1,23,434,4,5,5);
// // ...existing code...
// // console.log(sum(543,435))
// //  function sum(a,b){
// //     return a+b;
// // }
// // sum(435,4536);
// // // ...existing code...

// // function great(a = "234", ...rest){
// //     console.log("param:", a, "extra (array):", rest);
// //     if (rest.length === 0) {
// //         console.log("no extra parameters");
// //         return;
// //     }
// //     // print each extra parameter on its own line
// //     rest.forEach((value, index) => {
// //         console.log(`extra[${index}] =`, value);
// //     });
// // }

// // great();
// // great(1);
// // great(1);
// // great(1);
// // great(1, 23, 434, 4, 5, 5);

// // function declaration 
// // function great(a){
// //     console.log("param:",arguments[9]);
// //     // loops can be used to access all the args 

// // }
// // great(0,45,3,45,443,534,435,435,453,453,453,54343);
// // rest operator 
// const great=(...args)=>{
//     console.log(args);
// }
// great(654,76,587,7896,768,765,5,34,242,2344,234,2,453,45,35,45,455,6,456,456,45,67,45)

//   let cp=prompt("Enter your marked price");
// function discount(a){
//      let sp=10/100*a;
//      let op=sp*18/100;
//     return op;
// console.log(discount);


// }
// // this keyword
// const x={
//     names:"asha kitchen ",
//     role:'JS developer',
//     exp:30,
//     show:function(){

//     }
// }

// let a=10;
// function outer(){
    
//     let a=20;
//     console.log(a);
//     function inner(){
//         let a=30;
//         console.log(a);
//     }
//     inner();
// }
// outer();
// console.log(a);




