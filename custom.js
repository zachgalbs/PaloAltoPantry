function setupNavbar(navbarId, titleId, homeId, donateId) {
    let navbar = document.getElementById(navbarId);
    let navbarTitle = document.getElementById(titleId);
    let navbarHome = document.getElementById(homeId);
    let navbarDonate = document.getElementById(donateId);

    if (!navbar || !navbarTitle || !navbarHome || !navbarDonate) {
        console.error("One or more navbar elements not found");
        return;
    }

    let navbarHeight = parseInt(window.getComputedStyle(navbar).height, 10);
    let titleSize = parseInt(window.getComputedStyle(navbarTitle).fontSize, 10);
    let homeSize = parseInt(window.getComputedStyle(navbarHome).fontSize, 10);
    let donateSize = parseInt(window.getComputedStyle(navbarDonate).fontSize, 10);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.style.height = (navbarHeight - navbarHeight/5) + "px";
            navbarTitle.style.fontSize = (titleSize - titleSize/5) + "px";
            navbarHome.style.fontSize = (homeSize - homeSize/5) + "px";
            navbarDonate.style.fontSize = (donateSize - donateSize/5) + "px";
        }
        else {
            navbar.style.height = navbarHeight + "px";
            navbarTitle.style.fontSize = titleSize + "px";
            navbarHome.style.fontSize = homeSize + "px";
            navbarDonate.style.fontSize = donateSize + "px";
        }
    });
}