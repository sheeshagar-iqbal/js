// const { del } = require("express/lib/application");

let obj ={
    name: 'sheeshagar',
    city: 'ashok nagar',
    age:23,
    fun: function(){
        console.log(this.name);
    },
    fruits:['apple ','banana','mango']

}

// console.log(obj.age);
// obj.age=24
// obj.myfees= 24000
// delete obj.city
// console.log(obj.fruits[1]);


// const {name,city,age,fun,fruits}= obj
// console.log(name);
// console.log(city);
// console.log(age);
// console.log(fun);
// console.log(fruits);


// desturucturing - des. is a way to unpack values from obj. int variables

// spread operator-  the spread operator (...) is used to 'spread the elements of an object or array into another object or array

const newobj= {...obj}
// console.log(newobj);


// for (const key in newobj) {
//     console.log(key);
//     console.log(newobj[key]);
// }

// for (const ele of obj.fruits) {
//     console.log(ele);
    
// }

// let arr =[2,43,53,2,53,64]
// let newarr =arr.map((e)=>{
//     return e*2
// })
// let newarr =arr.map(e => e*2).map(e =>e-4)
// console.log(newarr);



// let arrnew = arr.filter((e)=>{
//     return e%2==0
// })
// console.log(arrnew);

// arr.filter((e)=>{
//     console.log(e%2==0);
//     // console.log(arr[e%2==0]);
     
// })


// arr.forEach(element => {
//     console.log(element/2);
// });


// Object  ---forin 

// arr =[]


// call backfunction  - which fun used to as a parameter


//  higher order function - which fun contain fun as a parameter


let arr =[
     {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  
]


let arr2=[
    {
        name:'sheeshgar',
        age:23,
        city:'bhopal'
    },
    {
        name:'jishan',
        age:24,
        city:'shultanpur'
    },
    {
        name:'mukul',
        age:23,
        city:'bhopal'
    },
    {
        name:'vikas',
        age:23,
        city:'bhopal'
    }
]
let show = document.querySelector('#show')
// arr.map((e)=>{
//     console.log(e.id);
//     // show.innerHTML=e not print it
    
// })

// object are not print in doucument ([object ,Object])

arr2.map((e)=>{
    // show.style.grid
    show.innerHTML+=`
    <div class='box'>
    
    <h2>${e.name}</2>
    <p>${e.age}</p>
    <p>${e.city}</p>
    <img src=${e.imgg}>
    </div>

    `
    
})

    // <h2>${e.id}</2>
    // <p>${e.title}</p>
    // <p>${e.completed}</p>