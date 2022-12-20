const getSymbol = (dataNumber) => {
  let image;

  switch (dataNumber) {
    case 1:
      image = "spade.png";
      break;
    case 2:
      image = "clover.png";
      break;
    case 3:
      image = "heart.png";
      break;
    case 4:
      image = "romb.png";
      break;
    case 5:
      image = "star.png";
      break;
    case 6:
      image = "balloon.png";
      break;
  }

  return `<img class='symbol' src="../img/${image}" />`;
};

export default getSymbol;
