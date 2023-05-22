const date = document.getElementById("date");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const am_pm = document.getElementById("am_pm");
const progressBar = document.getElementById("progress");

function updateTime() {
  let d = new Date();
  date.innerHTML = d.toDateString();
  let hourDigit = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
  if (d.getHours() === 0) hourDigit = 12;
  hour.innerHTML = hourDigit < 10 ? "0" + hourDigit : hourDigit;
  minute.innerHTML =
    d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
  second.innerHTML =
    d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();

  am_pm.innerHTML = d.getHours() < 12 ? "AM" : "PM";
  progressBar.style.width = (d.getSeconds() / 60) * 100 + "%";
}

setInterval(updateTime, 1000);
