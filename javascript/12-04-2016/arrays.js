
//function database{*/
	var employee = ['Deepika', 'Ram', 'Akira', 'Krishna'];
	console.log(employee);
    console.log(employee.length);
	
	
	
	
	
//array.prototype.shift & array.prototype.reverse & array.prototype.unshift
	
	var city     = ['atlanta', 'newyork', 'rochester', 'miami'];
	city.shift();
	console.log(city);
	city.reverse();
	console.log(city);
	city.unshift('buffelo', 'texas');
	console.log(city);
	
	
//array.prototype.Concat method

	var emp = employee.concat(empID);
	console.log(emp);
	


//array.protoype.indexof 
   var empty = [];

   empty.indexOf();

   console.log(empty);

//array.prototype.fill

/*var numbers = [1, 2, 3];
numbers.fill(1);
console.log(numbers);*/


//array.prototype.filter
function greatest(value) {
  return value >= 10;
}

var filtered = console.log([12, 5, 8, 130, 44].filter(greatest));

//array.prototype.find
/*function isBigEnough2(element) {
  return element >= 15;
}

var finded= console.log([12, 5, 8, 130, 44].find(isBigEnough2));*/


//array.prototype.push & pop

var data = ['ramana', 'shalini', 'karthik'];

var pushing = data.push('akira', 'krishna');
var popping = data.pop ();

console.log(data);
console.log(pushing);
console.log(popping);


//array.prototype.slice

var vegetables = ["tomato", "beans", "carrots", "bracoli"];
var sliced = vegetables.slice(1,3);

console.log(vegetables);
console.log(sliced);


//array.prototype.tostring

/*var names = ['ram', 'sita', 'laxman', 'bharat', 'satrugn'];
var naming= names.tostring();

console.log(naming);*/

//Array.prototype.join
var a = ['ram', 'sita', 'laxman', 'bharat', 'satrugn'];
var b = a.join();    // 'Wind,Rain,Fire'
var c = a.join('-'); // 'Wind-Rain-Fire

console.log(a);
console.log(b);
console.log(c);

//Array.prototype.splice()
var myMovies = ["twostates", "dangal", "sultan", "bajrangi"];
var removed = myMovies.splice(1, 1);
var removed1 = myMovies.splice(0,2,'allthebest','golmaal2');
console.log(myMovies);
console.log(removed);
console.log(removed1);


/*array.prototype.keys
var arr = ["a", "b", "c"];
var iterator = arr.keys();

console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }*/

//array.prototype.lastIndexOf
var a = [12, 511, 39, 122];
console.log(a.lastIndexOf(12)); 
console.log(a.lastIndexOf(7)); 

//array.prototype.map
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log(roots);






  


