'use strict'


/**
 * String.prototype.hasVowels
 * 
 * Checks a string for any vowels
 * 
 * @return 
 */
String.prototype.hasVowels = function() {
    var string = this;
    return (/[aeiou]/ig).test(string);
};


/**
 * String.prototype.toUpper
 * 
 * Turns a lowercase string into an uppercase strings
 * 
 * @return 
 */
String.prototype.toUpper = function () {
  return this.replace(/[a-z]/g, (match, pos) => {
    return String.fromCharCode(this.charCodeAt(pos) - 32);
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
  return this.replace(/[A-Z]/g, (match, pos) => {
    return String.fromCharCode(this.charCodeAt(pos) + 32);
  });
};


