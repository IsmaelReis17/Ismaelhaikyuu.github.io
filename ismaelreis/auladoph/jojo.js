let somaVariosNumeros = (...nums) => {
  let total = 0;
  for (let i of nums) {
    if (typeof i === "number") {
      total += i;
    }
  }
  return total;
};

console.log(somaVariosNumeros(1, 3, "ismaelreis", 4, 3, 2));
