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

    it('should give a null value...',() =>{

      let result = fp.map('suhh dude',(4,4));
      console.log(result);
      expect(result).toEqual(null);
    });
  });

  describe('testing the filter function', () => {
    it('should take in 1,2,3,4,5 and return 3,4,5',() =>{
      let array = [1,2,3,4,5];

      let result = fp.filter(array,n => n>=3);
      expect(result).toEqual([3,4,5]);
    });

    it('should give a null value...',() =>{

      let result = fp.filter('suhh dude',(4,4));
      console.log(result);
      expect(result).toEqual(null);
    });
  });

  describe('testing the reduce function', () => {
    it('should take in 1,2,3,4 and return 10',() =>{
      let array = [1,2,3,4];
      console.log(array);
      let result = fp.reduce(array, (a, b) =>a+b, 0);
      console.log(result);
      expect(result).toEqual(10);
    });

    it('should give a null value...',() =>{

      let result = fp.reduce('suhh dude',(4,4));
      console.log(result);
      expect(result).toEqual(null);
    });
  });

  describe('testing the concat function', () => {
    it('should take in [1,2,3,4,5,6,7,8] and [3,1] return [1,2,3,4,5,6,7,8,3,1]',() =>{

      let result = fp.concat([1,2,3,4,5,6,7,8],[3,1]);
      console.log(result);
      expect(result).toEqual([1,2,3,4,5,6,7,8,3,1]);
    });

    it('should take in multiple arguments using the spread operator/... [1,2,3],[4,5,6],[7,8] and [3,1] return [1,2,3,4,5,6,7,8]',() =>{

      let result = fp.concat([1,2,3],[4,5,6],[7,8]);
      console.log(result);
      expect(result).toEqual([1,2,3,4,5,6,7,8]);
    });
  });

  describe('testing the splice function', () => {
    it('should take in [1,2,3,4,5,6,7,8] and (3,1) return [5,6,7,8]',() =>{

      let result = fp.splice([1,2,3,4,5,6,7,8],(4,4));
      console.log(result);
      expect(result).toEqual([5,6,7,8]);
    });

    it('should give a null value...',() =>{

      let result = fp.splice('suhh dude',(4,4));
      console.log(result);
      expect(result).toEqual(null);
    });
  });
});
