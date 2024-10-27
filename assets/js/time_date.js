const timeE1 = document.getElementById("time");
const dateE1 = document.getElementById("date");

const days = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thuresday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const API_KEY = "a496ebbf8010fd0c5b9d64d8c3edf359";

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hoursIn12Format = hour >= 13 ? hour % 12 : hour;
  const minutes = time.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";

  timeE1.innerHTML =
    hoursIn12Format + ":" + minutes + " " + `<span id="am-pm">${ampm}</span>`;

  dateE1.innerHTML = days[day] + ", " + date + " " + months[month];
}, 1000);
