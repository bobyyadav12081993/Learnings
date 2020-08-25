export const nonRepeatingChar = (str) => {
  let strMap = {};
  for (let i = 0; i < str.length; i++) {
    if (strMap[str[i]]) {
      strMap[str[i]]++;
    } else {
      strMap[str[i]] = 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (strMap[str[i]] === 1) {
      return str[i];
    }
  }
  return -1;
};
