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
let button = document.querySelector(".button");
let point = document.querySelector(".point.digit");
let operation = document.querySelectorAll(".operation");
let divide = document.querySelector(".operation.divide");
let multiply = document.querySelector(".operation.multiply");
let add = document.querySelector(".operation.add");
let subtract = document.querySelector(".operation.subtract");
let evaluate = document.querySelector(".equals");

window.addEventListener("DOMContentLoaded", () => {
  digit.forEach(button => {
    button.addEventListener("click", function (e) {
     if ((/^[0-9]$/.test(e.target.textContent)) == true) {
       let integer = `<p>${parseInt(e.target.textContent)}</p>`
       display.innerHTML += integer;
     } else {
      if (display.textContent == "") {
        display.innerHTML = "<p>0</p>";
      }
       let float = `<p>.</p>`
       display.innerHTML += float;
       if ((/[.]$/.test(display.textContent)) == true) {
         point.disabled = "disabled";
       }
       if ((/(\+|x|-)[.]/.test(display.textContent)) == true) {
        let position = (/(\+|x|-)[.]/.exec(display.textContent).index) + 1;
        display.innerHTML = `<p>${[display.textContent.slice(0, position), "0",
        display.textContent.slice(-1)].join("")}`;
      }
     }     
    })
  })
});

window.addEventListener("DOMContentLoaded", () => {
  operation.forEach(button => {
    button.addEventListener("click", function (e) {
      if (display.textContent == "") {
        display.innerHTML = "<p>0</p>";
      }
      let operation = `<p>${e.target.textContent}</p>`;
      display.innerHTML += operation;
      if (e.target.classList[1] == "add") {
        add.disabled = "disabled";
        subtract.disabled = "disabled";
        multiply.disabled = "disabled";
        divide.disabled = "disabled";
      } else if (e.target.classList[1] == "subtract") {
        add.disabled = "disabled";
        subtract.disabled = "disabled";
        multiply.disabled = "disabled";
        divide.disabled = "disabled";
      } else if (e.target.classList[1] == "multiply") {
        add.disabled = "disabled";
        subtract.disabled = "disabled";
        multiply.disabled = "disabled";
        divide.disabled = "disabled";
      } else if (e.target.classList[1] == "divide") {
        add.disabled = "disabled";
        subtract.disabled = "disabled";
        multiply.disabled = "disabled";
        divide.disabled = "disabled";
      }
    })
  })
})