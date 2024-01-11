const nextButton = document.querySelector(".next img");
const prevButton = document.querySelector(".previous img");
let monthAndYear = document.querySelector(".month-and-year");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = months[new Date().getMonth()];
let currentYear = new Date().getFullYear();
let year = currentYear;
let month = currentMonth;
monthAndYear.textContent = currentMonth + " " + currentYear;

window.addEventListener("keyup", (event) => {
  if (event.ctrlKey && event.key === "ArrowRight") {
    nextMonth();
  }

  if (event.ctrlKey && event.key === "ArrowLeft") {
    prevMonth();
  }
});

nextButton.addEventListener("click", () => {
  nextMonth();
});

prevButton.addEventListener("click", () => {
  prevMonth();
});

function nextMonth() {
  if (month === "December") {
    month = "January";
    year++;
  } else {
    month = months[months.indexOf(month) + 1];
  }

  monthAndYear.textContent = month + " " + year;
}

function prevMonth() {
  if (month === "January") {
    month = "December";
    year--;
  } else {
    month = months[months.indexOf(month) - 1];
  }

  monthAndYear.textContent = month + " " + year;
}
