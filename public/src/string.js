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

