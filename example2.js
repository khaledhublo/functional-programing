let promiseGenerator = function(x) {
  return new Promise((resolve, rejext) => {
    resolve(x);
  });
};

(async () => {
  let promises = [
    promiseGenerator(1),
    promiseGenerator(2),
    promiseGenerator(3),
    promiseGenerator(4)
  ];
  console.log(
    await promises.reduce(async (p, c) => {
      let p1 = await p;
      let c1 = await c;
      return p1 + c1;
    }, new Promise(resolve => resolve(0)))
  );
})();
