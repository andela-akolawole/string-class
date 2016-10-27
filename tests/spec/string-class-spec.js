'use strict'

describe('String class test', function () {
    
    describe('String.hasVowels test', function () {
        var string = "";
        it('should check if it is defined', function () {
            expect(string.hasVowels()).toBeDefined();
        });

        it('should return true if the string contains vowels', function () {
            var string = "cwme";
            expect(string.hasVowels()).toBeTruthy();
        });

        it('should return false if string does not contain vowels', function () {
            var string = "c";
            console.log(string.hasVowels());
            expect(string.hasVowels()).toBe(false);
        });
    });

    describe('String.toUpper test', function () {
       
       it('should check if it is defined', function () {
            var string = "";
            expect(string.toUpper()).toBeDefined();
        });

       it('should return an uppercase string', function () {
            var string = "lowercase";
            expect(string.toUpper()).toBe('LOWERCASE');
       });
    });

    describe('Sting.toLower test', function () {

        it('should check if it is defined', function () {
            var string = "";
            expect(string.toLower()).toBeDefined();
        });
        
        it('should return a lowercase string', function () {
            var string = "LOWERCASE";
            expect(string.toLower()).toBe('lowercase');
        });
    });

    describe('String.ucFirst test', function () {

        it('should check if it is defined', function () {
            var string = "";
            expect(string.ucFirst()).toBeDefined();
        });
        
        it('should return a string with the first varter in uppercase', function () {
            var string = "jude";
            expect(string.ucFirst()).toBe('Jude');
        });
    });

    describe('String.isQuestion', function () {

        it('should check if it is defined',function () {
            var string = "what is lower?";
            expect(string.isQuestion()).toBeDefined();
        });

        it('should return true if string is a question', function () {
            var string = "What did you say?";
            expect(string.isQuestion()).toBeTruthy();
        });

        it('should return false if string is not a question', function () {
            var string = "shoot them all";
            expect(string.isQuestion()).toBeFalsy();
        });
    });

});