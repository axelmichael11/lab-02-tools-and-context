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
    console.log(typeof list, args, start);
    return Array.prototype.reduce.call(list, args, start);
  } else {
    return null;
  }

};



fp.concat = (list, ...args) => {
  if (typeof list === 'object') {
    return Array.prototype.concat.apply(list, args);
  } else {
    return null;
  }
};

fp.splice = (list, args) => {
  if (typeof list === 'object') {
    return Array.prototype.splice.call(list, args);
  } else {
    return null;
  }
};
