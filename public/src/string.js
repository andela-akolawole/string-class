'use strict'


/**
 * String.prototype.hasVowels
 * 
 * Checks a string for any vowels
 * 
 * @return 
 */
String.prototype.hasVowels = function() {
    return (/[aeiou]/ig).test(this);
};


/**
 * String.prototype.toUpper
 * 
 * Turns a lowercase string into an uppercase strings
 * 
 * @return 
 */
String.prototype.toUpper = function () {
  return this.replace(/[a-z]/g, (match, position) => {
    return String.fromCharCode(this.charCodeAt(position) - 32);
  });
};


/**
 * String.prototype.toLower
 * 
 * Turns an uppercase string into a lowercase string
 * 
 * @return 
 */
String.prototype.toLower = function () {
  return this.replace(/[A-Z]/g, (match, position) => {
    return String.fromCharCode(this.charCodeAt(position) + 32);
  });
};


/**
 * String.prototype.ucFirst
 * 
 * Turns the first letter of a string into an uppercase letter
 * 
 * @return 
 */
String.prototype.ucFirst = function () {
  return this.replace(/^\S/, (match, position) => {
    	return match.toUpper();
  });
};

/**
 * String.prototype.isQuestion
 * 
 * Check if a string is in a question format
 * 
 * @return 
 */
String.prototype.isQuestion = function () {
  return (/[?]$/g).test(this);
};

/**
 * String.prototype.words
 * 
 * Turns a string into an array of words
 * 
 * @return 
 */
String.prototype.words = function () {
  return this.match(/\w+/g);
};

/**
 * String.prototype.wordCount
 * 
 * This counts the number of words in a string
 * 
 * @return 
 */
String.prototype.wordCount = function () {
  return this.words().length;
};

/**
 * String.prototype.toCurrency
 * 
 * Returns a currency representation of a string
 * 
 * @return
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
 * @return
 */
String.prototype.fromCurrency = function () {
  return Number(this.replace(/[,]/g, ''));
};

/**
 * String.prototype.fromCurrency
 * 
 * Returns a number representation
 * of the Currency String
 * 
 * @return
 */
String.prototype.inverseCase = function () {
  return this.replace(/\w/g, (match) => {
    if (/[A-Z]/g.test(match)) {
      return match.toLower();
    }else {
      return match.toUpper();
    }
  });
};

/**
 * String.prototype.alternatingCase
 * 
 * Returns the string in alternating cases
 * 
 * @return
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
 * Returns the string in alternating cases
 * 
 * @return
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
 * @return
 */

String.prototype.numberWords = function () {
  var words = '';
  var strArr = this.split('');
  for( var i=0; i < strArr.length;i++ ) {
    switch(strArr[i]) {
      case '1':
        words += " one";
        break;
      case '2':
        words += " two";
        break;
      case '3':
        words += " three";
        break;
      case '4':
        words += " four";
        break;
      case '5':
        words += " five";
        break;
      case '6':
        words += " six";
        break;
      case '7':
        words += " seven";
        break;
      case '8':
        words += " eight";
        break;
      case '9':
        words += " nine";
        break;
      default:
        words += " zero";
    }
  }
  words = words.replace(/^\s/g, '');
  return words;
}

/**
 * String.prototype.isDigit
 * 
 * Returns true if the string is 
 * a digit(one number)
 * 
 * @return
 */

String.prototype.isDigit = function () {
  return this.match(/\d/g).length == 1;
}