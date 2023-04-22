var visits = Number(localStorage.getItem('visits'));
console.log(visits)
localStorage.setItem('visits', ++visits)

function VariablesForNumbers() {
	var age = 19;
	alert("I am " + age + " years old")
	alert("You have visited this site " + visits + " times")
	var birthYear = 2004;
	document.getElementById('codeBox').innerHTML = "My birth year is " + birthYear + "<br/>" + "Data type of my declared variable is number" + "<br/>"
	var visitorName = prompt("Enter your name")
	var productName = prompt("Enter the name of the product you wish to buy")
	var productQuantity = prompt("Enter the quantity of the product you wish to buy")
	document.getElementById('codeBox').innerHTML += visitorName + " ordered " + productQuantity + " " + productName + "(s) on XYZ Clothing store"
}