document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const sideMenu = document.getElementById("sideMenu");

    // Toggle side menu when menu icon is clicked
    menuIcon.addEventListener("click", function () {
        sideMenu.classList.toggle("active");
    });

    // Close side menu when clicking outside of it
    document.addEventListener("click", function (event) {
        const targetElement = event.target;
        if (!sideMenu.contains(targetElement) && !menuIcon.contains(targetElement)) {
            sideMenu.classList.remove("active");
        }
    });
});


