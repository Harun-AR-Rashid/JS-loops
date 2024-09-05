/***

Generate a multiplication table for number 9

 */

// const num = 9;
// for(let i = 1; i <= 10; i++){
//     const result = i * num;
//     console.log(`${num} * ${i} = ${result}`);
//     // console.log( `${num} * ${i} = ${(i * num)}` )
// }
let myObject = {
    name :'joe Doe',
    age : 25,
    city :'Panama',
    isStudent : true

}
for(const prop in myObject){
    console.log('key', ':', prop, '|', 'type', ':', typeof(myObject[prop]));
}