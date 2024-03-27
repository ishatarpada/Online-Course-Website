// submenu

const dropdownSubmenu = document.querySelectorAll(".dropdown-submenu");

dropdownSubmenu.forEach(function (element) {
    element.addEventListener("click", function (event) {
        event.stopPropagation();
        const submenu = this.querySelector(".submenu");
        // Close all other open submenus
        dropdownSubmenu.forEach(function (submenuElement) {
            if (submenuElement !== element) {
                submenuElement.querySelector(".submenu").style.display = "none";
            }
        });
        // Toggle display of clicked submenu
        if (submenu.style.display === "block") {
            submenu.style.display = "none";
        } else {
            submenu.style.display = "block";
        }
    });
});

// Close submenu when clicking outside
window.addEventListener("click", function (event) {
    dropdownSubmenu.forEach(function (element) {
        const submenu = element.querySelector(".submenu");
        if (submenu.style.display === "block" && !element.contains(event.target)) {
            submenu.style.display = "none";
        }
    });
});

// Close current open submenu when clicking on another list item
dropdownSubmenu.forEach(function (element) {
    element.addEventListener("click", function () {
        const currentOpenSubmenu = element.querySelector(".submenu");
        if (currentOpenSubmenu.style.display === "block") {
            currentOpenSubmenu.style.display = "none";
        }
    });
});

// for change option

const development = document.querySelector("#development");
const design = document.querySelector("#design");
const marketing = document.querySelector("#marketing");
const IT_Software = document.querySelector("#IT & Software");
const maths = document.querySelector("#maths");
const ai = document.querySelector("#ai");

const developmentTopics = document.querySelectorAll(".development");
const designTopics = document.querySelectorAll(".design");
const marketingTopics = document.querySelectorAll(".marketing");
const IT_SoftwareTopics = document.querySelectorAll(".IT & Software");
const mathsTopics = document.querySelectorAll(".maths");
const aiTopics = document.querySelectorAll(".ai");

development.addEventListener("change", function () {
    developmentTopics.forEach(topic => {
        if (development.value === "development") {
            topic.style.display = 'block';
        } else {
            topic.style.display = 'none';
        }
    });
});

design.addEventListener("change", function () {
    designTopics.forEach(topic => {
        if (design.value === "design") {
            topic.style.display = 'block';
        } else {
            topic.style.display = 'none';
        }
    });
});

marketing.addEventListener("change", function () {
    marketingTopics.forEach(topic => {
        if (marketing.value === "marketing") {
            topic.style.display = 'block';
        } else {
            topic.style.display = 'none';
        }
    });
});

IT_Software.addEventListener("change", function () {
    IT_SoftwareTopics.forEach(topic => {
        if (IT_Software.value === "IT & Software") {
            topic.style.display = 'block';
        } else {
            topic.style.display = 'none';
        }
    });
});

maths.addEventListener("change", function () {
    mathsTopics.forEach(topic => {
        if (maths.value === "maths") {
            topic.style.display = 'block';
        } else {
            topic.style.display = 'none';
        }
    });
});

ai.addEventListener("change", function () {
    aiTopics.forEach(topic => {
        if (ai.value === "ai") {
            topic.style.display = 'block';
        } else {
            topic.style.display = 'none';
        }
    });
});

// Toggle visibility of elements

const description = document.getElementById('description');
const course = document.getElementById('course');
const reviews = document.getElementById('reviews');

description.addEventListener("click", function () {
    if (description.style.display !== 'none') {
        course.style.display = 'none';
        reviews.style.display = 'none';
    } else {
        description.style.display == 'block'
        course.style.display = 'none';
        reviews.style.display = 'none';
    }
});

course.addEventListener("click", function () {
    if (course.style.display !== 'none') {
        description.style.display = 'none';
        reviews.style.display = 'none';
    } else {
        course.style.display == 'block'
        description.style.display = 'none';
        reviews.style.display = 'none';
    }
});

reviews.addEventListener("click", function () {
    if (reviews.style.display !== 'none') {
        course.style.display = 'none';
        reviews.style.display = 'none';
    } else {
        reviews.style.display == 'block'
        course.style.display = 'none';
        description.style.display = 'none';
    }
});

