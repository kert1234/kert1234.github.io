document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check if dark mode preference is saved in localStorage
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "Light Mode";
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            darkModeToggle.textContent = "Light Mode";
        } else {
            localStorage.removeItem("dark-mode");
            darkModeToggle.textContent = "Dark Mode";
        }
    });
});
