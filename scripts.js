window.addEventListener("scroll", function () {

    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

// Remove focus from navigation links after clicking
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function () {
        this.blur();
    });
});
