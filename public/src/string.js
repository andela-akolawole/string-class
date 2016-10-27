'use strict'

String.prototype.hasVowels = function() {
    var string = this;
    return (/[aeiou]/ig).test(string);
};
