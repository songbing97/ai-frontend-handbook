function deepClone(obj, set = new Set()) {
  const result = {};
  Object.keys(obj).forEach(key => {
    if (typeof key === 'function' || obj[key] === null) {
      result[key] = obj[key];
    } else if (typeof key !== 'object') {
      result[key] = obj[key];
    } else if (Object.prototype.toString.call(obj[key]) === '[object object]') {
      result[key] = deepClone(obj[key], set);
    } else if (Object.prototype.toString.call(obj[key]) === '[object Array]') {
      result[key] = obj[key].map(item => deepClone(item, set));
    } else {
      result[key] = obj[key];
    }
  })

  return result;
}

// Test
const objTest = {
  a: 1,
  b: {
    c: 2,
    d: 3,
    e: {
      f: 4
    },
  },
  c: [1, 2, 3]
};

const result = deepClone(objTest);

console.log(result)