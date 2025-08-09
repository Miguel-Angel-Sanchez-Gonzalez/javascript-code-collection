// Solución al ejercicio de Exercism: "List Ops"
// Enunciado tomado de Exercism.org

export class List {
  constructor(array = []) {
    this.list = [];

    for (let item of array) {
      if (item instanceof List) {
        this.list.push(...item.list.filter((val) => val !== undefined));
      } else if (item !== undefined) {
        this.list.push(item);
      }
    }
  }

  append(secondList) {
    return new List([...this.list, ...secondList.list]);
  }

  get values() {
    return this.list;
  }

  concat(newList) {
    return new List([...this.values, ...newList.list]);
  }

  filter(callback) {
    const result = [];
    for (const item of this.list) {
      if (callback(item)) {
        result.push(item);
      }
    }
    return new List(result);
  }

  map(callback) {
    const result = [];
    for (const item of this.list) {
      result.push(callback(item));
    }
    return new List(result);
  }

  length() {
    let count = 0;
    for (const item of this.list) {
      count++;
    }
    return count;
  }

  foldl(callback, initialValue) {
    let accumulator = initialValue;
    for (const item of this.list) {
      accumulator = callback(accumulator, item);
    }

    return accumulator;
  }

  foldr(callback, initialValue) {
    let acc = initialValue;
    for (let i = this.list.length; i--; ) {
      acc = callback(acc, this.list[i]);
    }
    return acc;
  }

  reverse() {
    const arrReverse = [];
    for (let i = this.list.length; i--; ) {
      arrReverse.push(this.list[i]);
    }
    return new List(arrReverse);
  }
}

// Test case append
const list1 = new List([1, 2]);
const list2 = new List([2, 3, 4, 5]);

console.log(list1.append(list2));

// Test case concat
const list3 = new List([1, 2]);
const list4 = new List([3]);
const list5 = new List([]);
const list6 = new List([4, 5, 6]);
const listOfLists = new List([list4, list5, list6]);

console.log(list3.concat(listOfLists).values);

// Test case filter
const list7 = new List([1, 2, 3, 5]);
console.log(list7.filter((el) => el % 2 === 1).values);

// Test case length
const list8 = new List();
console.log(list8.length());

const list9 = new List([1, 2, 3, 4]);
console.log(list9.length());

// Test case Map
const list10 = new List([1, 3, 5, 7]);
console.log(list10.map((el) => ++el).values);

// Test case Foldl
const list11 = new List();
console.log(list11.foldl((acc, el) => acc + el, 2));

// Test case Foldr
const list12 = new List([1, 2, 3, 4]);
console.log(list12.foldr((acc, el) => el / acc, 24));

// Test case
const list13 = new List([[1, 2], [3], [], [4, 5, 6]]);
console.log(list13.reverse().values);
