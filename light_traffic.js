"use strict";

function traffic (elem, color, delay) {
	return new Promise((resolve, reject) => {
		//elem.style.backgroundColor = "gray";
	setTimeout ( () => {
		resolve(elem.style.backgroundColor = color);
	}, delay);
	
	//clearTimeout (timeId);// отменяет var timeId = setInterval
 });
}

let elemRed = document.getElementById("red");
let elemYellow = document.getElementById("yellow");
let elemGreen = document.getElementById("green");

setInterval( () => {
let l = traffic(elemRed, "red", 4);
l.then( (res) => {
	return traffic(elemRed, "gray", 4000);
})	
.then ( (res) => {
	return traffic(elemYellow, "yellow", 1000)
})
.then( (res) => {
	return traffic(elemYellow, "gray", 2000);
})	
.then( (res) => {
	return traffic(elemGreen, "green", 1000)
})
.then( (res) => {
	return traffic(elemGreen, "gray", 4000);
})
}, 12004)
/* код включает последовательно цвета.
function traffic (elem, color, delay) {
	return new Promise((resolve, reject) => {
	setTimeout ( () => {
		resolve(elem.style.backgroundColor = color);
	}, delay)
 });
}

let elemRed = document.getElementById("red");
let elemYellow = document.getElementById("yellow");
let elemGreen = document.getElementById("green");

let l = traffic(elemRed, "red", 3000);
l.then( (res) => {
	return traffic(elemYellow, "yellow", 3000)
})
.then( (res) => {
	return traffic(elemGreen, "green", 3000)
})*/