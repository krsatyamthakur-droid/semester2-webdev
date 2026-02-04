 let a =document.querySelector("#grandparent");
 a.addEventListener("click",function(){
    console.log("grandparent clicked")
 })
let b=document.querySelector("#parent");
b.addEventListener("click",function(){
    console.log("parent clicked")
})

let c=document.querySelector("#child")
c.addEventListener("click",function(){
    console.log("child clicked")
})