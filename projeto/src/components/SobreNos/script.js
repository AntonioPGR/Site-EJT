document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-theme");
    const body = document.body;

    
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        body.classList.add("light-mode"); 
    }

    
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");

        
        const newTheme = body.classList.contains("dark-mode") ? "dark-mode" : "light-mode";
        localStorage.setItem("theme", newTheme);
    });
});
