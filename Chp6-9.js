function MathExpressions2() {
    var a = 10;
    document.getElementById('codeBox').innerHTML = "Result:" + "<br/>"
    document.getElementById('codeBox').innerHTML += "The value of a is: " + a + "<br/>"
    document.getElementById('codeBox').innerHTML += "....................................................................." + "<br/>"
    document.getElementById('codeBox').innerHTML += "<br/>"
    document.getElementById('codeBox').innerHTML += "<br/>"
    document.getElementById('codeBox').innerHTML += "The value of ++a is: " + ++a + "<br/>"
    document.getElementById('codeBox').innerHTML += "Now the value of a is: " + a + "<br/>"
    document.getElementById('codeBox').innerHTML += "<br/>"
    document.getElementById('codeBox').innerHTML += "<br/>"
    document.getElementById('codeBox').innerHTML += "The value of a++ is: " + a++ + "<br/>"
    document.getElementById('codeBox').innerHTML += "Now the value of a is: " + a + "<br/>"
    document.getElementById('codeBox').innerHTML += "<br/>"
    document.getElementById('codeBox').innerHTML += "<br/>"
    document.getElementById('codeBox').innerHTML += "The value of ++a is: " + a++ + "<br/>"
    document.getElementById('codeBox').innerHTML += "Now the value of a is: " + a + "<br/>"
    document.getElementById('codeBox').innerHTML += "<br/>"
    document.getElementById('codeBox').innerHTML += "<br/>"
    document.getElementById('codeBox').innerHTML += "The value of --a is: " + --a + "<br/>"
    document.getElementById('codeBox').innerHTML += "Now the value of a is: " + a + "<br/>"
    document.getElementById('codeBox').innerHTML += "<br/>"
    document.getElementById('codeBox').innerHTML += "<br/>"
    document.getElementById('codeBox').innerHTML += "The value of a-- is: " + a-- + "<br/>"
    document.getElementById('codeBox').innerHTML += "Now the value of a is: " + a + "<br/>"
    document.getElementById('codeBox').innerHTML += "<br/>"
    document.getElementById('codeBox').innerHTML += "<br/>"
    var a = 2, b = 1;
    document.getElementById('codeBox').innerHTML += "a is " + a + "<br/>"
    document.getElementById('codeBox').innerHTML += "b is " + b + "<br/>"
    document.getElementById('codeBox').innerHTML += "result is " + (--a - --b + ++b + b--) + "<br/>"
    document.getElementById('codeBox').innerHTML += "At --a the value of a is decremented before any airthmetic opration in applied to it so new value of a will be 1" + "<br/>"
    document.getElementById('codeBox').innerHTML += "At --a - --b the value of b is decremented before being subtracted from --a so new value of b will be 0 and the result will be 1" + "<br/>"
    document.getElementById('codeBox').innerHTML += "At --a - --b + ++b the value of b is incremented before being added to --a - --b so new value of b will be 1 and the result will be 2" + "<br/>"
    document.getElementById('codeBox').innerHTML += "At --a - --b + ++b + b-- the value of b is incremented after being added to --a - --b + ++b so new value of b will be 0 and the result will be 3" + "<br/>"
    document.getElementById('codeBox').innerHTML += "<br/>"
    document.getElementById('codeBox').innerHTML += "<br/>"
    alert("Hello " + prompt('Enter Your Name'))
    var table = Number(prompt("Enter number to generate table for"))
    if (!table) {
        table = 5;
    }
    document.getElementById('codeBox').innerHTML += "Table of " + table + "<br/>"
    for (let index = 1; index < 11; index++) {
        document.getElementById('codeBox').innerHTML += table + " X " + index + " = " + table * index + "<br/>"
    }
    var subject1Name = prompt("Enter subject 1 name")
    var subject2Name = prompt("Enter subject 2 name")
    var subject3Name = prompt("Enter subject 3 name")
    var subject1 = Number(prompt("Enter subject 1 marks"))
    var subject2 = Number(prompt("Enter subject 2 marks"))
    var subject3 = Number(prompt("Enter subject 3 marks"))
    var total = 100;
    document.getElementById('codeBox').innerHTML += "<br/>"
    document.getElementById('codeBox').innerHTML += "<br/>"
    document.getElementById('codeBox').innerHTML += "<table><thead><tr><th>Subject</th><th>Total</th><th>Marks Obtained</th><th>Percentage</th></tr></thead><body><tr><td>" + subject1Name + "</td><td>" + total + "</td><td>" + subject1 + "</td><td>" + subject1 + "%" + "</td><tr/></tbody><body><tr><td>" + subject2Name + "</td><td>" + total + "</td><td>" + subject2 + "</td><td>" + subject2 + "%" + "</td></tr></tbody><body><tr><td>" + subject3Name + "</td><td>" + total + "</td><td>" + subject3 + "</td><td>" + subject3 + "%" + "</td></tr>" + "<tfoot><tr><td></td><td>" + (subject1 + subject2 + subject3) + "</td><td>" + (total * 3) + "</td><td>" + (subject1 + subject2 + subject3) / 3 + "%" + "</td></tr></tfoot>" + "</tbody></table>"
}