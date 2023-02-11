// "use strict"

// Task 1

// let num = 15;
// function divideBy3And7(num){
//     if (num % 3 == 0 && num % 7 == 0)
//     {
//         console.log("Divided by 3 and 7");
//     }
//     else{
//         console.log("Not divided by 3 and 7");
//     }
// }
// divideBy3And7(num);



// Task 2

// let num = 7;
// let multiple = 1;

// function factorial(num){
//     if (num < 0){
//         return "Negative number doesn't have factoriality";
//     }
//     else if (num == 0){
//         return 1;
//     }
//     else{
//         for (let i = 1; i <= num; i++) {
//             multiple*=i;
//         }
//         return multiple;
//     }
// }

// let result = factorial(num);
// console.log("Factorial = ",result);



//Task 3

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let sum = 0;

// function sumOfSquareOfTheEvenNumbers(numbers)
// {
//     for (let i = 0; i < numbers.length; i++) {
  
//         if (numbers[i] % 2 == 0)
//         {
//             sum+=(numbers[i]**2);
//         }
//     }

//     return sum;
// }

// let result = sumOfSquareOfTheEvenNumbers(numbers);
// console.log("Sum of square of the even numbers = ",result);



//Task 4

// let email = "cavid@code.edu.az";
// let password = "12345";

// let login = (email,password) => {
//     if (email == "cavid@code.edu.az" && password == "12345")
//     {
//         console.log("Access is successful.");
//     }
//     else
//     {
//         console.log("Email or password is wrong. Please try again.");
//     }
// }

// login(email,password);



//Task 5

// let numbers = [8,3,9,2,1,11,16,5,7,10];
// let sum = 0;

// let sumOfOddNumbers = (numbers) => {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 == 1)
//         {
//             sum+=numbers[i];
//         }
//     }
//     return sum;
// }

// let result = sumOfOddNumbers(numbers);
// console.log(`Sum of odd numbers = ${result}`);



//Task 6

// let numbers = [2,3,9,4,1,12,17,10,5,8,13,6];
// let count = 0;

// let countOfEvenNumbers = (numbers) => {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 == 0)
//         {
//             count++;
//         }
//     }
//     return count;
// }

// let result = countOfEvenNumbers(numbers);
// console.log(`Count of even numbers = ${result}`);



//Practice Lessons

// let numbers = [2,3,4,5,6,7,8,9,"Resul",11];

// for (let i = 0; i < numbers.length; i++) {

//   if (numbers[i]==7) {
//     // break;
//     continue;
//   }
//   else {
//     console.log(numbers[i]);
//   }
// }

// let numbers = [6,7,8,9,"Resul",11];

// for (let i = 0; i < numbers.length; i++) {

//   if (!isNaN(numbers[i]) && typeof(numbers[i]) == 'number') {
//     if(number[i] % 2 == 0) {
//       console.log (numbers[i]);
//     }
//   }
// }

// let surname = true;

// if (typeof surname == 'boolean') {
//   console.log ("Yes, boolean");
// }else {
//   console.log ("No, boolean");
// }

// try {

//   var isMarried = true;

//   if (isMarried) {
//     let result = 'Married';
//   }

//   document.querySelector("h1").innerText=result;

//   document.querySelector("h1").style.color = "green";


// } catch (error) {
//   document.querySelector("h1").innerText = error.message;

//   document.querySelector("h1").style.color = "red";
// }
// finally {
//   document.querySelector("h1").style.border = "1px solid black";
// }

// let isMarried = false;
// if (true) {
//    let name = "dsd";
//    if (!isMarried) {
//     let text = "Not married";
//    }
// }

//   console.log (isMarried);

// let fullname = prompt("Please add your full name");

// while (fullname.trim() == "") {
//   fullname = prompt ("Please add your full name again");
// }

// let email = prompt("Please add your email");

// while (email.trim() == "") {
//   email = prompt ("Please add your email again");
// }

// for (let i = 0; i < email.length; i++) {

//   let isExist = false;

//   if (email[i] == "@") {
//     isExist = true;
//     break;
//   }
// }

// if (isExist) {
//   let isMarried = confirm ("Are you married?");

//   if (!isMarried) {
//     alert("Evli olmadiginiza gore qeydiyyat ola bilmediniz.");
//   }else {
//     let result  = `Full name: ${fullname}, Email: ${email}, ${isMarried ? "Evlidir" : "Subaydir"}`;
//     alert(result);
//   }
// }
// else {
//   email = prompt ("Please add your correct again");
// }


// document.querySelector("input").addEventListener("keyup", function () {
//   if (document.querySelector("input").value.trim() == "") {
//     document.querySelector("span").style.display = "block";
//   }
//   // else {
//   //   alert("Success");
//   // }

//   else {
//     document.querySelector("span").style.display = "none";
//   }
// })


// let name = "Novreste";

// let surname = "Aslanzade";

// function showText(name, surname /= "XXX"/) {

//   let isMarried = true;

//   if (isMarried == true) {
//     return name + " " + surname + " " + isMarried + "Siz saytda qeydiyyat kece bilersiz";
//   } else {
//     return name + " " + surname + " " + isMarried + "Siz saytda qeydiyyat kece bilmersiz";
//   }
// }

// let result = showText(name, surname);

// console.log (result);


// let endResult = result + "P414 qrupunda oxuyur";

// console.log (endResult);


// function sumOfNumbers(/* a,b,c */) {
// return a+b+c;

// console.log (arguments);
// }

// sumOfNumbers(1,2,3,4,5,6,"salam");

// console.log (sumOfNumbers(1,4,6));


// console.log (this);

// function showFullData() {
//   console.log (this);
// }

// showFullData();

// let nums = [1, 2, 3, 4, 5, 6, 8, 9];

// function showNumber(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 8) {
//       break;
//     }else {
//       console.log(arr[i]);
//     }
//   }

//   console.log("Hello P414");

// }


// showNumber(nums);

// let obj = {
//   name : "Gultac",
//   surname : "Ceferov",
//   getData:showFullData()
/* function () {
  console.log (this);
} */
// }

// console.log (obj.name);

// obj.getData;

// let showEmail = (a,b) => {
//   console.log (a+b);
// }

// showEmail(1,2,3,4);

// let obj = {
//   name: "Gultac",
//   surname: "Ceferov",
//   getData: showEmail(10,15)
  /* function() {
    console.log (this);
  } */
// }

// obj.getData;

// document.querySelector("button").addEventListener("click",function(){
//   this.style.backgroundColor = "magenta";
// })

// function test() {
//   console.log (arguments);
// }

// test(1,2,3,4,5);