(function() {

	function matheMatics(value1, value2) {
		var maths = this;
		maths.sum = value1 + value2;
		maths.difference = value1 - value2;
		maths.multipication = value1 * value2;
		maths.division = value1 / value2;
		function total() {
			var total = this;
			total.addition = maths.sum;
			total.substract = maths.difference;
			total.product = maths.multipication;
			total.dividend = maths.division;
			console.log(total);
			//return total;
			
			
		}

		return new total();

	}
	var problems = new matheMatics(11, 5);
	console.log(problems);
})();