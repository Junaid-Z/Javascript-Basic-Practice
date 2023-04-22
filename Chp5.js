function MathExpressions() {
    //sum difference product division modulus
    var Num1 = Number(prompt('Enter your first number'))
    var Num2 = Number(prompt('Enter your second number'))
    document.getElementById('codeBox').innerHTML = "Sum of " + Num1 + " and " + Num2 + " is " + (Num1 + Num2) + "<br/>"
    document.getElementById('codeBox').innerHTML += "Difference of " + Num1 + " and " + Num2 + " is " + (Num1 - Num2) + "<br/>"
    document.getElementById('codeBox').innerHTML += "Product of " + Num1 + " and " + Num2 + " is " + (Num1 * Num2) + "<br/>"
    document.getElementById('codeBox').innerHTML += "Division of " + Num1 + " and " + Num2 + " is " + (Num1 / Num2) + "<br/>"
    document.getElementById('codeBox').innerHTML += "Modulus of " + Num1 + " and " + Num2 + " is " + (Num1 % Num2) + "<br/>"
    //operations on a variable
    var myVariable;
    document.getElementById('codeBox').innerHTML += "Value of variable after declaration is: " + myVariable + "<br/>"
    myVariable = 46;
    document.getElementById('codeBox').innerHTML += "Initial value: " + myVariable + "<br/>"
    myVariable++
    document.getElementById('codeBox').innerHTML += "Value after increment is: " + myVariable + "<br/>"
    myVariable += 7
    document.getElementById('codeBox').innerHTML += "Value after addition is: " + myVariable + "<br/>"
    myVariable--
    document.getElementById('codeBox').innerHTML += "Value after decrement is: " + myVariable + "<br/>"
    document.getElementById('codeBox').innerHTML += "The remainder is: " + myVariable % 3 + "<br/>"
    //ticket
    var ticketPrice = 600;
    document.getElementById('codeBox').innerHTML += "Total cost to buy 5 tickets to a movie is " + ticketPrice * 5 + " PKR<br/>"
    //tables
    var table = Number(prompt("Enter number to generate table for"))
    document.getElementById('codeBox').innerHTML += "Table of " + table + "<br/>"
    for (let index = 1; index < 11; index++) {
        document.getElementById('codeBox').innerHTML += table + " X " + index + " = " + table * index + "<br/>"
    }
    //temperature convertion
    var temperatureInCelsius = Number(prompt("Enter temperature in celsius"))
    var temperatureInFahrenheit = (temperatureInCelsius * 9 / 5) + 32;
    document.getElementById('codeBox').innerHTML += temperatureInCelsius + "<sup>o</sup>C" + " is " + temperatureInFahrenheit + "<sup>o</sup>F<br/>"
    temperatureInFahrenheit = Number(prompt("Enter temperature in fahrenheit"))
    var temperatureInCelsius = (temperatureInFahrenheit - 32) * 5 / 9;
    document.getElementById('codeBox').innerHTML += temperatureInFahrenheit + "<sup>o</sup>F" + " is " + temperatureInCelsius + "<sup>o</sup>C<br/>"
    //shopping cart
    document.getElementById('codeBox').innerHTML += "<h1>Shopping Cart</h1>"
    var item1Price = Number(prompt("Enter price of item 1"))
    var item2Price = Number(prompt("Enter price of item 2"))
    var item1Quantity = Number(prompt("Enter quantity of item 1"))
    var item2Quantity = Number(prompt("Enter quantity of item 2"))
    document.getElementById('codeBox').innerHTML += "Price of item 1 is " + item1Price + "<br/>";
    document.getElementById('codeBox').innerHTML += "Quantity of item 1 is " + item1Quantity + "<br/>";
    document.getElementById('codeBox').innerHTML += "Price of item 2 is " + item2Price + "<br/>";
    document.getElementById('codeBox').innerHTML += "Quantity of item 2 is " + item2Quantity + "<br/>";
    document.getElementById('codeBox').innerHTML += "<br/>";
    document.getElementById('codeBox').innerHTML += "Total Cost for your order is " + (item1Price * item1Quantity + item2Price * item2Quantity) + "<br/>";
    //test percentage
    var totalMarks = Number(prompt("Enter total marks for the test"))
    var obtainedMarks = Number(prompt("Enter marks obtained for the test"))
    document.getElementById('codeBox').innerHTML += "<h1>Marks Sheet</h1>"
    document.getElementById('codeBox').innerHTML += "<br/>";
    document.getElementById('codeBox').innerHTML += "Total marks: " + totalMarks + "<br/>";
    document.getElementById('codeBox').innerHTML += "Marks obtained: " + obtainedMarks + "<br/>";
    document.getElementById('codeBox').innerHTML += "Percentage: " + (obtainedMarks / totalMarks * 100) + "<br/>";
    //currency convertion
    document.getElementById('codeBox').innerHTML += "<h1>Curreny in PKR</h1>"
    document.getElementById('codeBox').innerHTML += "<br/>";
    document.getElementById('codeBox').innerHTML += "Total currency in PKR: " + (10 * 104.80 + 25 * 28) + "<br/>";
    document.getElementById('codeBox').innerHTML += "<br/>";
    //math expressions
    var aNumber = 64
    document.getElementById('codeBox').innerHTML += "Number after adding 5, multiply by 10 and dividing the result by 2 is equal to: " + ((aNumber + 5) * 10) / 2 + "<br/>";
    //Age calculator
    document.getElementById('codeBox').innerHTML += "<h1>Age Calculator</h1>"
    var currentYear = Number(prompt("Enter the current year"))
    var birthYear = Number(prompt("Enter the year you were born"))
    document.getElementById('codeBox').innerHTML += "Current Year: " + currentYear + "<br/>";
    document.getElementById('codeBox').innerHTML += "Birth Year: " + birthYear + "<br/>";
    document.getElementById('codeBox').innerHTML += "Your Age is either " + (currentYear - birthYear) + " or " + (currentYear - birthYear - 1) + "<br/>";
    //geometrizer
    var radius = Number(prompt("Enter the radius of the circle"))
    document.getElementById('codeBox').innerHTML += "<h1>The Geometrizer</h1>"
    document.getElementById('codeBox').innerHTML += "Radius of the circle: " + radius + "<br/>";
    document.getElementById('codeBox').innerHTML += "The circumference is: " + (2 * Math.PI * radius) + "<br/>";
    document.getElementById('codeBox').innerHTML += "The area is: " + (Math.PI * Math.pow(radius, 2)) + "<br/>";
    //lifetime supply calculator
    var snackName = prompt("Enter the name of your favorite snack")
    var currentAge = Number(prompt("Enter the your current age"))
    var lastAge = Number(prompt("Enter the age till which you plan to make the supply last"))
    var consumptionPerDay = Number(prompt("Enter the amount you consume each day"))
    document.getElementById('codeBox').innerHTML += "<h1>The Lifetime Supply Calculator</h1>"
    document.getElementById('codeBox').innerHTML += "Favorite snack: " + snackName + "<br/>";
    document.getElementById('codeBox').innerHTML += "Current age: " + currentAge + "<br/>";
    document.getElementById('codeBox').innerHTML += "Estimated maximum age: " + lastAge + "<br/>";
    document.getElementById('codeBox').innerHTML += "Amount of snacks per day: " + consumptionPerDay + "<br/>";
    document.getElementById('codeBox').innerHTML += "You will need " + (consumptionPerDay * 365 * (lastAge - currentAge)) + " " + snackName + " to last you until the ripe old age of " + lastAge + "<br/>";
}