'use strict'

String.prototype.hasVowels = function() {
    var string = this;
    return (/[aeiou]/ig).test(string);
};


String.prototype.toUpper = function () {
  return this.replace(/[a-z]/g, (match, pos) => {
    return String.fromCharCode(this.charCodeAt(pos) - 32);
  });
};
