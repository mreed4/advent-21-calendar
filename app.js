const nextButton = document.querySelector(".next img");
const prevButton = document.querySelector(".previous img");
const calendarBody = document.querySelector(".calendar-body");
let monthAndYear = document.querySelector(".month-and-year");

const months = [
  /* */
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
  "December",
];

let currentDay = new Date().getDate();
let currentMonth = months[new Date().getMonth()];
let currentYear = new Date().getFullYear();

let year = currentYear;
let month = currentMonth;

(function initialDraw() {
  monthAndYear.textContent = currentMonth + " " + currentYear;
  drawCalendarBody(currentMonth, currentYear);
})();

// Helper functions

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

// Main function

function drawCalendarBody(month, year) {
  const firstDayNum = new Date(year, months.indexOf(month), 1).getDay();
  const daysInMonth = 32 - new Date(year, months.indexOf(month), 32).getDate();
  const daysInPrevMonth = 32 - new Date(year, months.indexOf(month) - 1, 32).getDate();

  calendarBody.innerHTML = ""; // Clear calendar body

  for (let i = 0; i < 42; i++) {
    /* */
    const isInNextMonth = i >= daysInMonth + firstDayNum;
    const isInPrevMonth = i < firstDayNum;
    const isWithinMonth = !isInNextMonth && !isInPrevMonth;

    let isCurrentDay = i === currentDay + firstDayNum - 1; // -1 because of zero indexing
    const isCurrentMonth = month === currentMonth;
    const isCurrentYear = year === currentYear;
    isCurrentDay = isCurrentDay && isCurrentMonth && isCurrentYear;

    // Create divs, add class

    const div = document.createElement("div");
    div.classList.add("day");

    // Conditionally add additional classes

    if (!isWithinMonth) {
      div.classList.add("empty");
    }

    if (isCurrentDay) {
      div.classList.add("today");
    }

    // Conditionally add day number to divs

    if (isWithinMonth) {
      div.textContent = i - firstDayNum + 1;
    }

    if (isInNextMonth) {
      div.textContent = i - daysInMonth - firstDayNum + 1;
    }

    if (isInPrevMonth) {
      div.textContent = daysInPrevMonth - firstDayNum + i + 1;
    }

    // Append divs to calendar body

    calendarBody.appendChild(div);
  }
}

// Event listeners

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
