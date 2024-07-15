
// Nameing Rulse

// PascalCase :  
// let ClassName="Rahul";
// let StudentsInfo=12;


// const varibles ko UparSnekCase Me Use Karte HAi
// UperSnekCase
// const FULL_NAME = "Rahul Yogi"


// CamelCase
// let myName = "Rahul" 

// CamelCase
// var lastName = "yogi" 


// Var Variable

var fname="sanju";
document.write('<br>'+fname)



//var ko redeclaring kar sakte h for ex
// var variables me same name ka variables bana sakte hai
// var variables se fir new value add ya access kar sakte hai
var num=200;
var num=500;
document.write('<br>'+num)



// var is a  function scope and global scope
// var variables ko function me acccess karwane ke liye function ko coll karwana hota hai

// var is a  function scope
// var variables only function me hi access hota hai
// var variables ko function scope function ke bhar access karwane par undefind show karta hai
function functionScope() {
    var address="Jaipur";
    document.write('<br>'+address)
}
functionScope()



// var is a  globle scope
// var variables globle scope me kahi par bhi access karwa sakte hai
var address="Chomu";
function functionGloble() {
    document.write('<br>'+address)
}
functionGloble()



//Hoisting
// What is a hoisting
// variables aur function declarations ko code ke execution se pehle hi memory me allocate kar diya jaata hai. eski wajah se var se declare kiye gaye variables ko unki declaration se pehle access kiya ja sakta hai, lekin unki value undefined hoti hai.

var firstName;
document.write('<br>'+firstName) // output undefind aayega





//let is a block scope and global scope
//let block-scoped hota hai, aur yeh variable sirf us block ke andar accessible hota hai jaha
//yeh declare kiya gaya ho. Yeh global scope mein bhi declare ho sakta hai, lekin uski visibility sirf usi block ke andar hoti hai jahan yeh declare hua hai.

let myName = "Rahul" // string data type //
document.write(myName)
document.write( typeof myName)



let age = 22  // number data type //
document.write('<br>'+age)
document.write( typeof age)



let myLastName = "Yogi" // string data type //
document.write('<br>'+myLastName)

document.write('<br>'+myName+" "+myLastName+" "+age)



let isRahul = true; //boolean data type //
document.write('<br>'+isRahul)
document.write('<br>'+ typeof isRahul)



// Object data type //
let deatils = {
    firstName: "Rahul",
    age: 18,
    class: "12th",
    city: "jaipur",
}
console.log(deatils)
console.log(deatils.age)
console.log(typeof deatils)


// Array data type //
let fruits=['Apple','Orange','Banana']
document.write('<br>'+fruits)
document.write('<br>'+typeof fruits)


// let Block Scope Example
if(true){
let countNomber = 300;
document.write('<br>'+ countNomber)
}
// document.write(countNomber); // Error: x is not defined


// Redeclaration with let
//let se declare kiye gaye variables ko ek hi scope ke andar dubara declare nahi kiya ja sakta. Agar aap aisa karte hain, to JavaScript ek error throw karta hai.
// let me same name ka variables globle  me bhi use karne par error show karta hai

// {
//     let a=20;
// let a=20;
// document.write('<br>'+a)
// }



// Const Variables

const contary='india'
document.write('<br>'+contary)

// const variables is a block scope

{
    const city='Jaipur';
document.write('<br>'+contary)

}



// Operations

// Arithmetic Operations

let a = 1;
let b = 6;
let x = (1+1)*a
document.write(a+b)
document.write('<br>'+x)





// JavaScript Function
// 1. Function Declaration vs. Function Expression

// Function Declaration:
// jab kisi funtion ko declared karte hai , to uske hosting ke karan top par bhi call karwa sakte hai

function Remove(Car,Bas) {
    return `${Car},${Bas}`
}
console.log(Remove('S','P'))


console.log(sweet("nice"))

function sweet(n){
return n
}


function Fruts(a,b,c,d='') {
return `${a},${b},${c},${d}`
}
console.log(Fruts('apple','banana','graps'))


// Function Expression:
// फ़ंक्शन एक्सप्रेशन में, एक फ़ंक्शन को वेरिएबल में स्टोर किया जाता है:
// esme ye hai funtion ko upar call nhi kra sakte ,kyo ki ye variabale me assing ho rha hai, tabhi esko code ke niche hi call karte hai, 
let javascript = function(a, b) {
return a + b
}
console.log(javascript("Rahul", "Sanju"))

var city = function (a , b) {
    return a + b
}

console.log(city("Jaipur","Jaipur"))

let breeds = function (a,b,c) {
    return `${a},${b},${c}`
}
console.log(breeds('Parrot','Hen','Picock'))


// 2. Arrow Functions

// ES6 ke baad Arrow funtion ka use karke short tarike se laya gya funtion ko
// errow funtion ko 2 tarah se likh sakte hai

//syntax

// () => {};

// singalline
const student=(a , b)=> a * b;

console.log(student(4,4))

// maltiline
const Class=(a , b)=>{
    return a + b
}
console.log(Class(4,4))

 const states=(a,b,c)=>{
return `${a},${b},${c}`
 }

console.log(states('Rajsthan','Haryana','Panjab'))



// Default Parameters
  //Default parameters JavaScript mein function definitions mein use kiye jaate hain jab ham in kisi parameter ko default value assign karna hota hai, agar function call mein wo parameter provide nahi kiya gaya hai ya undefined hai. Yeh parameters function ke definition mein assign kiye jaate hain.
  // uper vale ex me ek function ko create kiya ki () ke andar ek pram pass kiya or default value set kar diya ab me jab function ko bina arguments kiye consol karu ga to undifend nai aye ga oske jhag par default value aa jaye gi

