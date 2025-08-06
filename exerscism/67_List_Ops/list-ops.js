//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(array = []) {
    this.list = array;
  }

  append(secondList) {
    return new List([...this.list, ...secondList.list]);
  }

  get values() {
    return this.list;
  }

  concat() {
    throw new Error("Remove this line and implement the function");
  }

  filter() {
    throw new Error("Remove this line and implement the function");
  }

  map() {
    throw new Error("Remove this line and implement the function");
  }

  length() {
    throw new Error("Remove this line and implement the function");
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

const list1 = new List([1, 2]);
const list2 = new List([2, 3, 4, 5]);

console.log(list1.append(list2));
