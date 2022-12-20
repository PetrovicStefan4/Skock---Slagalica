const checkMatches = (computersCombination, playersCombination) => {
  const computersCombination1 = [...computersCombination];
  const playersCombination1 = [...playersCombination];

  let redMatches = 0;
  let yellowMatches = 0;

  for (let i = 0; i < 4; i++) {
    if (computersCombination[i] === playersCombination[i]) {
      computersCombination1.splice(i - redMatches, 1);
      playersCombination1.splice(i - redMatches, 1);
      redMatches++;
    }
  }

  for (let i = 0; i < playersCombination1.length; i++) {
    let matchIndex = computersCombination1.findIndex(
      (element) => element === playersCombination1[i]
    );

    if (matchIndex > -1) {
      computersCombination1.splice(matchIndex, 1);
      yellowMatches++;
    }
  }

  return {
    redMatches,
    yellowMatches,
    totalMatches: redMatches + yellowMatches,
  };
};

export default checkMatches;
