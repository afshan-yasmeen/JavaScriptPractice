// console.log("Afshan");
// alert("Code with Afshan");
// console.log("I love JavaScript");
// console.log("Afshan Yasmeen")
// console.log(2+"2");

// const product={
//     name:"Apple",
//     price:2000,
//     isDeal:true,
//     rating:4,
//     color:"Red",
//     pictureSrc:"https://apple.com"
// }

// console.log(product, product.name, product.price, product.isDeal, product.pictureSrc)
// typeof product
// console.log(typeof product)

// const profile={
//     name:"Afshan Yasmeen",
//     posts:195,
//     follower:49000,
//     following:4,
//     pictureSrc:"https://afshan.com",
//     profession:"Enterpreneur",
//     isFollow:false,

// };

// console.log(profile);
// console.log(typeof(profile.name), typeof(profile["name"], typeof(profile.isFollow)))


// let username=prompt("What is your name?")
// alert (`Hello  ${username} Lets check your grades`)
// function getGrades(){
//     const marks=document.getElementById("marks").value;
//     console.log(marks)
//     var grades="";
//     if(marks<=100  && marks>=80){
//        grades="Congratulations! You got the A grade! ";
//     }
//     else if(marks>=70  && marks<=79){
//         grades="Good! You got B grade!";
//     }
//     else if(marks>=60  && marks<=69){
//         grades="Not Bad! Your grade is C!";
//     }
//     else if(marks>=50  && marks<=59){
//         grades="Keep it up! You got D grade!";
//     }
//     else{
//         grades="Sorry! You got F grade!";
//     }
//     document.getElementById("grades").innerText=grades;
// }


// let nameofUser=prompt("Enter your name!");
// alert("Let's generate your username");

// document.getElementById("nameofUser").value=nameofUser;

// function getUsername(){
// userName=document.getElementById("nameofUser").value;
// userName=userName.replace(/\s+/g, '');
// userName=userName.toLowerCase();
// userName="@"+userName
// userName+=userName.length;
// console.log(userName);
// document.getElementById("username").innerText=userName;
// }


// function changeFontSize(){
//     let fontSize = document.getElementById("fontSizeValue").value;
//     document.getElementById("paragraph").style.fontSize=fontSize;
// }

// function writeThat(){
//     let textofUser=document.getElementById("textValue").value;
//     document.write(textofUser);
// }

// console.log("This is my message for Console");

// function calculateTriangleArea(){
//     let base = document.getElementById("Base").value;
//     let height = document.getElementById("Height").value;
//     let area=0.5 * (base * height);
//     document.getElementById("area").innerText+=area;
// }


// var a,b,c;
// a=1;
// b=2;
// c=a+b;
// console.log(c);

// let d,e,f;
// d=1;
// e=2;
// f=3;
// console.log(f);

// const price1=33;
// const price2=55;
// const total =price1+price2;
// console.log(total);

// const pi=3.14;
// const person="Afshan"
// const isBoy=false;
// console.log(pi, person, isBoy)

// var carName="Valvo";
// console.log(carName);

// let x=2+4+5
// console.log(x);

// x="Afshan"+" "+"Yasmeen";
// console.log(x)

// x="4"+3+3;
// console.log(x);

// x=3+3+"4";
// console.log(x);

// let $="Dollar"
// console.log($);
// let $$="Dollar Dollar"
// console.log($$)
// let $Money="33.44$"
// console.log($Money)

// let _x="afshan"
// console.log(_x);


// Array Methods
// const fruits=["Apple", "Banana", "Carrot", "Date"];
// document.getElementById("demo").innerHTML=fruits.toString();
// console.log("toString function array.toString() ",fruits.toString())
// console.log("Length function array.length ",fruits.length)
// console.log("At function array.at(index) ", fruits.at(0), fruits.at(1), fruits.at(2), fruits.at(3));
// console.log("Negative indexing is only possible through at() function: ", fruits.at(-1), fruits.at(-2), fruits.at(-3) , fruits.at(-4))
// console.log("tojoin(\"separator\") function converts array into string and we can also specify the separator", fruits.join(" * "))
// console.log("push(\"item\") is method used to push item at the end of the array: ",fruits.push("Kiwi"),fruits);
// console.log("pop() is used to remove element from last of the array ",fruits.pop(), fruits)
// console.log("shift() is the method that removes first element from the start of the array ", fruits.shift(), fruits);
// console.log("unshift(\"item\") is the method that is used to insert the item in the start of the array: ", fruits.unshift("Grapes"), fruits)
// console.log("Change value through indexes like array[5]=\"Tomato\": ",fruits[2]="Mango" , fruits)
// console.log("Add value at the end of the array by using length like array[array.length]=\"Dragon Fruit\": ", fruits[fruits.length]="Dragon fruit", fruits)



// Dates 
// 

// JavaScript function
// function product(p1, p2){
//     return p1*p2;
// }
// console.log(product(3,2));

// function toCelcius(fahrenheit){
// return (5/9)*(fahrenheit-32);
// }
// console.log(toCelcius(56));



// JavaScript Object 
// Loops
// for (let i=0; i<5; i++){
//     console.log(i);
// }

// for (let x=2;x<=4; x++){
//     console.log(x)
// }

// while Loop

// let val=1;
// while (val<=5){
//     console.log(val);
//     val++;
// }

// let val1=2;
// while(val1<=20){
//     console.log(val1)
//     val++;
// }


// do while loop 

// let test=1;

// do{
//     console.log(test)
//     test++;
// }while(test<=10)


// for in loop 
// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//     }
// for(let key in person){
//     console.log(person[key]);
// }

// let numbers=[12,13,14,15,16,17];

