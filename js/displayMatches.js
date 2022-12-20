const displayMatches = (match) => {
  const results = document.querySelectorAll(".result:not(.disabled)");

  const { redMatches, totalMatches } = match;
  for (let i = 0; i < 4; i++) {
    if (i < redMatches) {
      results[i].classList.add("bg-danger");
    } else if (redMatches <= i && i < totalMatches) {
      results[i].classList.add("bg-warning");
    } else {
      results[i].classList.add("bg-light-gray");
    }
    results[i].classList.add("disabled");
  }
};

export default displayMatches;
