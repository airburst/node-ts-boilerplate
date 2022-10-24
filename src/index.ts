export const add = (a: number, b: number): number => {
  return a + b;
};

(async () => {
  console.log(add(3, 5));
})();
