// explore section
const exploreSections = document.querySelectorAll(".explore-section");

// Add click event listener to each explore section
exploreSections.forEach(function (exploreSection) {
    exploreSection.addEventListener("click", function () {
        // Get check icon and border
        const checkIcon = this.querySelector(".check-icon");
        const border = this.style.border;

        // Toggle check icon visibility
        if (checkIcon.style.display === "none") {
            checkIcon.style.display = "block";
        } else {
            checkIcon.style.display = "none";
        }

        // Toggle border color
        if (border === "3px solid #3DCBB1") {
            this.style.border = "none";
        } else {
            this.style.border = "3px solid #3DCBB1";
        }
    });
});

const okBtn = document.getElementById("okBtn");

// When the OK button is clicked, hide the explore section and show the website content
okBtn.addEventListener("click", function () {

    const modelSection = document.querySelector(".model-section");
    const website = document.getElementById("website")
    modelSection.style.display = "none";
    website.style.display = "block";

});