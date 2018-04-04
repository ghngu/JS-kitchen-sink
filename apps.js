var name = 'George Nguyen';
const stateCount = 50;
var sum = 5 + 4;
console.log(sum);

function checkName(name) {
    if (name.charCodeAt(0) > 76) {
        console.log('Back of the line!');
    } else {
        console.log('Next!');
    }
};

checkName(name);
// if the first letter (position[0]) of var name == L it will return "Back of the line!" in the console. otherwise it will return "Next!" 

function sayHello() {
    return 'Hello world!';
};

alert('Hello World!');



var people = [
    {
        name: 'Charles',
        age: 20
    },
    {
        name: 'Abby',
        age: 27
    },
    {
        name: 'James',
        age: 32
    },
    {
        name: 'John',
        age: 17
    }
];

function checkAge(name, age) {
    if (age < 21) {
        console.log('Sorry ' + name + ", you aren't old enough to view this page!");
    } else {
        console.log("Welcome! " + name);
    }
};

for (var i=0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

var veggies = ['Corn', 'Brussel Sprouts', 'Potatoes', 'Tomatoes', 'Carrots'];

for (var x=0; x < veggies.length; x++) {
    console.log(veggies[x]);
}



function getLength(string) {
    return string.length;
};

var num1 = getLength('Hello World');

function even(num) {
    if (num % 2 == 0) {
        console.log('The world is nice and even!');
    } else {
        console.log('The world is an odd place!');
    }
};

even(num1);