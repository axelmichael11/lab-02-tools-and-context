'use strict';


const fp = module.exports = {}


fp.map = (list, args) => {
  if (typeof list === 'object') {
    return Array.prototype.map.call(list, args);
  }
};


fp.filter = (list, args) => {
  if (typeof list === 'object') {
    return Array.prototype.filter.call(list, args);
  }
};

fp.reduce = (list, args, start) => {
  return Array.prototype.reduce.apply(list, args, start);
};



fp.concat = (list, args) => {
  return Array.prototype.concat.apply(list, args);
};
