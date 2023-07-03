// Feature #1 ..................................

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let day = days[now.getDay()];
let month = months[now.getMonth()];
let date = now.getDate();
let year = now.getFullYear();

let h4 = document.querySelector("h4");
h4.innerHTML = `${day}`;

let h5 = document.querySelector("h5");
h5.innerHTML = `${month} ${date}`;

let h6 = document.querySelector("h6");
h6.innerHTML = `${year}`;

// Feature #2 ..................................

function search(event) {
  event.preventDefault();
}

const appState = {
  degreeUnit: "c" // the alternative is 'c'
};

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

// Bonus Feature ..................................

const degreeSpan = document.getElementById("degree_attribute");
const degreeSwitcher = document.querySelectorAll("button.degree-selector");

const toFahrenheit = (celsius) => Math.round((celsius * 9) / 5 + 32);
const toCelsius = (fahrenheit) => Math.round(((fahrenheit - 32) * 5) / 9);

degreeSwitcher.forEach((switcher) => {
  switcher.addEventListener("click", (e) => {
    let value = parseInt(degreeSpan.innerText);
    if (appState.degreeUnit === "f") {
      degreeSpan.innerText = toCelsius(value);
      appState.degreeUnit = "c";
    } else {
      degreeSpan.innerText = toFahrenheit(value);
      appState.degreeUnit = "f";
    }
  });
});
