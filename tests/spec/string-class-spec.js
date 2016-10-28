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

    describe('String.isQuestion test', function () {

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

    describe('String.words test', function () {

        it('should check if it is defined', function () {
            var string = "hhh";
            expect(string.words()).toBeDefined();
        });

        it('should return an array if successful', function () {
            var string = "Wish we could turn back time";
            expect(string.words()).toEqual(['Wish', 'we', 'could', 'turn', 'back', 'time']);
        });
    });

    describe('String.wordCount test', function () {
        
        it('should check if it is defined', function () {
            var string = "Wish we could turn back time";
            expect(string.wordCount()).toBeDefined();
        });

        it('should return the length of the string', function () {
            var string = "Wish we could turn back time";
            expect(string.wordCount()).toEqual(6);
        });
    });

    describe('String.toCurrency test', function () {
        
        it('should check if it is defined', function () {
            var string = "23234344";
            expect(string.toCurrency()).toBeDefined();
        });

        it('should return a currency representation of the string', function () {
            var string = "322334344";
            expect(string.toCurrency()).toBe('322,334,344');
        });
    });

    describe('String.fromCurrency test', function () {

        it('should check if it defined', function () {
            var string = "322,334,344";
            expect(string.fromCurrency()).toBeDefined();
        });

        it('should return a number representation of the currency string', function () {
            var string = "322,334,344";
            expect(string.fromCurrency()).toBe(322334344);
        });
    });

    describe('String.inverseCase test', function () {

        it('should check if it defined', function () {
            var string = "Mr";
            expect(string.inverseCase()).toBeDefined();
        });

        it('should return an inverse of the string', function () {
            var string = "Mr Ben";
            expect(string.inverseCase()).toBe('mR bEN');
        });
    });

    describe('String.alternatingCase test', function () {

        it('should check if it is defined', function () {
            var string = "";
            expect(string.alternatingCase()).toBeDefined();
        });

        it('should return the string in alternating cases', function () {
            var string = "Onomatopoeia";
            expect(string.alternatingCase()).toBe('oNoMaToPoEiA');
        });
    });

    describe('String.getMiddle test', function () {

        it('should check if it defined', function () {
            var string = "";
            expect(string.getMiddle()).toBeDefined();
        });

        it('should return the middle of the string', function () {
            var string = "read";
            expect(string.getMiddle()).toBe('ea');
        });
    });

    describe('String.numberWords test', function () {

        it('should check if defined', function () {
            var string = "";
            expect(string.numberWords()).toBeDefined();
        });

        it('should return a representation of numbers in words', function () {
            var string = "2344";
            expect(string.numberWords()).toBe('two three four four');
        });
    });

    describe('string.isDigit test', function () {

        it('should check if it is defined', function () {
            var string = "2";
            expect(string.isDigit()).toBeDefined();
        });

        it('should return true if number is a digit', function () {
            var string = "2";
            expect(string.isDigit()).toBeTruthy();
        });

        it('should return false if number is not a digit', function () {
            var string = "340";
            expect(string.isDigit()).toBeFalsy();
        });
    });

    describe('String.doubleCheck test', function () {

        it('should check if it is defined', function () {
            var string = "worddss";
            expect(string.doubleCheck()).toBeDefined();
        });

        it('should return true if the string contains double characters', function () {
            var string = "words!!aa";
            expect(string.doubleCheck()).toBeTruthy();
        });

        it('should return false if does not contain double characters', function () {
            var string = "word";
            expect(string.doubleCheck()).toBeFalsy();
        });
    });

});