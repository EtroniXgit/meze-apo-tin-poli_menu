// Page and Tab Switching Functionality
function switchPage(pageNumber) {
    // Hide all pages
    const pages = document.querySelectorAll('.menu-page');
    pages.forEach(page => page.classList.remove('active'));

    // Deactivate all tab buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show the targeted page dynamically based on its ID
    const activePage = document.getElementById(`page-${pageNumber}`);
    if (activePage) {
        activePage.classList.add('active');
    }

    // Set corresponding button to active
    if (buttons[pageNumber - 1]) {
        buttons[pageNumber - 1].classList.add('active');
    }
    
    // Smooth scroll back to navigation bar top edge
    const navbar = document.querySelector('.menu-tabs');
    if (navbar) {
        window.scrollTo({
            top: navbar.offsetTop - 20,
            behavior: 'smooth'
        });
    }
}

//Log loaded info for maintenance
document.addEventListener("DOMContentLoaded", () => {
    console.log("Μεζέ από την Πόλη — Digital Menu Active.");                  //--LOOK THIS FURTHER--//
});

/////////////////////////////////////////////////////////////////////////////

// Functionality for Back to Top Button
document.addEventListener("DOMContentLoaded", () => {
    const backToTopBtn = document.getElementById("backToTopBtn");

    if (backToTopBtn) {
        // Εμφάνιση του κουμπιού όταν ο χρήστης σκρολλάρει 400px και κάτω
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        });

        // Ομαλή επιστροφή στην κορυφή όταν πατηθεί
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
