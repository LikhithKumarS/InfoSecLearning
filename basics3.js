//arrays1
//arrays are 
var marks = Array(6);
var marks = new Array(1, 2, 3, 4, 5, 6);
//we cant redecalring using let

//other way to create array
var marks = [0, 9, 8, 7, 6, 5];
console.log(marks[3]);
marks[3] = 14;//change or re assigning
console.log(marks.length);//6
console.log(marks[3]);
//add elements at the end
marks.push(67);
console.log(marks);
//delete elements with pop to delete last element
marks.pop();
console.log(marks);
//adding elements at the begining
marks.unshift(12);
console.log(marks);


//from value to index
console.log(marks.indexOf(5));
// to check if value is present or not 
console.log(marks.includes(123));
// returns false
// create sub array on main array

var submarks = marks.slice(2, 5)
console.log(submarks);

// to iterate over the array
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
    console.log("***")
}

//sum of all arrays
// using for loop
sum = 0;
for (let j = 0; j < marks.length; j++) {
    console.log(marks[j]);
    sum = sum + marks[j];
}
console.log("***" + sum)





    //reduce filter map 
//reduce method used to perform operation on all the elements on the array
//summing array using reduce
// reduce takes 2 arguements 
let total = marks.reduce((sum,totalMarks)=>sum+totalMarks,0)
console.log(total);
//accumulator and iterator
var scores=[1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,66]
//find even number
 var evenscores=[]
for (let j = 0; j < scores.length; j++) {
    console.log(scores[j]);
    if(scores[j]%2==0){
evenscores.push(scores[j])
    }
    
}
console.log("***" + evenscores)


//print even number with filter
let newfilter=scores.filter(scores=>scores%2==0)
console.log(newfilter)

//if we want to filter anything we can use filter method instead loops

// when to use reduce and filter
//if we ant to update values use reduce,if want to filter use filter

//map array function
// will modifiy into new values
///create even number of scores and multiply those and sum them

var newMap = newfilter.map(scores=>scores*3)
console.log(newMap)

var nesum=newMap.reduce((sum, val)=>sum+val,0);
console.log(nesum);

//chaining
var scores1=[422,003,33,44,55,23,35245,65645]
var chainings=scores1.filter(scores1=>scores1%2==0).map(scores1=>scores1*3).reduce((sum, val)=>sum+val,0)
console.log(chainings);











// array sorting

let fruits = ["banana", "mango","apple"]
fruits.sort()
console.log(fruits);
//sorting on numbers is unreliable with sort()
console.log(scores1.sort());

// sort() custom method
scores1.sort(function(a,b){
    return a-b;
})
console.log(scores1);

// using anonymous function
//buble sort in recurcive manner
console.log(scores1.sort((a,b)=> a-b))
//ascending and desending order
console.log(fruits.sort());
console.log(fruits.reverse());
//buble sort in recurcive manner for reverse 
console.log(scores1.sort((a,b)=> b-a))















































