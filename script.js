const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const day = document.getElementById("day");

var monthName = [
  "มกราคม",
  "กุมภาพันธ์",
  "มีนาคม",
  "เมษายน",
  "พฤษภาคม",
  "มิถุนายน",
  "กรกฎาคม",
  "สิงหาคม",
  "กัยยายน",
  "ตุลาคม",
  "พฤศจิกายน",
  "ธันวาคม"
];

const clock = setInterval(function time() {
  let today = new Date();
  let d = today.getDate();
  let m = today.getMonth();
  let y = today.getFullYear();
  let h = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  day.innerHTML = `วันที่ ${d} ${monthName[m]} ${y + 543}`;
  hour.textContent = h;
  minute.innerText = min;
  second.innerText = sec;
});
