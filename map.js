let arr = [1, 2, 3, 4, 5];
let results = arr.map(e => e * 2);
// console.log(results);

let arr2 = [{ val: 1 }, { val: 2 }, { val: 3 }];
let results2 = arr2.map(e => e.val * 2);
// console.log(arr2);
// console.log(results2);

let results3 = arr2.map(e => ({ val: e.val * 2 }));
console.log(arr2);
console.log(results3);

let arr4 = [
  function(x) {
    return x * 1;
  },
  function(x) {
    return x * 2;
  },
  function(x) {
    return x * 3;
  },
  function(x) {
    return x * 4;
  }
];
let results4 = arr4.map(
  e =>
    function(x) {
      return e(x) * 2;
    }
);
console.log(arr4.map(e => e(3)));
console.log(results4.map(e => e(3)));
