export function twoSum(arr, sum) {
  let hashMap = {};
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    let currentDifference = sum - arr[i];
    if (hashMap[currentDifference] !== undefined && hashMap[currentDifference] !== i) {
      pairs.push([arr[i], currentDifference]);
    } else {
      hashMap[arr[i]] = i;
    }
  }
  return pairs;
}
