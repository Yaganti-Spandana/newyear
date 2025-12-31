const year = document.getElementById("year");
year.textContent = new Date().getFullYear() + 1;

const wishes = [
  "Santa wishes you happiness and peace 🎅✨",
  "Warm hugs and joyful moments this year 🎄",
  "New Year, new adventures await 🎆",
  "May your days be merry and bright 🌟"
];

function newWish() {
  const random = Math.floor(Math.random() * wishes.length);
  document.getElementById("wish").textContent = wishes[random];
}
