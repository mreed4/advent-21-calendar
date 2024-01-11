const currentYearDiv = document.querySelector(".current-year");
const currentYear = new Date().getFullYear();
currentYearDiv.textContent = currentYear;

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const currentMonthDiv = document.querySelector(".current-month");
const currentMonth = months[new Date().getMonth()];
currentMonthDiv.textContent = currentMonth;
