// Solución al ejercicio de Exercism: "Series"
// Enunciado tomado de Exercism.org

export class Series {
  constructor(series) {
    if (series.length === 0) {
      throw new Error("series cannot be empty");
    }
    this.series = series;
  }

  slices(sliceLength) {
    if (sliceLength < 0) {
      throw new Error("slice length cannot be negative");
    }
    if (sliceLength === 0) {
      throw new Error("slice length cannot be zero");
    }
    if (sliceLength > this.series.length) {
      throw new Error("slice length cannot be greater than series length");
    }

    const slices = [];

    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      const slice = this.series.slice(i, sliceLength + i);
      slices.push(slice.split("").map((num) => Number(num)));
    }

    return slices;
  }
}

// Test cases
console.log(new Series("1").slices(1));
console.log(new Series("12").slices(1));
console.log(new Series("35").slices(2));
console.log(new Series("9142").slices(2));
console.log(new Series("777777").slices(3));
console.log(new Series("918493904243").slices(5));
console.log(new Series("12345").slices(6));
console.log(new Series("12345").slices(42));
console.log(new Series("12345").slices(0));
