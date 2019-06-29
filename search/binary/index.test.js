import binarySearch from "./index.js";

describe("binarySearch", () => {
  it("should return null on empty array", () => {
    expect(binarySearch([], 22)).toBe(null);
  });

  it("should return null on sorted array if target not exist on array", () => {
    expect(binarySearch([24, 25, 26, 27, 28, 30, 62, 63], 0)).toBe(null);
  });

  it("should search index in sorted array. Boundary cases.", () => {
    expect(binarySearch([24], 24)).toBe(0);
    expect(binarySearch([24, 25], 24)).toBe(0);
    expect(binarySearch([24, 25], 25)).toBe(1);
  });

  it("should search index in sorted array", () => {
    expect(binarySearch([24, 25, 26, 27, 28, 30, 62, 63, 1020], 30)).toBe(5);
    expect(binarySearch([24, 25, 26, 27, 28, 30, 62, 63, 1020], 24)).toBe(0);
    expect(binarySearch([24, 25, 26, 27, 28, 30, 62, 63, 1020], 1020)).toBe(8);
    expect(binarySearch([24, 25, 26, 27, 28, 30, 62, 63, 1020], 25)).toBe(1);
    expect(
      binarySearch([24, 25, 26, 27, 28, 30, 35, 36, 39, 50, 60, 61, 62, 63], 62)
    ).toBe(12);
  });

  it("should search index in sorted array with custom comparator", () => {
    const comparator = {
      checkEqual: (match, target) => match.id === target,
      checkGreat: (match, target) => match.id > target
    };

    const sortedArray = [{ id: 2, value: 'first'}, { id: 3, value: 'second'}, { id: 4, value: 'third'}];

    expect(binarySearch(sortedArray, 3, comparator)).toBe(1);
  });
  
  
  it("should return null on empty array", () => {
    expect(binarySearch(['A','B','C','D','E','F','G','H','I'], 'H')).toBe(7);
  });
});