function myFunction(firstName="guset",lastName=""){
    console.log(firstName,lastName)
} 
myFunction("rahul")


function byDefo(as="Mr",ps="Dr") {
    return as+ps
}
console.log(byDefo("jai"))

function newStudents(a='Vijay',b='Sameer') {
    return `${a},${b}`
}

console.log(newStudents())




// 4. Rest Parameters

// Rest Parameter me funtion ko declear karke usme parameter pass karenge jis bhi value ko nikalna hai
  //Rest parameters JavaScript mein ek feature hai jo allow karta hai multiple arguments ko ek array mein collect karne function ke andar. Rest parameters ko define karne ke liye hum ... operator ka istemal karte hain.

function sum(first,last,...other) {
    return first+last+ other
}
console.log(sum( "Rahul","Sanju",1, 2, 3));


function nice(Name,Class,Age,...other) {
    return `${Name},${Class},${Age},${other}`
}
console.log(`Mohan ,12\u1D57\u02B0,16,'Chomu,'Jaipur','Rajsthan'`);
// console.log(nice("Rahul","BA Second Year","Jaipur","Rajsthan","India")) Arrey se kare tab

function bestSkiils(Top1, Top2, Top3,...other) {
    return `${Top1},${Top2},${Top3},${other}`
}
console.log(bestSkiils('Digital Marketing'," Video Editing","It Developar","Graphic Card","Telly"))

  //is ex me ek funcation create kiya fir os me 3 pram pass kiye jo othersdeatils pram h vo yha par rest parameters h jo firstName or lastName ki value ko jodakar baki value ya aruments ko array ke rup me collect kar lete h islye firstName or lastName ke bad ki value othersDeatils me stroe ho gayi




// 5. Destructuring Parameters
// kisi object and arrey me se data nikalne ke liye eska use lete hai
//JavaScript में Destructuring एक शक्तिशाली सुविधा है जो आपको arrays और objects से values को आसानी से extract (निकालने) की अनुमति देती है और उन्हें variables (चरों) में assign (सौंप) करती है। इस सुविधा का उपयोग parameter destructuring के रूप में function parameters के साथ भी किया जा सकता है।

const user = {
    firstName: 'Ajay',
    lastName: 'Yogi',
    age: 30
};

function getFullName({ firstName, lastName }) {
    console.log (`${firstName}, ${lastName}`)
}

const fruts={
    a:"Banana",
    b:"Apple",
    c:"Graps",
    d:"Mango",
};

function frutsAll({a,b,c}) {
    console.log(`${a},${b},${c}`)
}
frutsAll(fruts)


const frutsobje=['papaye','banana']

function fruitobject([a,b]) {
    console.log`${a},${b}`
}
fruitobject(frutsobje)

// const member = [1,2,3,4,5,6]
// function membercount(first,last) {
//     console.log `${member[2]},${member[5]}`
// }
// membercount(member)


// let prodets = ['Lover','Tsart','sart',]
// function apna([a,b,c]) {
//     console.log `${a},${b}`
// }
// apna(prodets)





// 6. Function Naming Conventions

// CamelCase
// function calculateTotal(price, tax) {
//     return price + tax;
// }

// UparSneckCase
// function FULL_NAME(userId) {
//     // Fetch user data from a database or API
// }      





 // 7. Pure Function:
//Pure function एक ऐसी function होती है जो अपने input parameters पर आधारित output प्रदान करती है और function के बाहर की किसी भी state को modify नहीं करती। यह functional programming में एक महत्वपूर्ण concept है।


// function pureFuntion(x) {
//     return x+x;
// }
// console.log(pureFuntion(30))


// और function के बाहर की किसी भी state को modify नहीं करती।

// let y=2;
// function pureNum(y) {
//     return y+y;
// }
// console.log(pureNum())

let m=12
function pureboy(m) {
    return m+m;
}
console.log(pureboy(m))

function remix(chora) {
    return chora
}
console.log(remix("dj remix"))

// 8. Higher Order Function:
//Higher Order Function  एक ऐसी function Hota है जो या तो एक या एक से अधिक functions को argument के रूप में लेती है या एक function को return करती है। JavaScript में, functions को first-class citizens माना जाता है, यानी functions को variables की तरह pass किया जा सकता है, return किया जा सकता है, और अन्य functions के अंदर use किया जा सकता है।


function girl(myName) {
    return ('hello ${myName}')
}

function boy(myName) {
    return girl(myName)
}

boy(girl,"Rahul")


function hii(a) {
    return a('supar')
}

const hello= (Name)=>Name+"Rahul"
console.log(hii(hello))


function Boy(a) {
    return a('I Am')
}

const Girl=(Apna)=>Apna+" "+"Rahul"

console.log(Boy(Girl))


function java(a) {
    return
}

const script=(lang)=>

//9. error handling:
//JavaScript में error handling एक महत्वपूर्ण aspect है जिससे आप अपने code को robust और reliable बना सकते हैं। Error handling के ज़रिए आप unexpected errors को handle कर सकते हैं और user को meaningful messages दे सकते हैं। JavaScript में error handling के लिए सबसे प्रमुख तरीका try...catch statement है।



try {
    defe(); 
    const defe = function () {
        console.log("hello");
    };
} catch (error) {
    console.error(error.message); 
}






