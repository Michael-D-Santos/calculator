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

let digit = document.querySelectorAll(".digit");
let display = document.querySelector(".screen");

window.addEventListener("DOMContentLoaded", () => {
  digit.forEach(button => {
    button.addEventListener("click", function (e) {
     if ((/^[0-9]$/.test(e.target.textContent)) == true) {
       let integer = `<p>${parseInt(e.target.textContent)}</p>`
       display.innerHTML += integer;
     } else {
       let float = `<p>.</p>`
       display.innerHTML += float;
     }
    })
  })
});