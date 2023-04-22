function ArraysAndLoops() {
	var arr = [[], [], [], []]
	var arr = [[0, 1, 2], [1, 0, 1], [2, 1, 0], [3, 2, 1]]
	for (let index = 1; index < 11; index++) {
		document.getElementById('codeBox').innerHTML = index + "<br/>"
	}
	document.getElementById('codeBox').innerHTML += "<br/>"
	var table = Number(prompt("Enter number to generate table for"))
	var length = Number(prompt("Enter length of the table"))
	document.getElementById('codeBox').innerHTML += "Table of " + table + "<br/>"
	for (let index = 1; index <= length; index++) {
		document.getElementById('codeBox').innerHTML += table + " X " + index + " = " + table * index + "<br/>"
	}
	document.getElementById('codeBox').innerHTML += "<br/>"
	var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
	for (let index = 0; index < fruits.length; index++) {
		document.getElementById('codeBox').innerHTML += fruits[index] + "<br/>"
	}
	document.getElementById('codeBox').innerHTML += "<br/>"
	for (let index = 0; index < fruits.length; index++) {
		document.getElementById('codeBox').innerHTML += "Element at index " + index + " is " + fruits[index] + "<br/>"
	}
	document.getElementById('codeBox').innerHTML += "<br/>Counting: "
	for (let index = 1; index <= 15; index++) {
		document.getElementById('codeBox').innerHTML += index + ", "
	}
	document.getElementById('codeBox').innerHTML += "<br/>Reverse Counting: "
	for (let index = 10; index > 0; index--) {
		document.getElementById('codeBox').innerHTML += index + ", "
	}
	document.getElementById('codeBox').innerHTML += "<br/>Even: "
	for (let index = 0; index <= 20; index += 2) {
		document.getElementById('codeBox').innerHTML += index + ", "
	}
	document.getElementById('codeBox').innerHTML += "<br/>Odd: "
	for (let index = 1; index < 20; index += 2) {
		document.getElementById('codeBox').innerHTML += index + ", "
	}
	document.getElementById('codeBox').innerHTML += "<br/>Series: "
	for (let index = 2; index <= 20; index += 2) {
		document.getElementById('codeBox').innerHTML += index + "k, "
	}
	var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
	var inp = prompt("Welcome to ABC Bakery. What do you want order sir/ma'am")
	var found = false;
	for (let index = 0; index < arr.length; index++) {
		if (arr[index] === inp?.toLowerCase()) {
			alert(inp + "Is available at index " + index + " in our bakery")
			found = true;
			break
		}
	}
	if (!found) {
		alert("We are sorry " + inp + " is not available in our bakery")
	}
	var a = [24, 53, 78, 91, 12]
	var largest = a[0];
	document.getElementById('codeBox').innerHTML += "<br/>"
	document.getElementById('codeBox').innerHTML += "<br/>Array items: " + a
	for (let index = 0; index < a.length; index++) {
		if (largest < a[index]) {
			largest = a;
		}
	}
	document.getElementById('codeBox').innerHTML += "<br/>The largest number is " + largest
	document.getElementById('codeBox').innerHTML += "<br/>"
	document.getElementById('codeBox').innerHTML += "<br/>Array items: " + a
	var smallest = a[0];
	for (let index = 0; index < a.length; index++) {
		if (smallest > a[index]) {
			smallest = a;
		}
	}
	document.getElementById('codeBox').innerHTML += "<br/>The smallest number is " + smallest
	document.getElementById('codeBox').innerHTML += "<br/>"
	for (let index = 1; index < 101; index++) {
		document.getElementById('codeBox').innerHTML += "5 X " + index + " = " + 5 * index + "<br/>"
	}
}