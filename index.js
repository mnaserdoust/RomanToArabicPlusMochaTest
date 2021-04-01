const convertTable = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

module.exports = (romanText) => {
  const letters = /^[A-Za-z]+$/;

  if (romanText === "") return -1;

  romanText = romanText.toUpperCase();

  let total = 0;
  let lastValu = 0;
  for (let i = romanText.length - 1; i >= 0; i--) {
    if (!romanText.charAt(i).match(letters)) return -1;
    let tempValue = convertTable[romanText.charAt(i)];

    if (tempValue < lastValu) total -= tempValue;
    else {
      total += tempValue;
      lastValu = tempValue;
    }
  }
  return total;
};
