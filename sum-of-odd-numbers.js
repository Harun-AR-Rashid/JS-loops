

/***
Subtask-1:
Display sum of all the odd numbers from 81 to 131.
 */
let n = 81;
let sum = 0;
while(n <=131){
    console.log(n);
    sum = sum + n;
    console.log(sum);
    n += 2;
}
console.log("total sum of the odd numbes is", sum);
// using for loops
let sum1 = 0;
for(let i = 81; i <=131; i++){
    console.log(i);
    if(i % 2 ===1){
        console.log(i);
        
        sum1 = sum1 + i;
        console.log(sum1);

    }
    console.log('total sum of the odd numbers', sum1);
}
/***





Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/