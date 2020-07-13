export let isParenthesisMatching = (str) => {
  let stack = [];

  let map = {
    '}': '{',
    ']': '[',
    ')': '(',
  };

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter == '{' || letter == '(' || letter == '[') {
      stack.push(letter);
    } else if (map[letter] && stack.pop() !== map[letter]) {
      return false;
    }
  }
  return stack.length === 0;
};

console.log(isParenthesisMatching('{}()[]'));
