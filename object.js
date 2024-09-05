// Task-1
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
colors["golden rod"] = '#DAA520';
// console.log(colors);


// Task-2
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car['passenger capacity'] = 5;
// console.log(car);

// task-3
const student = {
    name : "Hamim Sakep",
    id : 5421,
    physics :{
        subject : 'HSC Phydics',
        authore :'Shajahan Tapan',
        marks : 30
    }
}

// through dot notation
const output = student.physics.marks
console.log(output);
// through bracket notation
const output1 = student['physics']['marks'];
console.log(output1);

// task-4
let student1 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
let numProp = Object.keys(student1).length;
console.log(numProp);

// task-5
let myObject = {
    name :'joe Doe',
    age : 25,
    city :'Panama',
    isStudent : true

}
for(const prop in myObject){
    console.log('key', ':', prop, '|', 'type', ':', typeof(myObject[prop]));
}