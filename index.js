const api = "https://api.exchangerate-api.com/v4/latest/USD";

var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
var display = document.querySelector(".display");
var display1 = document.querySelector(".display1");
var convertamount = document.getElementById("convertamount");
var resultFrom;
var resultTo;
var searchValue;

fromCurrecy.addEventListener('change', (event) => {
	resultFrom = `${event.target.value}`;
});

toCurrecy.addEventListener('change', (event) => {
	resultTo = `${event.target.value}`;
});

search.addEventListener('input', updateValue);


function updateValue(e) 
{
	searchValue = e.target.value;
}

convert.addEventListener("click", getResults);

function getResults() 
{
	fetch(`${api}`)
		.then(currency => {
			return currency.json();
		}).then(displayResults);
}

function displayResults(currency) 
{
	let fromRate = currency.rates[resultFrom];
	let toRate = currency.rates[resultTo];
	display.innerHTML =
	((toRate / fromRate) * searchValue).toFixed(2);
	convertamount.style.display = "block";
	
	display1.innerHTML =
	toRate.toFixed(2);
	convertamount.style.display = "block";
}

