function operation(x, firstTerm, secondTerm) {
  switch (x) {
    case "subtract":
      x = firstTerm-secondTerm;
      break;
    case "add":
      x = firstTerm+secondTerm;
      break;
    case "multiply":
      x = firstTerm*secondTerm;
      break;
    case "divide":
      x = firstTerm/secondTerm;
      break;
    default:
      return "ERROR: OPERATION NOT VALID";
  }

  if (firstTerm.toString().length > secondTerm.toString().length) {
    let length = firstTerm.toString().length;
    return Number((x).toFixed(length));
  } else {
    let length = secondTerm.toString().length;
    return Number((x).toFixed(length));
  }
}