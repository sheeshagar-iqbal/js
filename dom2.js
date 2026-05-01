// let change =(self)=>{
//     console.log(self.id);

// const { log } = require("debug/src/node");

//     document.querySelector('#canvas').style.backgroundColor=self.id

// }

// const btn= document.querySelectorAll('.button')
// const body =document.querySelector('body')
// // console.log(btn);
// btn.forEach(function(button){
//     button.addEventListener('click',function(e){
//     // console.log(e);
//     // console.log(e.target.id);
//     body.style.backgroundColor=e.target.id

//     })

// })

// // -------------------bg -change ---------------===----------

// let isture= false
// let toggle =()=>{
//     let con= document.querySelector('#container p')

//     if(isture){
//         con.style.display='block'
//         isture=!isture

//     }else{
//         con.style.display='none'
//         isture=!isture

//     }
// }

// --------------toggle---------------------

// let bmi = () => {
//   let cm = parseInt(document.querySelector("#cm").value);
//   let kg = parseInt(document.querySelector("#kg").value);
//   let res = kg / cm;
//   console.log(kg);
//   console.log(cm);
//   console.log(res);
//   document.querySelector("#result").innerHTML = res;
// };

// let from= document.querySelector('form')

// from.addEventListener('submit',function(e){
//     e.preventDefault()
//     let cm = parseInt(document.querySelector("#cm").value);
//     let kg = parseInt(document.querySelector("#kg").value);
//     let res=  document.querySelector("#result")

//     if (cm===''|| cm<0 || isNaN(cm)){
//         res.innerHTML= 'please enter the valid height in cm'
//     }
//     else if (kg===''|| kg<0 || isNaN(kg)){
//         res.innerHTML= 'please enter the valid wright in kg'
//     }
//     else{
//         res.innerHTML=kg/((cm*cm)/10000).toFixed()
//     }

// })

//  ===============digital clock ===================

// let clock= document.getElementById('clock')

// setInterval(() => {
//     let data =new Date()
//     clock.innerHTML= data.toLocaleTimeString()
// }, 1000);

//  ============guess number ==============

// const randomNumber= parseInt(Math.random()*100 +1)
// const submit= document.getElementById('sunt')
// const userInput = document.querySelector('#guessField')
// const guessSlot =document.querySelector('.guesses')
// const remaining= document.querySelector('.lastResult')
// const lowHigh= document.querySelector('.lowOrHigh')
// const startOver= document.querySelector('.resultParas')

// const p = document.createElement('p')

// let prevguess =[]
// let numguess=1
// let playgame =true

// async ==========================================asyns=================

// setTimeout(function(){
//     // console.log('iqbal');
//     document.querySelector('h1').innerHTML='iqbal'

// },2000)
// let time = ()=>{
//     let dd= new Date()
//     console.log(dd.toString());

// }

// setTimeout(time,2000)

//    changa bg color per second==============/////////////////////=================

// console.log(Math.floor(Math.random()*16));

// let code = () => {};
// code()
// console.log(str);

// console.log(code());
// console.log(str);

// document.querySelector('#start').addEventListener('click',()=>{
//             setInterval(()=>{
//       code()
//       document.querySelector('body').style.color=str
//             },1000)
// })
// let intervalid=null
// function started() {
// //   console.log(str + "out");
//     let hexcode = "0123456789ABCDEF";


//   intervalid= setInterval(() => {
//     let str = "#";
//     // str += hexcode[Math.floor(Math.random() * 16)];
//     console.log(str);
//     for (let i = 0; i < 6; i++) {
//       str += hexcode[Math.floor(Math.random() * 16)];
//     }

//     document.querySelector("body").style.backgroundColor = str;
//     // console.log(str + "inner");
//     // console.log(typeof str);
//   }, 1000);
// }

// function stoped(){
//     clearInterval(intervalid)

// }

// console.log();





