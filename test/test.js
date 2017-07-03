"use strict"

const chai = require("chai");
const expect = chai.expect;

// Require local Module
const prime = require("../app/prime.js");

describe("Prime Numbers from an integer", function () {
    describe("Return the prime numbers from an integer as an array", function () {
        it("should return [2,3,5,7] for 10", function() {
            expect(prime.getPrimes(10)).to.be.eql([2, 3, 5, 7]);
        });
        it("should return [2,3,5,7,11,13,17,19] for 20", function() {
            expect(prime.getPrimes(20)).to.be.eql([2, 3, 5, 7, 11, 13, 17, 19]);
        });

        it("should return '[]' for 1", function () {
			expect(prime.getPrimes(1)).to.be.eql([]);
		});

        it("should return '[]' for {}", function () {
			expect(prime.getPrimes({})).to.be.eql([]);
		});

		it("should return [2,3,5,7,11,13,17,19,23,29] for 30", function() {
			expect(prime.getPrimes(30)).to.be.eql([2,3,5,7,11,13,17, 19,23,29]);
		});

		it("should return [] for -5", function (){
			expect(prime.getPrimes(-5)).to.be.eql([]);
		});

		it("should return [] for 'strings'", function (){
			expect(prime.getPrimes("prime")).to.be.eql([]);
		});

		it("should return [] for 0", function (){
			expect(prime.getPrimes(0)).to.be.eql([]);
		});

		it("should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47] for 50", function (){
			expect(prime.getPrimes(50)).to.be.eql([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]);
		});
		

		it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59 ] for 60", function (){
			expect(prime.getPrimes(60)).to.be.eql([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59 ]);
		});
    });

});
