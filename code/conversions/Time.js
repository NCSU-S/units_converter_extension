//Our time class handles all temperature related conversions
class Time {
	constructor(unit, arr){
		this.unit = unit;
		this.arr = arr;
	}

	getPreciseNumber(number, precision) {
		return number.toPrecision(Math.min(Math.max(this.getPrecision(number), precision), 10))
	}

	getPrecision(number) {
		let parts = number.toString().split(".");
		if (parts.length <= 1) {
			return number < 0 ? parts[0].length - 1 : parts[0].length;
		}
		let intlen = (number < 0 ? parts[0].length - 1 : parts[0].length);
		return intlen + parts[1].length;
	}

	//Our standard conversion is seconds, so we try to convert all selection to seconds
	getStandardConversion(quantity) {
		switch(this.unit.toLowerCase()){
			case "seconds": return quantity;
			case "minutes": return quantity * 60;
			case "hours": return quantity * (60 * 60);
			case "days": return quantity * (24 * 60 * 60);
			case "weeks": return quantity * (7 * 24 * 60 * 60);
			default: return null;
		}
	}
	/*From our standard conversion we try to convert into all the other units specified in arr property of this class
    with a precision no more than 10*/
	getAllConversions(quantity, precision){
		let res = "";
		this.arr.forEach((u) => {
			switch(u.toLowerCase()){
				case "seconds": {
					res += "," + this.getPreciseNumber(quantity, precision) + " sec";
					break;
				}
				case "minutes": {
					let conv = quantity / 60;
					res += ',' + this.getPreciseNumber(conv, precision) + " mins";
					break;
				}
				case "hours": {
					let conv = quantity / (60 * 60);
					res += ',' + this.getPreciseNumber(conv, precision) + " hours";
					break;
				}
				case "days": {
					let conv = quantity / (24 * 60 * 60);
					res += ',' + this.getPreciseNumber(conv, precision) + " days";	
					break;
				}
				case "weeks": {
					let conv = quantity / (7 * 24 * 60 * 60);
					res += ',' + this.getPreciseNumber(conv, precision) + " days";	
					break;
				}
			}

		});
		return res;
	}
}

module.exports = Time;