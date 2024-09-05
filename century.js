/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/
let num = 1;
while(num <= 200){
    console.log(num);
    if(num >=100){
        break;}
    num++
}
console.log("it's hundreds time enough")
// using for loops
for(let i = 1; i <= 200; i++){
    console.log(i);
    if(i >= 100){
        break;
    }
}
console.log("it's hundreds time enough")