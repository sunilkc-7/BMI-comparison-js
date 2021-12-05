/*
Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula:(BMI= mass/height*height)
*/

var massMark = 78
var heightMark = 1.69
var massJohn = 92
var heightJohn = 1.95
var BMIMark = massMark/(heightMark*heightMark)
var BMIJohn = massJohn/(heightJohn*heightJohn)
console.log(BMIMark, BMIJohn)
if(BMIMark>BMIJohn){
    console.log("Mark's BMI is greater than John's")
}else{
    console.log("John's BMI is greater than Mark's")
}