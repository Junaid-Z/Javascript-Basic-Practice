function ConditionalStatement() {
    var city = prompt("Enter city name");
    if (city?.toLowerCase() === "karachi") {
        alert("Welcome to city of lights")
    }
    var gender = prompt("Enter your gender")
    if (gender?.toLowerCase() === "male") {
        alert("Good Morning Sir")
    }
    if (gender?.toLowerCase() === "female") {
        alert("Good Morning Ma’am")
    }
    var colorCode = prompt("Enter color code")
    if (colorCode?.toLowerCase() === "red") {
        alert("Must Stop")
    }
    else if (colorCode?.toLowerCase() === "yellow") {
        alert("Ready to move")
    }
    else if (colorCode?.toLowerCase() === "green") {
        alert("Move now")
    }
    var fuel = Number(prompt("Enter fuel left"))
    if (fuel < 0.25) {
        alert("Please refill the fuel in your car")
    }
    var a = 4;
    if (++a === 5) {
        alert("given condition for variable a is true");
    }
    var b = 82;
    if (b++ === 83) {
        alert("given condition for variable b is true");
    }
    var c = 12;
    if (c++ === 13) {
        alert("condition 1 is true");
    }
    if (c === 13) {
        alert("condition 2 is true");
    }
    if (++c < 14) {
        alert("condition 3 is true");
    }
    if (c === 14) {
        alert("condition 4 is true");
    }
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
    }
    if (true) {
        alert("True");
    }
    if (false) {
        alert("False");
    }
    if ("car" < "cat") {
        alert("car is smaller than cat");
    }
    var subject1 = Number(prompt("Enter subject 1 marks"))
    var subject2 = Number(prompt("Enter subject 2 marks"))
    var subject3 = Number(prompt("Enter subject 3 marks"))
    var total = Number(prompt("Enter total marks for all 3 subjects"))
    var percent = (subject1 + subject2 + subject3) / total * 100
    var grade = ""
    var remarks = ""
    if (percent >= 80) {
        remarks = "Excellent"
        grade = "A-one"
    }
    if (percent >= 70) {
        remarks = "Good"
        grade = "A"
    }
    if (percent >= 60) {
        remarks = "You need to improve"
        grade = "B"
    }
    else {
        remarks = "Sorry"
        grade = "Fail"
    }
    document.getElementById('codeBox').innerHTML = "Total marks: " + total + "<br/>"
    document.getElementById('codeBox').innerHTML += "Marks obtained: " + (subject1 + subject2 + subject3)
    document.getElementById('codeBox').innerHTML += "Percentage: " + percent
    document.getElementById('codeBox').innerHTML += "Grade: " + grade
    document.getElementById('codeBox').innerHTML += "Remarks: " + remarks
    var secret = 4;
    var input = Number(prompt("Enter your guess"))
    if (input === secret) {
        alert("Bingo! Correct answer")
    }
    else if (input + 1 === secret) {
        alert("Close enough to the correct answer")
    }
    var input = Number(prompt("Enter your number"))
    if (input % 3 === 0) {
        alert("Number is divisible by 3")
    }
    var input = Number(prompt("Enter your number"))
    if (input % 2 === 0) {
        alert("Number is even number")
    }
    else {
        alert("Number is odd number")
    }
    var temp = Number(prompt("Enter the current temperature"))
    if (temp > 40) {
        alert("It is too hot outside")
    }
    else if (temp > 30) {
        alert("The Weather today is Normal")
    }
    if (temp > 20) {
        alert("Today’s Weather is cool")
    }
    if (temp > 10) {
        alert("OMG! Today’s weather is so Cool")
    }
    var firstNum = Number(prompt("Enter your number"));
    var secondNum = Number(prompt("Enter your number"));
    var operation = prompt("Enter your number");
    if (operation === "+") {
        alert(firstNum + "+" + secondNum + "="(firstNum + secondNum))
    }
    else if (operation === "-") {
        alert(firstNum + "-" + secondNum + "="(firstNum - secondNum))
    }
    else if (operation === "*") {
        alert(firstNum + "*" + secondNum + "="(firstNum * secondNum))
    }
    else if (operation === "+") {
        alert(firstNum + "/" + secondNum + "="(firstNum / secondNum))
    }
    else if (operation === "%") {
        alert(firstNum + "%" + secondNum + "="(firstNum % secondNum))
    }
}