// for (let index of numbers){
//     console.log(index);
// }
// let sum=0, a;
// outerloop: while(true){
//     a=1;
//     innerloop:while(a<3){
//         sum+=a;
//         if(sum>12){
//             break outerloop;
//         }
//         console.log("sum: "+sum)
//         a++;   
//     }
// }

// for  (let i=0; i<5; i++){
//     if(i==4)  break;
//     console.log(i)
// }

// for (let i=0; i<20; i++){
//     if(i%2!=0)
//        continue;
//     console.log(i)
// }

const courses = ["HTML", "CSS", "JavaScript", "Bootstrap", "TailwindCss", "PHP", "Python", "Java", "C++"];
// console.log(courses);
// for( let key of courses){
//     console.log(key);
// }

// let courses1=new Array("html", "css", "javascript");
// console.log(courses1);
// for (let key of courses1){
//     console.log(key)
// }

//  let courses2=["HTML", "CSS", "JavaScript"];
//  console.log(courses2[0], courses[1], courses[2]);

//  console.log("Last item of courses is : ", courses[courses.length-1])
// console.log("Courses: ", courses)
// courses[1]="Bootstrap"
//  console.log("Modifying courses index 1: " ,courses)
//  courses.push("CSS");
//  console.log("Adding CSS to courses: ", courses);
//  courses.unshift("Networks");
//  console.log("Add networks to courses: "+courses);

//  courses.push("Extra");
//  console.log("Adding extra to courses: ", courses);
//  courses.pop();
//  console.log("Removing last item from courses: ", courses);
//  courses.unshift("Extra");
//  console.log("Adding extra to courses: ", courses);
//  courses.shift();
//  console.log("Removing first item from courses: ", courses)

// console.log("Array: "+courses);
// courses.splice(3,4);
// console.log("Array after removing  2 elements: "+courses);
// console.log("Array Length: "+courses.length)
// courses.length=7;
// console.log("Array length after increasing its length: "+courses.length)
// console.log("Array: "+courses);
// courses.length=4;
// console.log("Array length after decreasing its length: "+courses.length)
// console.log("Array: "+courses);

// for(let i=0;i<courses.length;i++){
//     console.log(courses[i]);
// }

// let anotherCourse=["Next.js", "Node.js"];
// let concatArray=courses.concat(anotherCourse);
// concatArray.forEach(function myFunc(elements){
//     console.log(elements)
// })
// console.log(courses.toString())
// console.log(typeof courses)



// JavaScript Operators 
// console.log("3+4: "+(3+4));
// console.log("3-4: "+(3-4));
// console.log("3*4: "+(3*4));
// console.log("3/4: "+(3/4));
// console.log("4%3: "+(4%3));
// let a=4;
// console.log("a=4 a++: "+(++a));
// console.log("a=5 a--: "+(--a));
// a=+a;
// console.log(" +a: "+(a))
// a=-a;
// console.log(" -a: "+(a))
// let a=5;
// console.log("a+=1: "+(a+=1))
// console.log("a=4: "+(a=4))
// console.log("a-=1: "+(a-=1))
// console.log("a*=2: "+(a*=2))
// console.log("a/=2: "+(a/=2))
// console.log("a%=2: "+(a%=2))
// a=6;
// console.log("a**=2: "+(a**=2))



// Javascript Promise 
// let complete=true;

// let prom=new Promise(function(resolve,reject){
//     if(complete){
// resolve("Here is a success");
//     }
//     else{
// resolve("Here is a failure")
//     }
// })
// let onFulfilment = (result) => {
//     console.log(result)
// }

// let onRejection = (error) => {
//     console.log(error)
// }

// prom.then(onFulfilment);
// prom.catch(onRejection);




// function prom(complete) {

//     return new Promise(function (resolve, reject) {
//         console.log("Fetching Data Loading...")
      
//         setTimeout(() => {
//             if (complete) {
//                 resolve("Here is a success")
//             } else {
//                 reject("Here is a failure")
//             }
//         }, 3000);
//     })
// }

// let onfulfilment=(result)=>{
// console.log(result)
// }

// let onRejection=(error)=>{
//     console.log(error)
// }

// prom(true).then(onfulfilment).catch(onRejection);

// prom(true).then((result)=>{
//     console.log(result)
//     }).catch(
//         (error)=>{
//             console.log(error)
//         }
//     )
// console.log(prom(true));
// console.log(prom(false))




// function prom(a,b){
// return new Promise(function(resolve, reject){
//     console.log("Loading")
// var c=a/b;
// if(a,b){
//     resolve(`Your answer is ${a}/${b}=${c}`)
// }
// else{
//     reject(`Failed to Calculate`)
// }
// })
// }

// prom(5,0).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })




class employee{
constructor(name,age,salary){
    this.empname=name;
    this.empage=age;
    this.empsalary=salary;
    console.log(`Constructor: Employees \n Name:  ${name}  \nAge: ${age} \nSalary: ${salary}`)
}
info(){
    console.log(`Info Employee Name: ${this.empname}`)
    document.write(`<h1>Employee Information</h1> <br> 
    <p>Name: ${this.empname}</p><br>
    <p>Age: ${this.empage}</p><br>
    <p>Salary: ${this.empsalary}</p>
    `)
}
}

class manager extends employee{
constructor(name,age,salary){
    super(name,age,salary)
    this.totalSalary=234566;
}

info(){
    super.info()
    document.write(`<br><p>Total Salary: ${this.totalSalary}</p>`)
    
}
}

class test extends manager{

}

const employee1=new employee("Afshan Yasmeen", "21", "987654321");
employee1.info()
const manager1=new manager("Aiman Ijaz", "22", "987654321")
manager1.info()
const test1=new test("Arslan Ijaz", "18", "987654321")
test1.info()