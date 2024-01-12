const nextButton = document.querySelector(".next img");
const prevButton = document.querySelector(".previous img");
const calendarBody = document.querySelector(".calendar-body");
let monthAndYear = document.querySelector(".month-and-year");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let currentDay = new Date().getDate();
let currentMonth = months[new Date().getMonth()];
let currentYear = new Date().getFullYear();

let year = currentYear;
let month = currentMonth;

console.log("Current day: " + currentDay);

monthAndYear.textContent = currentMonth + " " + currentYear;
drawCalendarBody(currentMonth, currentYear);

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

  drawCalendarBody(month, year);
  monthAndYear.textContent = month + " " + year;
}

function prevMonth() {
  if (month === "January") {
    month = "December";
    year--;
  } else {
    month = months[months.indexOf(month) - 1];
  }

  drawCalendarBody(month, year);
  monthAndYear.textContent = month + " " + year;
}

function drawCalendarBody(month, year) {
  const firstDayNum = new Date(year, months.indexOf(month), 1).getDay();
  const firstDay = weekdays[firstDayNum];
  const daysInMonth = 32 - new Date(year, months.indexOf(month), 32).getDate();

  calendarBody.innerHTML = ""; // Clear calendar body

  for (let i = 0; i < 42; i++) {
    const div = document.createElement("div");
    div.classList.add("day");

    // Add empty class to days before and after current month

    if (i < firstDayNum || i >= daysInMonth + firstDayNum) {
      div.classList.add("empty");
    }

    // Add today class to current day

    if (i === currentDay + firstDayNum - 1 && month === currentMonth && year === currentYear) {
      div.classList.add("today");
    }

    // Add number to day div

    if (i >= firstDayNum && i < daysInMonth + firstDayNum) {
      div.textContent = i - firstDayNum + 1;
    }

    // Add number to day div for next month

    if (i >= daysInMonth + firstDayNum) {
      div.textContent = i - daysInMonth - firstDayNum + 1;
    }

    calendarBody.appendChild(div);
  }

  console.log("Month: " + month);
  console.log("First day of the month is: " + firstDay);
  console.log("Days in month: " + daysInMonth);
}
