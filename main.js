//let x = 100+ 6;
//console.log(x);
//console.log(typeof(x));


const myFunction = (a, b) => {
  return a * b;
}

//console.log(myFunction(5,5));

// create an object
const car = {type: "Fiat", model: "500", color: "white"};
//console.log("car type: ", car.type);

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;  
  }
}

//console.log(person.fullName);

let today = new Date();
//console.log(today);
let text = "John Doe";
//console.log(text.length);

const demo = {};
demo.firstName = "John";
demo.lastName = "Doe";
demo.age = 50
demo.eyeColor = "blue"
const x = demo;
x.age = 10
//console.log(demo);
// truyền tham số dạng tham chiếu - pass by reference
function doMagic2(a1) {
  a1.name = 'Po';
}
const a = { name: 'Hau' };
// const a1 = a; // 1e2f
doMagic2(a);
//console.log(a.name); // Hau or Po??? ==> Po
// How to clone a object ==> using spread operator ES6
const newDemo = {...demo};
newDemo.name = "Young Buff";
//console.log("demo obj: ", demo);
//console.log("newDemo: ", newDemo);


// js for in loop
let txt = "";
for (let item in person) {
  txt += person[item] + "";
}
//console.log(typeof txt);

// add new properties
person.nationality = "English";
//console.log(person);

// Delete properties using keywork delete
delete person.firstName;
//console.log(person.firstName); => expect output: undefined

// Prototype (a store has properties and methods to object implement, like class and object)
const age = new Number(12);
age.toString();
age.toFixed();
//console.log(typeof age.toString());

// object method
person.running = () => "Running"; // add new method to person obj
//console.log(person.running()); ==> expect output: Running

let message = new String("Hello world!");
//console.log(message.toUpperCase());

//console.log(Object.values(person)); => get all array and convert to array
//console.log(typeof JSON.stringify(person)); // convert an obj to a string

// How to convert function to string
const person1 = {
  name: "Jhon",
  today: new Date(),
  age: () => {
  return 30;
  }
};
person1.age = person1.age.toString(); // convert function to string before stringify
//console.log(JSON.stringify(person1));

const person3 = {
  firstName: "Phuoc",
  lastName: "Kang",
  languge: "en",
  get lang() {
    return this.languge;
  },
  set lang(lang) {
   this.languge = lang; 
  }
}
person3.lang = "vn";
//console.log(person3.lang);

//JavaScript Object Constructors
function PersonX(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new PersonX("Jhon", "Doe", 30, "blue");
//const myMother = new PersonX("Sally", "Rally");
//console.log(myFather);

// JavaScript Object Prototype
function PersonY(first, last, age, eyeColor) {
  this.firstName = first,
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyeColor;
}
PersonY.prototype.nationality = "Viet Nam"; // add new properties to prototype
PersonY.prototype.name = function() {
  return `${this.firstName} ${this.lastName}`;
}

const myDad = new PersonY("Anh", "tran", "51", "black");
 
//console.log(myDad.nationality);
//console.log(myDad.name());

// Java script set

const letters = new Set(['a', 'b', 'c']);
letters.add("d");
//console.log(letters);
let textA = "";
letters.forEach((element) => {
  textA += `${element} `;
});
//console.log(textA);

// THis keywork
const xxx = this;
//console.log(xxx);

// Callbacks
const displayResult = (result) => {
  console.log(result);
}
const calculate = (a, b, displayResult) => {
  let z = a + b;
  displayResult(z);  //calback funtion as a argument 
}
//calculate(10, 20, displayResult);

const myFunctionX = () => {
  console.log("I love you");
};

const getText = (callback) => {
  console.log('Wating 3s for get text ...')
  setTimeout(callback, 3000);
}
//getText(myFunctionX);

// Promise syntax
/*
const textCall = (text) => {
  console.log(text);
}
const callToGirlFriend = new Promise((resolve, reject) => {
    setTimeout(() => {
      const isPickup = false;
      if (isPickup) {
        textCall("Hello baby");
        resolve("Hello anh");
      } else {
        reject("No pickup");
      }
    }, 3000) 
})

callToGirlFriend.then((response) => {
  console.log(response);
  console.log("Call success!");
}).catch((error) => {
  console.log(error);
  console.log("Your girl friend not pickup a phone :((");
})
*/
// Async await
// promise

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}
const testIII = resolveAfter2Seconds();
//testIII.then((response) => console.log(response));
//console.log("23423");
// Async 
/*
const callToMom = async () => {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => { resolve("Call to your girlfriend success");
    }, 3000);
  });
  const res = await myPromise;
  console.log(res);
}
callToMom();
console.log("Pending for your friend pickup a phone");
*/

const getTodoDetail = async (id) => {
  let promise = new Promise((resolve) => {
    let req = new XMLHttpRequest(); 
    req.open('GET', `https://jsonplaceholder.typicode.com/todos/${id}}`, true);
    req.onload = () => {
      if (req.status === 200) {
        resolve(req.response);
      } else {
        resolve(`Error to get todo with id = ${id}`);
      }
    }
    req.send();
   }); 
  const response = await promise;
  console.log(response);
}
getTodoDetail(1);
