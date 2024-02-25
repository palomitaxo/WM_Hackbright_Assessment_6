const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  test("returns an empty array when shuffle empty array", () => {
    const inputArray = [];
    const shuffledArray = shuffle(inputArray);
  
    expect(shuffledArray).toEqual([]);
  });
  
  test("returns an empty array for undefined", () => {
    const shuffledArray = shuffle(undefined);
  
    expect(shuffledArray).toEqual([]);
  });
  
  test("returns an empty array for null", () => {
    const shuffledArray = shuffle(null);
  
    expect(shuffledArray).toEqual([]);
  });

});
