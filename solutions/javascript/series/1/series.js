//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    this.series = [...series].map(Number);

    if (this.series.length === 0) {
      throw new Error("series cannot be empty")
    }
  }

  slices(sliceLength) {
    if (sliceLength === 0) {
      throw new Error('slice length cannot be zero');
    } else if (sliceLength < 0) {
      throw new Error('slice length cannot be negative');
    } else if (sliceLength > this.series.length) {
      throw new Error('slice length cannot be greater than series length');
    }

    const slices = [];

    let startIndex = 0;
    let endIndex = sliceLength;
  
    do {
      const slice = this.series.slice(startIndex, endIndex);
      slices.push(slice);
      
      startIndex += 1;
      endIndex += 1;
    } while (endIndex - 1 < this.series.length);

    return slices;
  }
}
