let arr = [1, 2, 3, 4, 5];
let results = arr.reduce(
  function(previouslyReturnedValue, currentElementInArray) {
    return previouslyReturnedValue + currentElementInArray;
  },
  // The initial previouslyReturnedValue
  0
);
//console.log(results);

let arr2 = [true, false, false, true, false, false];
let results2 = arr2.reduce((p, c) => p && c, true);

console.log(results2);
