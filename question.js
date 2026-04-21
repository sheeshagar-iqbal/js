// // // leap year
// // year =2025

// // if (year%4==0 && year%100 !=0){
// //     console.log('leap year')
// // }
// // else if(year%400==0){
// //     console.log('leap year')
// // }
// // else{
// //     console.log(' not leap year')

// // }

// // //Check if a number is divisible by both 3 and 5.

// // num =12
// // if (num%3==0 && num%5==0){
// //     console.log('divisible by both 3 and 5');

// // }
// // else{
// //     console.log(' not divisible by both 3 and 5');

// // }

// // Print grade based on marks:

// // 90+ → A
// // 75–89 → B
// // 50–74 → C
// // <50 → Fail

// // num=49

// // if (num>=90){
// //     console.log('grade A')
// // }
// // else if(num>=75 && num<=89){
// //     console.log('grade B')
// // }
// // else if(num>=50 && num<=74){
// //     console.log('grade C')
// // }
// // else{
// //     console.log(' fail ')

// // }

// // Check if a character is a vowel or consonant.

// // let chr ='b'

// // chr =chr.toLowerCase()

// // if (chr=='a' ||chr=='o' ||chr=='u' ||chr=='i' ||chr=='e'){
// //     console.log('character is a vowel');

// // }
// // else{
// //     console.log('character is a consonant');

// // }

// // Create a simple calculator using if-else (+ - * /).

// // let num=42
// // let num2=32
// // console.log(' press 1 for +');
// // console.log(' press 2 for -');
// // console.log(' press 3 for *');
// // console.log(' press 4 for /');
// // let userchoise= parseInt(prompt('enter the your choice'))
// // if (userchoise==1){
// //     console.log(num+num2);

// // }
// //  else if (userchoise==2){
// //     console.log(num-num2);

// // }
// // else if (userchoise==3){
// //     console.log(num*num2);

// // }
// // else if (userchoise==4){
// //     console.log(num/num2);

// // }
// // else{
// //     console.log('invalid choice');

// // }

// // Print even numbers from 1 to 20.

// // for (let i=1; i<21; i++){
// //     if (i%2==0){
// //         console.log('even',i);
// //     }
// // }

// // Find the sum of numbers from 1 to N.

// // let num= 5
// // let sum=0

// // for (let i=1; i<=num;i++){
// //     sum+=i
// // }
// // console.log('sum is',sum);

// // Find the factorial of a number.

// // let num= 5
// // let fac=1

// // for (let i=1; i<=num;i++){
// //     fac*=i
// // }
// // console.log('factorial of',num,' is',fac);

// // Print all prime numbers from 1 to 50.


// for (let i = 2; i <= 50; i++) {
//   let isprime = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isprime = false;
//     //   console.log(i);
      
//       break;
//     }
//   }
//   if (isprime) {
//     console.log(i);
//   }
// }





// // if (2<2){
// //     console.log('true');
    
// // }
// // else{
// //     console.log('false');
    
// // }

// // Reverse a number (e.g., 123 → 321).

// // let num=123
// // let temp =num
// // rev=0

// // while(temp>0){
// //     sum= temp%10 
// //     rev=rev*10 +sum
// //     temp=Math.floor(temp/10)
// //     sum=0
// // }
// // console.log(rev);


// // console.log(123%10);
// // console.log(Math.floor(123/10));



// // Count digits in a number.

// // let num = 12345;
// // let count = 0;

// // while (num > 0) {
// //     num = Math.floor(num / 10)
// //     count++
// // }

// // console.log("Digits:", count);

// // for(let i=0;i<5;i++){
// //     row=''
// //     for (let j=0; j<i+1;j++){
// //         row+='*'
// //         console.log(row);
// //         break;
        
// //     }
// // }

// // for (let i = 1; i <= 5; i++) {
// //     console.log("*".repeat(i));
// // }
// // for (let i = 1; i <= 5; i++) {
// //     let str = "";
// //     for (let j = 0; j < i; j++) {
// //         str += "*";
// //     }
// //     console.log(str);
// // }

// function one(){
//     let name= prompt('enter the name')
//     if (name==''){
//         alert('name is required')
//     }
//     else{
//         alert('welcome' +name)
//     }
    
// }

// function two(){
//     let num= parseInt(prompt('enter the number'));
//     if (num%2==0){
//         alert('num is even'+num)
//     }
//     else{
//         alert('num is odd'+num)
        
//     }
// }

// function three(){
//     let num= parseInt(prompt('enter the number'));
//     if (num>=90){
//         alert(num+ 'A grade')
//     }
//     else if (num>=70){
//         alert(num+ 'B grade')
//     }
//     else if (num>=50){
//         alert(num+ 'C grade')
//     }
//     else{
//         alert(num+'fail')
        
//     }
// }


// function third(){
//     let num= parseInt(prompt('enter the number'));
//     for(num;num>=1;num--){
//         console.log(num);
        
//     }
    
// }


// function five(){
//     let word= prompt('enter the word')
//         console.log(word.toUpperCase());
// }

// function six(){
//     let str= '   cybrom bhopal  '
//     alert(str.trim())
// }
// function seven(){
//     let arr=['HTML','CSS','JS']
//     arr.push('REACT')
//     arr.shift('HTML')
//     alert(arr)

// }

// function eight(){
//     sum=0
//     let arr=[1,2,3,4,5,6,7,8,9,10]
//     for (let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     alert(sum)

// }
// function nine(){
//     alert('js is easy')
// }

// function ten(){
//     let arr=[1,2,3,4,5]
//     for (let i=0;i<arr.length;i++){
//         if(arr[i]>3){
//              console.log(arr[i])
//         }
//     }
// }

