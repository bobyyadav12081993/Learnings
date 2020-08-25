import { reverseWord } from './reverse-word';
import { isOverlapping } from './overlapping-rectangles';
import { getColumnName } from './excel-column-name';
import { nonRepeatingChar } from './non-repeating-character';
import { checkIsSumTree } from './sum-tree';
import { getModifiedArray } from './pushEleAtLast';
import { twoSum } from './two-sum';
// import './reverse-word-modify';
import './what-console';

checkIsSumTree();
console.log(nonRepeatingChar('hello'));
console.log(getColumnName(460));
console.log(isOverlapping(0, 10, 10, 0, 5, 5, 15, 0));
console.log(isOverlapping(0, 2, 1, 1, -2, -3, 0, 2));
console.log(reverseWord('i.like.this.program.very.much'));
console.log('working');

let temp = [0, 1, 0, 3, 12];
console.log(getModifiedArray(temp, 0));

console.log(twoSum([1, 2, 3, 2, 0, 4], 4));

class Stack {
  constructor() {
    this.minValue = '';
    this.data = [];
    this.tracker = '';
  }

  push(item) {
    if (this.data.length == 0) {
      this.minValue = item;
    } else if (this.minValue > item) {
      this.tracker = 2 * item - this.minValue;
      this.minValue = item;
      this.data.push(item);
    }
  }

  pop() {
    let val = this.data.pop();
    if (val === this.minValue) {
      this.minValue = 2 * val - this.tracker;
    }
  }
}

function countOfarr(arr, sum) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] + arr[j] === sum) {
        counter++;
      }
    }
  }
  return counter;
}

class Car {
  static _def = {
    brand: 'citroen',
  };

  constructor(conf = {}) {
    console.log('initiated', conf);
    this.config = Object.assign(Car._def, conf);
  }

  print() {
    console.log(this.config.brand);
  }
}

let car1 = new Car({ brand: 'chevrolet' });
let car2 = new Car({ brand: 'ford' });
let car3 = new Car();
car1.print();
car2.print();
car3.print();
