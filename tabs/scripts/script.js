// Full year for footer
const todayDate = new Date();
jsyear.innerText = todayDate.getFullYear();

//style switcher code
const summaryTab = document.getElementById("Summary");
const specsTab = document.getElementById("Specs");
const featuresTab = document.getElementById("Features");
const refundsTab = document.getElementById("Refunds");

const tabLinks = document.querySelectorAll(".nav-item");

tabLinks.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("nav-active");
    }
    if (e.currentTarget.classList.contains("summary")) {
      summaryTab.classList.remove("inactive");
      specsTab.classList.add("inactive");
      featuresTab.classList.add("inactive");
      refundsTab.classList.add("inactive");
      e.currentTarget.classList.add("nav-active");
    } else if (e.currentTarget.classList.contains("specs")) {
      summaryTab.classList.add("inactive");
      specsTab.classList.remove("inactive");
      featuresTab.classList.add("inactive");
      refundsTab.classList.add("inactive");
      e.currentTarget.classList.add("nav-active");

    } else if (e.currentTarget.classList.contains("feat")) {
      summaryTab.classList.add("inactive");
      specsTab.classList.add("inactive");
      featuresTab.classList.remove("inactive");
      refundsTab.classList.add("inactive");
      e.currentTarget.classList.add("nav-active");

    } else if (e.currentTarget.classList.contains("refund")) {
      summaryTab.classList.add("inactive");
      specsTab.classList.add("inactive");
      featuresTab.classList.add("inactive");
      refundsTab.classList.remove("inactive");
      e.currentTarget.classList.add("nav-active");

    } else {
      summaryTab.classList.remove("inactive");
      specsTab.classList.add("inactive");
      featuresTab.classList.add("inactive");
      refundsTab.classList.add("inactive");
      e.currentTarget.classList.add("nav-active");

    }
  })
});
