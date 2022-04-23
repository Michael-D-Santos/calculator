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
let del = document.querySelector(".delete");
let allclear = document.querySelector(".all-clear");

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
       if ((/(\+|x|÷|-)[.]/.test(display.textContent)) == true) {
        let position = (/(\+|x|÷|-)[.]/.exec(display.textContent).index) + 1;
        display.innerHTML = `<p>${[display.textContent.slice(0, position), "0",
        display.textContent.slice(-1)].join("")}`;
      }
     }     
    })
  })

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
        point.disabled = false;
      } else if (e.target.classList[1] == "subtract") {
        add.disabled = "disabled";
        subtract.disabled = "disabled";
        multiply.disabled = "disabled";
        divide.disabled = "disabled";
        point.disabled = false;
      } else if (e.target.classList[1] == "multiply") {
        add.disabled = "disabled";
        subtract.disabled = "disabled";
        multiply.disabled = "disabled";
        divide.disabled = "disabled";
        point.disabled = false;
      } else if (e.target.classList[1] == "divide") {
        add.disabled = "disabled";
        subtract.disabled = "disabled";
        multiply.disabled = "disabled";
        divide.disabled = "disabled";
        point.disabled = false;
      }
    })
  })

evaluate.addEventListener("click", () => {
  if (display.textContent.match(/(\+|x|÷|-)/)[0] == "+") {
    let augend = display.textContent.match(/[^(+|x|÷|\-)]*/)[0];
    let addend = display.textContent.match(/(-|\+|÷|x)(.*)/)[2];
    display.innerHTML = `<p>${parseFloat(augend) + parseFloat(addend)}</p>`;
  } else if (display.textContent.match(/(\+|x|÷|-)/)[0] == "x") {
    let multiplier = display.textContent.match(/[^(+|x|÷|\-)]*/)[0];
    let multiplicand = display.textContent.match(/(-|\+|÷|x)(.*)/)[2];
    display.innerHTML = `<p>${parseFloat(multiplier) * 
      parseFloat(multiplicand)}</p>`;
  } else if (display.textContent.match(/(\+|x|÷|-)/)[0] == "-") {
    let minuend = display.textContent.match(/[^(+|x|÷|\-)]*/)[0];
    let subtrahend = display.textContent.match(/(-|\+|÷|x)(.*)/)[2];
    display.innerHTML = `<p>${parseFloat(minuend) - parseFloat(subtrahend)}</p>`;
  } else if (display.textContent.match(/(\+|x|÷|-)/)[0] == "÷") {
    let dividend = display.textContent.match(/[^(+|x|÷|\-)]*/)[0];
    let divisor = display.textContent.match(/(-|\+|÷|x)(.*)/)[2];
    display.innerHTML = `<p>${parseFloat(dividend)/parseFloat(divisor)}</p>`
  }

  add.disabled = false;
  subtract.disabled = false;
  multiply.disabled = false;
  divide.disabled = false;
});

allclear.addEventListener("click", () => {
  display.innerHTML = "";
  add.disabled = false;
  subtract.disabled = false;
  multiply.disabled = false;
  divide.disabled = false;
  point.disabled = false;
});