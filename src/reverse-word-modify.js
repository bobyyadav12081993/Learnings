function reverseWord(value) {
  // Write code here.
  let stack = [];
  temp = [];
  if (value.indexOf(' ') == -1) {
    return value;
  }
  let counter = value.length;
  for (let i = 0; i < counter; i++) {
    if (value[i] != ' ' && i != counter - 1) {
      temp.push(value[i]);
    } else if (value[i] == ' ') {
      stack.unshift(...temp);
      stack.unshift(' ');
      temp = [];
    } else if (i == counter - 1) {
      while (stack.length !== 0) {
        value.shift();
        value.push(stack.shift());
      }
    }
  }
}

var a = ['c', 'a', 'k', 'e', ' ', 'e', 'a', 't', ' ', 'I'];
console.log('before', a);
reverseWord(a);
console.log('after', a);
