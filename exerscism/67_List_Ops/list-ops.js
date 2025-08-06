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

  map() {
    throw new Error("Remove this line and implement the function");
  }

  length() {
    let count = 0;
    for (const item of this.list) {
      count++;
    }
    return count;
  }

  foldl() {
    throw new Error("Remove this line and implement the function");
  }

  foldr() {
    throw new Error("Remove this line and implement the function");
  }

  reverse() {
    throw new Error("Remove this line and implement the function");
  }
}

// Test case append
const list1 = new List([1, 2]);
const list2 = new List([2, 3, 4, 5]);

// console.log(list1.append(list2));

// Test case concat
const list3 = new List([1, 2]);
const list4 = new List([3]);
const list5 = new List([]);
const list6 = new List([4, 5, 6]);
const listOfLists = new List([list4, list5, list6]);

// console.log(list3.concat(listOfLists).values);

// Test case filter
const list7 = new List([1, 2, 3, 5]);
// console.log(list7.filter((el) => el % 2 === 1).values);

// Test case length

const list8 = new List();
console.log(list8.length());

const list9 = new List([1, 2, 3, 4]);
console.log(list9.length());
