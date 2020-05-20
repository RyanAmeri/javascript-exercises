function add (...arr) {
	let result = arr.reduce((sum, current) => sum + current, 0);
	return result;
}

function subtract (a, b) {
	return a-b;
	
}

function sum (arr) {
	let result = arr.reduce((sum, current) => sum + current, 0);
	return result;
}


function multiply (arr) {
	let result = arr.reduce((sum, current) => sum * current, );
	return result;
}

function power(a, b) {
	let res = 1;
	for (let i = 0; i < b; i++){
		res *= a;
	}
	return res;
}

function factorial(num) {
	if (num < 0)
		return undefined;
	let fac;
	num > 0 ? fac = num * factorial(num-1) : fac = 1;
	return fac;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}