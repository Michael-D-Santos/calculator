function operate(x, firstTerm, secondTerm) {
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

let numbersClass = document.querySelector(".numbers");

for (i = 0; i < 10; i++) {
  let number = document.createElement("button");
  number.innerHTML = `<p>${i}</p>`;
  number.classList.add("button")
  numbersClass.appendChild(number);
}