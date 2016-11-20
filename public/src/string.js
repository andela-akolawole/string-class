'use strict'


/**
 * String.prototype.hasVowels
 * 
 * Checks a string for any vowels
 * 
 * @return {Boolean}
 */
String.prototype.hasVowels = function() {
    return (/[aeiou]/i).test(this);
};

/**
 * String.prototype.toUpper
 * 
 * Turns a lowercase string into an uppercase strings
 * 
 * @return {String}
 */
String.prototype.toUpper = function () {
  return this.replace(/[a-z]/g, function (match, position) {
    return String.fromCharCode(this.charCodeAt(position) - 32);
  });
};

/**
 * String.prototype.toLower
 * 
 * Turns an uppercase string into a lowercase string
 * 
 * @return {String}
 */
String.prototype.toLower = function () {
  return this.replace(/[A-Z]/g, function (match, position) {
    return String.fromCharCode(this.charCodeAt(position) + 32);
  });
};

/**
 * String.prototype.ucFirst
 * 
 * Turns the first letter of a string into an uppercase letter
 * 
 * @return {String}
 */
String.prototype.ucFirst = function () {
  return this.replace(/^\S/, function (match, position) {
    	return match.toUpper();
  });
};

/**
 * String.prototype.isQuestion
 * 
 * Check if a string is in a question format
 * 
 * @return {Boolen}
 */
String.prototype.isQuestion = function () {
  return (/[?]$/g).test(this);
};

/**
 * String.prototype.words
 * 
 * Turns a string into an array of words
 * 
 * @return {Array}
 */
String.prototype.words = function () {
  return this.match(/\w+/g);
};

/**
 * String.prototype.wordCount
 * 
 * This counts the number of words in a string
 * 
 * @return {String}
 */
String.prototype.wordCount = function () {
  return this.words().length;
};

/**
 * String.prototype.toCurrency
 * 
 * Returns a currency representation of a string
 * 
 * @return {String}
 */
String.prototype.toCurrency = function () {
  return this.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

/**
 * String.prototype.fromCurrency
 * 
 * Returns a number representation
 * of the Currency String
 * 
 * @return {Number}
 */
String.prototype.fromCurrency = function () {
  return Number(this.replace(/[,]/g, ''));
};

/**
 * String.prototype.inverseCase
 * 
 * Returns each letter in the string
 * as an inverse of its current case
 * 
 * @return {String}
 */
String.prototype.inverseCase = function () {
  return this.replace(/\w/g, function (match) {
    if (/[A-Z]/g.test(match)) {
      return match.toLower();
    }
    return match.toUpper();
  });
};

/**
 * String.prototype.alternatingCase
 * 
 * Returns the string in alternating cases
 * 
 * @return {String}
 */
String.prototype.alternatingCase = function () {
  var altString = '';
  for (var i = 0; i < this.length; i += 1) {
    if (i % 2 === 0) {
      altString += this[i].toLower();
    }else {
      altString += this[i].toUpper();
    }
  }
  return altString;
};

/**
 * String.prototype.getMiddle
 * 
 * Returns the middle of the string
 * 
 * @return {String}
 */
String.prototype.getMiddle = function () {
  var strLen = this.length,
      isOdd = (strLen % 2) == 1,
      strArr = this.split(''),
      midChar,
      half = Math.floor( strLen / 2 );

  if (!isOdd) {
    half = half - 1; 
  }

  //Splice from last index
  strArr.splice(-half, half);
  //Splice from the first index
  strArr.splice(0, half);

  //Turn array back to string
  midChar = strArr.toString().replace(/[,]/g, '');

  return midChar;
};

/**
 * String.prototype.numberWords
 * 
 * Returns the number in words
 * 
 * @return {String}
 */

String.prototype.numberWords = function () {
	var dict = {
		"0":" zero",
		"1":" one", 
		"2":" two", 
		"3":" three",
		"4":" four", 
		"5":" five", 
		"6":" six",
		"7":" seven",
		"8":" eight",
		"9":" nine"
	};
	var words = '';
	var strArr = this.split('');
	strArr.map(function (index) {
		words += dict[index];	
	});
	words = words.trim();
  return words;
}

/**
 * String.prototype.isDigit
 * 
 * Returns true if the string is 
 * a digit(one number)
 * 
 * @return {Boolean}
 */

String.prototype.isDigit = function () {
  return this.match(/\d/g).length == 1;
}

/**
 * String.prototype.doubleCheck
 * 
 * Returns true if the string is 
 * contains double characters
 * 
 * @return {Boolean}
 */

String.prototype.doubleCheck = function () {
  return /(\S)\1/g.test(this);
};
