export const getColumnName = (num) => {
  let res = '';
  while (num > 0) {
    // find index of next letter and concatenate the letter
    // to the solution
    // Here index 0 corresponds to 'A' and 25 corresponds to 'Z'
    let index = (num - 1) % 26;
    res = String.fromCharCode(index + 65) + res;
    num = parseInt((num - 1) / 26);
  }
  return res;
};
