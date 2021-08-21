//loops and conditions
const flag=true;

//if condition
if (flag) {
    console.log("condition satisfied")

}
else
{
    console.log("condition not satisfied")
}
//if we use negation operator 
if (!flag) {
    console.log("condition satisfied")

}
else
{
    console.log("condition not satisfied")
}

// const variable is constant but can be altered this way


//while
let i=0;
while (i<10) {
    console.log("while condition is true")
i++
console.log(i)
}


//while runs as long as condition is true

//do while
//one round of loop runs irrespective of condition

do {
    i++
    console.log(i)

} while (i<10);
console.log(i**2)
//

//for loop
for(let k=0;k<=10;k++){
    if (k%2==0 && k%5==0) {

        console.log(k);    
        
    }
   // console.log(k);
   
}
//or operator
for(let k=0;k<=10;k++){
    if (k%2==0 || k%5==0) {

        console.log(k);    
        
    }
   // console.log(k);
   
}

let n=0;
for(let k=0;k<=100;k++){
    if (k%2==0 || k%5==0) {
n++;
        console.log(k);    
    if (n==3) {
        break
    }    
    }
   // console.log(k);
   
}

//while can be used for conditions
//for used for number of runs
//loop based on condition is while



//arrays

