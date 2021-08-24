let day ='thursday '
//array coollections on chars,strings collection of elements'
console.log(day.length)
console.log(day.slice(0,4))
console.log(day[1]);
let splitDay=day.split("s")
console.log(splitDay);
console.log(splitDay[1].length);
console.log(splitDay[1].trim().length);

let date='21'
let nextDate='24'
//to find difference string should be be paresedd into int
let diff= parseInt(nextDate) - parseInt(date)
//converting back toString
console.log(diff.toString())
//string concatination
let concate=day+ "is funday"
console.log(concate)
 
console.log(concate.indexOf("day"))

//program to count number of occurences
let count=0;
let val=concate.indexOf("day")
while (val!== -1) {
    count++
    val=concate.indexOf("day",val+1)
    console.log("*")
}
console.log(count)


