// Select the dark mode toggle button
const darkModeToggle = document.querySelector('.dark-mode-toggle');

// Check if dark mode is already saved in localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// Function to enable dark mode
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled'); // Save dark mode state
}

// Function to disable dark mode
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled'); // Save light mode state
}

// Event listener to toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

// Apply the saved theme on page load
if (isDarkMode) {
    enableDarkMode();
}
