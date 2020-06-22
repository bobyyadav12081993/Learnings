/*
Find the first non-repeating character in string
Example: racecar 
Output: e
Time: 15 min
*/

/*
Given a group of words we need to write a code which will group the words which are anagrams of each other. 
For e.g. [art,cheese,cat,rat,tar,act,tca]
Output: [[art,rat,tar],[cat,act,tca],[cheese]] 
Time:30min
*/

function strSort(str) {
  return str.split('').sort().join('');
}

function isAnagrams() {
  let arr = ['art', 'cheese', 'cat', 'rat', 'tar', 'act', 'tca', 'abc', 'chseee'];
  let finalResult = [];
  let checkedKeys = [];

  for (let i = 0; i < arr.length; i++) {
    if (!checkedKeys.includes(strSort(arr[i]))) {
      finalResult.push(
        arr.filter((val) => {
          return strSort(arr[i]) == strSort(val);
        })
      );
      checkedKeys.push(strSort(arr[i]));
    }
  }
  finalResult.sort((a, b) => {
    return b.length - a.length;
  });
  return finalResult;
}

function isNonRepeating(str) {
  let strMap = {};
  for (let i = 0; i < str.length; i++) {
    if (strMap[str[i]]) {
      strMap[str[i]]++;
    } else {
      strMap[str[i]] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (strMap[str[i]] == 1) return str[i];
  }

  return 'Not found';
}
