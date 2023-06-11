function isValid(s) {
  let stack = [];
  let brackets = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (let i = 0; i < s.length; i++) {
    if (brackets[s[i]]) {
      stack.push(brackets[s[i]]);
    } else {
      if (stack.pop() !== s[i]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}

console.assert(isValid("()") === true, 'Test Case 1 Failed');
console.assert(isValid("()[]{}") === true, 'Test Case 2 Failed');
console.assert(isValid("(]") === false, 'Test Case 3 Failed');
console.assert(isValid("([)]") === false, 'Test Case 4 Failed');
console.assert(isValid("{[]}") === true, 'Test Case 5 Failed');
console.assert(isValid("]") === false, 'Test Case 6 Failed');
console.assert(isValid("") === true, 'Test Case 7 Failed');
