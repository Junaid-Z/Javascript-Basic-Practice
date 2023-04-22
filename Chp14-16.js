function Arrays() {
	var students = Array()
	var students2 = []
	var stringArray = ["a", "b", "c", "d", "e"]
	var numberArray = [1, 2, 3, 4, 5]
	var booleanArray = [true, false, true, true]
	var mixedArray = [true, 1, "abc", 7, "d", false]
	var qual = ["SC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"]
	document.getElementById('codeBox').innerHTML = "<ol></ol>"
	qual.forEach((v) => {
		var node = document.createElement('li')
		node.innerHTML = v
		document.getElementById('codeBox').getElementsByTagName('ol')[0].appendChild(node)
	})
	var students = ["Michael", "John", "Tony"]
	var marks = [320, 230, 480]
	document.getElementById('codeBox').innerHTML += "<br/>"
	document.getElementById('codeBox').innerHTML += "<br/>"
	students.forEach((student, i) => {
		document.getElementById('codeBox').innerHTML += "Score of " + student + " is " + marks[i] + ". " + "Percentage: " + (marks[i] / 5) + "%"
		document.getElementById('codeBox').innerHTML += "<br/>"
	})
	document.getElementById('codeBox').innerHTML += "<br/>"
	document.getElementById('codeBox').innerHTML += "<ol></ol>"
	colors = ["red", "green", "blue", "yellow"]
	colors.forEach((v) => {
		var node = document.createElement('li')
		node.innerHTML = v
		document.getElementById('codeBox').getElementsByTagName('ol')[1].appendChild(node)
	})
	document.getElementById('codeBox').innerHTML += "<br/>"
	document.getElementById('codeBox').innerHTML += "<ol></ol>"
	colors.push(prompt("Enter a color to add into the list"))
	colors.forEach((v) => {
		var node = document.createElement('li')
		node.innerHTML = v
		document.getElementById('codeBox').getElementsByTagName('ol')[2].appendChild(node)
	})
	colors.push("Brown")
	colors.push("Gray")
	document.getElementById('codeBox').innerHTML += "<br/>"
	document.getElementById('codeBox').innerHTML += "<ol></ol>"
	colors.forEach((v) => {
		var node = document.createElement('li')
		node.innerHTML = v
		document.getElementById('codeBox').getElementsByTagName('ol')[3].appendChild(node)
	})
	colors.splice(0, 1)
	document.getElementById('codeBox').innerHTML += "<br/>"
	document.getElementById('codeBox').innerHTML += "<ol></ol>"
	colors.forEach((v) => {
		var node = document.createElement('li')
		node.innerHTML = v
		document.getElementById('codeBox').getElementsByTagName('ol')[4].appendChild(node)
	})
	colors.pop()
	document.getElementById('codeBox').innerHTML += "<br/>"
	document.getElementById('codeBox').innerHTML += "<ol></ol>"
	colors.forEach((v) => {
		var node = document.createElement('li')
		node.innerHTML = v
		document.getElementById('codeBox').getElementsByTagName('ol')[5].appendChild(node)
	})
	colors.splice(prompt("Enter index where you want add the new color"), 0, prompt("Enter the color you want to add at this index"))
	document.getElementById('codeBox').innerHTML += "<br/>"
	document.getElementById('codeBox').innerHTML += "<ol></ol>"
	colors.forEach((v) => {
		var node = document.createElement('li')
		node.innerHTML = v
		document.getElementById('codeBox').getElementsByTagName('ol')[6].appendChild(node)
	})
	colors.splice(Number(prompt("Enter index from where you want start removing colors")), Number(prompt("Enter the amount of colors to remove")))
	document.getElementById('codeBox').innerHTML += "<br/>"
	document.getElementById('codeBox').innerHTML += "<ol></ol>"
	colors.forEach((v) => {
		var node = document.createElement('li')
		node.innerHTML = v
		document.getElementById('codeBox').getElementsByTagName('ol')[7].appendChild(node)
	})
	var scores = [320, 230, 480, 120]
	scores.sort()
	var cities = ["karachi", "lahore", "islamabad", "quetta", "peshawar"]
	var selectedCities = cities.slice(1, 4)
	var arr = ["This ", "is ", "my ", "cat"];
	var string = ""
	arr.forEach((v) => {
		string += v;
	})
	console.log(string)
	var arr = []
	arr.push("keyboard")
	arr.push("mouse")
	arr.push("printer")
	arr.push("montior")
	document.getElementById('codeBox').innerHTML += "<br/>"
	document.getElementById('codeBox').innerHTML += arr
	document.getElementById('codeBox').innerHTML += "<br/>"
	arr.forEach((v) => {
		document.getElementById('codeBox').innerHTML += "Out:" + "<br/>"
		document.getElementById('codeBox').innerHTML += v + "<br/>"
	})
	document.getElementById('codeBox').innerHTML += "<br/>"
	var brand = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
	var select = document.createElement('select')
	var temp = document.createElement('option')
	select.append(temp)
	brand.forEach((v) => {
		var temp = document.createElement('option')
		temp.innerHTML = v;
		temp.value = v;
		select.append(temp)
	})
	document.getElementById('codeBox').append(select)
}