'use strict';

const expect = require('expect');

const fp = require('../lib/fp.js');

describe('testing my fp test functions', () => {
  describe('testing the map function', () => {
    it('should take in an array and returns and return 3,4,5,6,7',() =>{
      let array = [1,2,3,4,5];

      let result = fp.map(array,a => a+2);

      expect(result).toEqual([3,4,5,6,7]);
    });
  });

  describe('testing the filter function', () => {
    it('should take in 1,2,3,4,5 and return 3,4,5',() =>{
      let array = [1,2,3,4,5];

      let result = fp.filter(array,n => n>=3);
      expect(result).toEqual([3,4,5]);
    });
  });

  describe('testing the reduce function', () => {
    it('should take in 1,2,3,4 and return 10',() =>{
      let array = [1,2,3,4];
      console.log(array);
      let result = fp.reduce(array, (a,b) =>a+b,0);
      console.log(result);
      expect(result).toEqual(10);
    });
  });

  describe('testing the concat function', () => {
    it('should take in 1,2,3 and return 4,5,6',() =>{

      let result = fp.concat(() => {

      })

      expect(result).toEqual(3);
    });
  });

});
