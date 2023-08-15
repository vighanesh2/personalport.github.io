document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.transform = "translateX(-100%)"; // Initially hide the sidebar off the screen

    // Use a timeout to delay the opening of the sidebar to create a smooth animation
    setTimeout(function () {
        sidebar.style.transform = "translateX(0)";
        sidebar.style.transition = "transform 0.5s ease"; // Add a transition for smooth animation
    }, 100); // Adjust the delay time as needed
});
