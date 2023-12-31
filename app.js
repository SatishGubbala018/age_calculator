//Inputs
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearsInput = document.getElementById("year");
console.log(dayInput);

//Outputs
const dayOtp = document.getElementById("DD");
const monthOtp = document.getElementById("MM");
const yearOtp = document.getElementById("YYYY");

//Form
const form = document.querySelector("form");

//Adding the submit event listner form
form.addEventListener("submit", handleSubmit);

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;

    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "this field is required.";
      validator = false;
    } else if (monthInput.value > 12) {
      monthInput.style.borderColor = "red";
      monthInput.parentElement.querySelector("small").innerText =
        "must be a valid month.";
      validator = false;
    } else if (dayInput.value > 31) {
      dayInput.style.borderColor = "red";
      dayInput.parentElement.querySelector("small").innerText =
        "must be a valid Day.";
      validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
}

function handleSubmit(e) {
  e.preventDefault();

  if (validate()) {
    if (dayInput.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthInput.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - dayInput.value;
    const m = month - monthInput.value;
    const y = year - yearsInput.value;

    dayOtp.innerHTML = d;
    monthOtp.innerHTML = m;
    yearOtp.innerHTML = y;
  }
}
