function compare(firstNumber, secondNumber)  {


var firstNumber = document.getElementById("firstNumber").value;
var secondNumber = document.getElementById("secondNumber").value;


if (firstNumber > secondNumber) {

 alert(firstNumber + " is greater than " + secondNumber);

} else if (secondNumber > firstNumber) {

 alert(secondNumber + " is greater than " + firstNumber);

} else if (firstNumber = secondNumber) {
 
 alert("These numbers are equal!")

 } 

}



function concatenate(strings) {

var str1 = prompt("Enter an expression");
var str2 = prompt("Enter another expression");

var strings = [str1, str2];
var finalString = strings.join(" ");

console.log(finalString);

}

