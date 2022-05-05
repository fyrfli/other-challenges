// Full year for footer
const todayDate = new Date();
jsyear.innerText = todayDate.getFullYear();

//style switcher code
const summaryTab = document.getElementById("Summary");
const specsTab = document.getElementById("Specs");
const featuresTab = document.getElementById("Features");
const refundsTab = document.getElementById("Refunds");

const tabLinks = document.querySelectorAll(".nav-item");
const tabContent = document.querySelectorAll(".tab-item");

tabLinks.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("nav-active");
      tabContent[i].classList.add("inactive");
    }
    if (e.currentTarget.classList.contains("summary")) {
      summaryTab.classList.remove("inactive");
      e.currentTarget.classList.add("nav-active");

    } else if (e.currentTarget.classList.contains("specs")) {
      specsTab.classList.remove("inactive");
      e.currentTarget.classList.add("nav-active");

    } else if (e.currentTarget.classList.contains("feat")) {
      featuresTab.classList.remove("inactive");
      e.currentTarget.classList.add("nav-active");

    } else if (e.currentTarget.classList.contains("refund")) {
      refundsTab.classList.remove("inactive");
      e.currentTarget.classList.add("nav-active");

    } else {
      summaryTab.classList.remove("inactive");
      e.currentTarget.classList.add("nav-active");
    }
  })
});
