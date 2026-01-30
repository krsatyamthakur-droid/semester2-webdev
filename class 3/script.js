// // STRING IN JS
// let str="hello developers cat dog";
// console.log(str.length); // length
// console.log(str.charCodeAt(9)); // ASCII code at given index

// //substring
// console.log(str.substring(10)); // startidx obly will print
// // start<end
// console.log(str.substring(10,12)); // str[10],str[11]
// // start>end
// console.log(str.substring(12,10)); // str[10],str[11]
// // if -ve index converts 0 by default 
// console.log(str.substring(12,-100)); // converts to str.substring(0)

// // slice 
// let sli1=str.slice(10); // starting on 10 idx print until the end 
// console.log(sli1);
// // start<end
// let sli2=str.slice(10,12);
// console.log(sli2) // str[10],str[11]
// // start<end
// let sli3=str.slice(12,10);
// console.log(sli3); // nothing will get means empty

// // negative index slice  >== slice from the end . get the string from the last index
// let sli4=str.slice(-28); 
// console.log(sli4);


// console.log(str.toUpperCase())
// console.log(str.toLocaleLowerCase())
// console.log(str.trim());

let arr=[34,35,4,5,677,56,5,76,86,543,45,67,54,567,6,54,567,6,543,56,54];
// slice --> to get a apart of the array
let subArr=arr.slice(2,4)
console.log(subArr);

// splice --> delete delements
arr.splice(2,4); // (startidex,deletecount), in original array 
console.log(arr);

// splice delete and add elements
arr.splice(5,7,56,5,76,86,543,45,67,54,567,6,54,567,6,543,56) // add element to the midst of the arary 

console.log(arr)
 



