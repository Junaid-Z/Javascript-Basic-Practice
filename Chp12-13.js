function IfConditions() {
	var input = prompt("Enter your character")
	if (input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) {
		alert("Input is uppercase")
	}
	else if (input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122) {
		alert("Input is lowercase")
	}
	var num1 = Number(prompt("Enter num1"))
	var num2 = Number(prompt("Enter num2"))
	if (num1 > num2) {
		alert(num1 + " is greater than " + num2)
	}
	else if (num1 < num2) {
		alert(num2 + " is greater than " + num1)
	}
	else {
		alert(num2 + " is equal to " + num1)
	}
	var num = Number(prompt("Enter your number"))
	if (num > 0) {
		alert("Number is positive")
	}
	else if (num1 < 0) {
		alert("Number is negative")
	}
	else {
		alert("Number is equal to 0")
	}
	var input = prompt("Enter your character")
	var isVowel = false
	var vowels = ["a", "e", "i", "o", "u"]
	vowels.forEach((v) => {
		if (input[0]?.toLocaleLowerCase() === v) {
			isVowel = true;
		}
	})
	alert(isVowel)
	var passowrd = "password"
	var input = prompt("Please enter your password")
	if (passowrd === input) {
		alert("Correct! The password you entered matches the original password")
	}
	else {
		alert("Incorrect password")
	}
	var greeting;
	var hour = 13;
	if (hour < 18) {
		greeting = "Good day";
	}
	else {
		greeting = "Good evening";
	}
	var input = Number(prompt("Enter the time"))
	if (input >= 1000 && input < 1200) {
		alert("Good Morning")
	}
	else if (input >= 1200 && input < 1700) {
		alert("Good Afternoon")
	}
	else if (input >= 1700 && input < 2100) {
		alert("Good Evening")
	}
	else if (input >= 2100 && input < 2359) {
		alert("Good Night")
	}
}