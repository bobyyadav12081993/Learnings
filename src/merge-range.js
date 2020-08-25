/*
Task is related to numeric form fields validation where form input accepts certain range of values
as well as a few "special" values which do not fall into that range.
 
We need to "merge" inclusive range of "normal" values with unsorted list of "special" values.
All values are of the integer type. Normal values range is continious while list of special
values might have holes, for example it can be smth like [10, -1, 200].

"Merging" is considered possible only when all special values are following or preceeding the range,
for example for the range [-5, 5] can be succesfully merged with the list of [-8, -6, -7] as
well as with [6] (list of one value only). However special value lists of [-8, -6], [-7] or [-100, -6, -7]
can not be merged with [-5, 5] range since there will be a hole in resluting range.
When merging is not possible we should return the original unmodified range as a result. 

To simplify the task let's assume that special values are always out of the range (don't overlap with it)
and numbers of special values list are either all greater than numbers of the range or all smaller
than the range. Special values list doesn't contain duplicates.

Examples:

range: [1, 2], specialValues: [4, 3] => [1, 4] (merged)
[1, 2], [] => [1, 2]
[1, 2], [3] => [1, 3] (merged)
[1, 2], [20] => [1, 2] (not merged)
[1, 2], [-2, -1] => [1, 2] (not merged)
[1, 2], [-1, 0, -2] => [-2, 2] (merged)

Few verbal tests to make sure we are on the same page:

[-10, 3], [5, 6, 7] => [-10, 3]
[-100, 50], [-101] = [-101, 50]
[0, 10], [-1] => [-1, 10]
[99, 999], [97, 98, 3] => [99, 999]
*/

/**
 * @param {number[]} range - Two integer numbers in the form of [min, max].
 * @param {number[]} [list=[]] - Unsorted list of special values, also integers.
 * @return {number[]} - Range in the form of [min, max].
 **/
function merge(range, specialValues = []) {
  specialValues.sort((a, b) => {
    return a - b;
  });
  console.log('specialValues::', specialValues);
  let identifier;

  if (range[0] + 1 === specialValues[specialValues.length - 1]) {
    identifier = 0;
    specialValues = specialValues.reverse();
  } else if (range[1] + 1 === specialValues[0]) {
    identifier = 1;
  } else {
    return range;
  }
  let flag = true;
  for (let i = 1; i <= specialValues.length; i++) {
    if (range[identifier] + i !== specialValues[i - 1]) {
      flag = false;
      break;
    }
  }

  if (flag) {
    return [range[0], specialValues[specialValues.length - 1]];
  } else {
    return range;
  }
}

const tests = [
  {
    range: [1, 2],
    list: [4, 3],
    expectation: [1, 4],
  },
  {
    range: [1, 2],
    list: [3],
    expectation: [1, 3],
  },
  {
    range: [1, 2],
    list: [10],
    expectation: [1, 2],
  },
  {
    range: [1, 3],
    list: [-2, -1, 0],
    expectation: [-2, 3],
  },
  {
    range: [1, 200],
    list: [-1, 0, -2],
    expectation: [-2, 200],
  },
  {
    range: [1, 2],
    list: [],
    expectation: [1, 2],
  },
  {
    range: [-1000, -5],
    list: [0, -2, -1, -3, -4],
    expectation: [-1000, 0],
  },
  {
    range: [-10, 2],
    list: [3, 6, 7, 8],
    expectation: [-10, 2],
  },
  {
    range: [-2, -1],
    list: [100, -3, 0],
    expectation: [-2, -1],
  },
];

console.log('====  TESTS  ====');

let failed = 0;

tests.forEach(({ range, list, expectation }) => {
  const result = merge(range, list);
  const match = result.join() === expectation.join();

  let text = `range: [${range.join()}], ` + `list: [${list.join()}]`;

  if (!match) {
    failed++;

    text += `, expectation: [${expectation.join()}], ` + `result: [${result.join()}]`;
  }

  console.log(`${match ? 'PASS' : 'FAIL'}: ${text}`);
});

console.log(`====  ${failed} TESTS FAILED OUT OF ${tests.length}  ====`);
