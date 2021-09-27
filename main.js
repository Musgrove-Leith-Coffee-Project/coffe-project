"use strict"

function renderCoffee(coffee) {
	var html = '<div class="coffee my-2 col-4 text-center">';
	html += '<div class="text-nowrap">' + '<span class="h2">' + coffee.name + '</span>' + ' <span class="text-light">' + coffee.roast + '</span>' + '</div>';
	html += '</div>';

	return html;
}

function renderCoffees(coffees) {
	var html = '';
	for (var i = coffees.length - 1; i >= 0; i--) {
		html += renderCoffee(coffees[i]);

	}
	return html;
}

function updateCoffees(e) {
	e.preventDefault(); // don't submit the form, we just want to update the data
	var selectedRoast = roastSelection.value;
	var filteredCoffees = [];
	if (selectedRoast === "All") {
		filteredCoffees = coffees;
	} else {
		coffees.forEach(function (coffee) {
			if (coffee.roast === selectedRoast) {
				filteredCoffees.push(coffee);
			}
		});
	}

	tbody.innerHTML = renderCoffees(filteredCoffees);
	console.log(filteredCoffees);
	return filteredCoffees;

}

function userSearch(e) {
	var userKeyStroke = userInput.value;
	userKeyStroke = userKeyStroke.toLowerCase();
	var searchedCoffees = [];
	updateCoffees(e).forEach(function (coffee) {
		if (coffee.name.toLowerCase().includes(userKeyStroke)) {
			searchedCoffees.push(coffee);
		}
	});

	tbody.innerHTML = renderCoffees(searchedCoffees);

}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
	{id: 1, name: 'Light City', roast: 'light'},
	{id: 2, name: 'Half City', roast: 'light'},
	{id: 3, name: 'Cinnamon', roast: 'light'},
	{id: 4, name: 'City', roast: 'medium'},
	{id: 5, name: 'American', roast: 'medium'},
	{id: 6, name: 'Breakfast', roast: 'medium'},
	{id: 7, name: 'High', roast: 'dark'},
	{id: 8, name: 'Continental', roast: 'dark'},
	{id: 9, name: 'New Orleans', roast: 'dark'},
	{id: 10, name: 'European', roast: 'dark'},
	{id: 11, name: 'Espresso', roast: 'dark'},
	{id: 12, name: 'Viennese', roast: 'dark'},
	{id: 13, name: 'Italian', roast: 'dark'},
	{id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var userInput = document.querySelector('#user-input')

tbody.innerHTML = renderCoffees(coffees.reverse());

roastSelection.addEventListener('click', updateCoffees);

userInput.addEventListener('keyup', userSearch);