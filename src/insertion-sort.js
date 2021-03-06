export const insertionSort = (arr, removeDuplicate) => {
  if (removeDuplicate) {
    arr = [...new Set(arr)];
  }
  for (let i = 1; i < arr.length; i++) {
    let key = parseInt(arr[i]);
    let j = i - 1;

    while (j >= 0 && parseInt(arr[j]) > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};
