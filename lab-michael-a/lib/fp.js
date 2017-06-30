'use strict';


const fp = module.exports = {};


fp.map = (list, args) => {
  if (typeof list === 'object') {
    return Array.prototype.map.call(list, args);
  } else {
    return null;
  }
};


fp.filter = (list, args) => {
  if (typeof list === 'object') {
    return Array.prototype.filter.call(list, args);
  } else {
    return null;
  }
};

fp.reduce = (list, args, start) => {
  if (typeof list === 'object') {
    return Array.prototype.reduce.apply(list, args, start);
  } else {
    return null;
  }
};



fp.concat = (list, args) => {
  if (typeof list === 'object') {
    return Array.prototype.concat.apply(list, args);
  } else {
    return null;
  }
};
