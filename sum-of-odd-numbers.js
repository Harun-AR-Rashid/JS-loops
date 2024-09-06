

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
let sum2 = 0;
for(let i = 206; i<=311; i++){
    if(i % 2 ===0){
        console.log(i);
        sum2 = sum2 + i;
        console.log(sum2);
    }
    console.log('total sum of the all even numbers is',sum2);
}
// using while loop
let nc = 206;
let sum_even = 0;
while(nc<=311){
    console.log(nc);
    if(nc %2===0){
        console.log(nc);
        sum_even = sum_even + nc;
        console.log(sum_even);
    }
    nc++;
}
console.log('total some of all even numbers is', sum_even);

/*programming hero*/