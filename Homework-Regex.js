let str = 'one -TWo----three';
str = str.toLowerCase();

console.log(str
	.split(/[, -;]+/)
	.map((s) => s.charAt(0)
	.toUpperCase() +s.slice(1))
	.join(''));




//Output =>  OneTwoThree