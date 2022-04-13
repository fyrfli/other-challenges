// Full year for footer
const todayDate = new Date();
jsyear.innerText = todayDate.getFullYear();

// function for feather icons
// feather.replace();

//style switcher code
const summaryTab = document.getElementById("Summary");
const statsTab = document.getElementById("Stats");
const featuresTab = document.getElementById("Features");
const refundsTab = document.getElementById("Refunds");

const tabLinks = document.querySelectorAll(".tab__item");

console.log(tabLinks);

tabLinks.forEach() {
  console.log(this);
};