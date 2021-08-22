//block of code can be grouped together and can be reused
// add 2 number

function add(a, b) {
    return a + b;
}

// call funtion
console.log(add(2, 5))

//to get output use return


// using anonymous function
let sumOfIntegers = function (c, d) {
    return c + d;
}

console.log(sumOfIntegers(22, 556));

//anonymous only can be assigned to variables
// using fatpipe
let add2num = (c, d) => c + d;

console.log(add2num(33, 33));


//scope of var 
// until es5 there are no "let" or "const" keywords
//scope of var global or function
//when within function cant be accessed outside
//if not in function then var is global
var greet="evening";


//global
console.log(greet);
function foo(a,f) {
  var greet="morning"
  //funtion level
console.log(greet);  
  return a-f;  
}
//funtional
foo(5,2)
//global
console.log(greet); 
//global
if(1==1){
   var greet="aftanoon" 

}

console.log(greet);

//if is not funtion so in js var inside if statement treated as global only


//to over come this we use let 
//var only funtion. let block for block level
// let and var can be reinitialized
// const cannot be reinitialized almost similar to let
 






