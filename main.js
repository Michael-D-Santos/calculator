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
    return Number((parseFloat(x)).toFixed(length));
  } else {
    let length = secondTerm.toString().length;
    return Number((parseFloat(x)).toFixed(length));
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
let square = document.querySelector(".square");
let percent = document.querySelector(".percent");

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
      let operation = `<p>${e.target.textContent}</p>`;
      display.innerHTML += operation;

      if (e.target.classList[0] == "operation") {
        [add.disabled, subtract.disabled, multiply.disabled, divide.disabled,
          point.disabled] = ["disabled", "disabled", "disabled", "disabled", 
          false];
      } 
    })
  })

evaluate.addEventListener("click", () => {
  let firstPart = parseFloat(display.textContent.match(/[^(+|x|÷|\-)]*/)[0]);
  let secondPart = parseFloat(display.textContent.match(/(-|\+|÷|x)(.*)/)[2]);

  switch(display.textContent.match(/(\+|x|÷|-)/)[0]) {
    case "+":
      display.innerHTML = `<p>${operate("add", firstPart, secondPart)}</p>`;
      break;
    case "x":
      display.innerHTML = `<p>${operate("multiply", firstPart, 
      secondPart)}</p>`;
      break;
    case "-":
      display.innerHTML = `<p>${operate("subtract", firstPart, 
      secondPart)}</p>`;
      break;
    case "÷":
      display.innerHTML = `<p>${operate("divide", firstPart, secondPart)}</p>`;
      break;
    default:
      display.innerHTML = "";
  }

  [add.disabled, subtract.disabled, multiply.disabled, divide.disabled] =
  [false, false, false, false];
});

allclear.addEventListener("click", () => {
  display.innerHTML = "";
  [add.disabled, subtract.disabled, multiply.disabled, divide.disabled,
  point.disabled] = [false, false, false, false, false];
});

del.addEventListener("click", () => {
  display.innerHTML = `<p>${display.textContent.slice(0, -1)}</p>`;
})

square.addEventListener("click", () => {
  display.innerHTML = `<p>${display.textContent ** 2}</p>`;
})

percent.addEventListener("click", () => {
  display.innerHTML = `<p>${display.textContent/100}</p>`;
})