export function getModifiedArray(arr, el) {
  let counter = arr.length;
  for (let i = 0; i < counter; i++) {
    if (arr[i] === el) {
      arr.splice(i, 1);
      arr.push(el);
      counter--;
    }
  }
  return arr;
}
