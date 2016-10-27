'use strict'

describe('String class test', () => {
    
    describe('String.hasVowels test', () => {

        it('should check if it is defined', () => {
            let string = "";
            expect(string.hasVowels).toBeDefined();
        });

        it('should return true if the string contains vowels', () => {
            let string = "cwm";
            expect(string.hasVowels).toBeTruthy();
        });

        it('should return false if string does not contain vowels', () => {
            let string = "c";
            console.log(string.hasVowels());
            expect(string.hasVowels()).toBe(false);
        });
    });

    describe('String.toUpper test', () => {
       
       it('should check if it is defined', () => {
            let string = "";
            expect(string.toUpper).toBeDefined();
        });

       it('should return an uppercase string', () => {
            let string = "lowercase";
            expect(string.toUpper()).toBe('LOWERCASE');
       });
    });

    describe('Sting.toLower test', () => {

        it('should check if it is defined', () => {
            let string = "";
            expect(string.toLower).toBeDefined();
        });
        
        it('should return a lowercase string', () => {
            let string = "LOWERCASE";
            expect(string.toLower()).toBe('lowercase');
        });
    });

    describe('String.ucFirst test', () => {

        it('should check if it is defined', () => {
            let string = "";
            expect(string.ucFirst).toBeDefined();
        });
        
        it('should return a string with the first letter in uppercase', () => {
            let string = "jude";
            expect(string.ucFirst()).toBe('Jude');
        });
    });

    describe('String.isQuestion', () => {

        it('should check if it is defined', () => {
            let string = "what is lower?";
            expect(string.isQuestion).toBeDefined();
        });

        it('should return true if string is a question', () => {
            let string = "What did you say?";
            expect(string.isQuestion()).toBeTruthy();
        });

        it('should return false if string is not a question', () => {
            let string = "shoot them all";
            expect(string.isQuestion()).toBeFalsy();
        });
    });

});