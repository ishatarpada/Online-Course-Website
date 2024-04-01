// submenu show javascript

document.querySelectorAll('.dropdown-submenu').forEach(item => {
    item.addEventListener('click', event => {
        event.stopPropagation();
        const submenu = item.querySelector('.sub-menu');
        // Close all other open submenus and remove active class
        document.querySelectorAll('.dropdown-submenu.active').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.sub-menu').style.display = 'none';
            }
        });
        // Toggle active class and display of clicked submenu
        item.classList.toggle('active');
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
});

// for change option

// const development = document.querySelector("#development");
// const design = document.querySelector("#design");
// const marketing = document.querySelector("#marketing");
// const IT_Software = document.querySelector("#IT & Software");
// const maths = document.querySelector("#maths");
// const ai = document.querySelector("#ai");

// const developmentTopics = document.querySelectorAll(".development");
// const designTopics = document.querySelectorAll(".design");
// const marketingTopics = document.querySelectorAll(".marketing");
// const IT_SoftwareTopics = document.querySelectorAll(".IT & Software");
// const mathsTopics = document.querySelectorAll(".maths");
// const aiTopics = document.querySelectorAll(".ai");

// development.addEventListener("change", function () {
//     developmentTopics.forEach(topic => {
//         if (development.value === "development") {
//             topic.style.display = 'block';
//         } else {
//             topic.style.display = 'none';
//         }
//     });
// });

// design.addEventListener("change", function () {
//     designTopics.forEach(topic => {
//         if (design.value === "design") {
//             topic.style.display = 'block';
//         } else {
//             topic.style.display = 'none';
//         }
//     });
// });

// marketing.addEventListener("change", function () {
//     marketingTopics.forEach(topic => {
//         if (marketing.value === "marketing") {
//             topic.style.display = 'block';
//         } else {
//             topic.style.display = 'none';
//         }
//     });
// });

// IT_Software.addEventListener("change", function () {
//     IT_SoftwareTopics.forEach(topic => {
//         if (IT_Software.value === "IT & Software") {
//             topic.style.display = 'block';
//         } else {
//             topic.style.display = 'none';
//         }
//     });
// });

// maths.addEventListener("change", function () {
//     mathsTopics.forEach(topic => {
//         if (maths.value === "maths") {
//             topic.style.display = 'block';
//         } else {
//             topic.style.display = 'none';
//         }
//     });
// });

// ai.addEventListener("change", function () {
//     aiTopics.forEach(topic => {
//         if (ai.value === "ai") {
//             topic.style.display = 'block';
//         } else {
//             topic.style.display = 'none';
//         }
//     });
// });

// Toggle visibility of elements

// const descriptionList = document.getElementById('description-list');
// const courseList = document.getElementById('course-list');
// const reviewsList = document.getElementById('reviews-list');
// const description = document.getElementById('description');
// const course = document.getElementById('course');
// const reviews = document.getElementById('reviews');

// descriptionList.addEventListener("click", function(event){
//     event.preventDefault();
//     description.style.display = "block";
//     course.style.display = "none";
//     reviews.style.display = "none";
// });

// courseList.addEventListener("click", function(event){
//     event.preventDefault();
//     description.style.display = "none";
//     course.style.display = "block";
//     reviews.style.display = "none";
// });

// reviewsList.addEventListener("click", function(event){
//     event.preventDefault();
//     description.style.display = "none";
//     course.style.display = "none";
//     reviews.style.display = "block";
// });

// const aboutList = document.getElementById('about-list');
// const liveChatList = document.getElementById('liveChat-list');
// const about = document.getElementById('about');
// const liveChat = document.getElementById('liveChat');

// aboutList.addEventListener("click", function(event){
//     event.preventDefault();
//     about.style.display = "block";
//     liveChat.style.display = "none";
// });

// liveChatList.addEventListener("click", function(event){
//     event.preventDefault();
//     about.style.display = "none";
//     liveChat.style.display = "block";
// });

// for notification
let formCheckInput = document.getElementById("form-check-input");
let turnOff = document.getElementById("turn-off");
let exampleModalToggle = document.getElementById("exampleModalToggle");
let exampleModalToggle2 = document.getElementById("exampleModalToggle2");
let notification = document.getElementById("notification");

notification.addEventListener("click", function () {
    if (formCheckInput.checked) {
        exampleModalToggle2.classList.add("show");
        exampleModalToggle.classList.remove("show");
    } else {
        exampleModalToggle.classList.add("show");
        exampleModalToggle2.classList.remove("show");
    }
});

turnOff.addEventListener("click", function () {
    formCheckInput.checked = false;
});

let showNotification = document.getElementById("show-notification");
let notificationTitle = document.querySelector(".notification-title");

formCheckInput.addEventListener("click", function () {
    if (formCheckInput.checked) {
        showNotification.style.display = "block";
        notificationTitle.innerText = "Turn off the Notification";
    } else {
        showNotification.style.display = "none";
        notificationTitle.innerText = "Turn on the Notification";
    }
});


// personalization explore section
const exploreSections = document.querySelectorAll(".explore-section");

// Add click event listener to each explore section
exploreSections.forEach(function (exploreSection) {
    exploreSection.addEventListener("click", function () {
        // Get check icon and border
        const checkIcon = this.querySelector(".check-icon");
        const border = this.style.border;

        // Toggle check icon visibility
        if (checkIcon.style.display === "none" || border === "none") {
            checkIcon.style.display = "block";
            this.style.border = "3px solid #3DCBB1";
        } else {
            checkIcon.style.display = "none";
            this.style.border = "none";
        }
    });
});