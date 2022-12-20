const createComputesCombination = () => {
  const combination = [];
  for (let i = 0; i < 4; i++) {
    combination.push(Math.floor(Math.random() * 6 + 1));
  }

  return combination;
};

// let red_kombinacije = (x1 - 1) * 216 + (x2 - 1) * 36 + (x3 - 1) * 6 + x4;

export default createComputesCombination;
