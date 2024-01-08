function setupNavbar(navbarId, titleId, homeId, donateId, contactId) {
    let navbar = document.getElementById(navbarId);
    let navbarTitle = document.getElementById(titleId);
    let navbarHome = document.getElementById(homeId);
    let navbarDonate = document.getElementById(donateId);
    let navbarContact = document.getElementById(contactId);

    if (!navbar || !navbarTitle || !navbarHome || !navbarDonate || !navbarContact) {
        console.error("One or more navbar elements not found");
        return;
    }

    let navbarHeight = parseInt(window.getComputedStyle(navbar).height, 10);
    let titleSize = parseInt(window.getComputedStyle(navbarTitle).fontSize, 10);
    let homeSize = parseInt(window.getComputedStyle(navbarHome).fontSize, 10);
    let donateSize = parseInt(window.getComputedStyle(navbarDonate).fontSize, 10);
    let contactSize = parseInt(window.getComputedStyle(navbarContact).fontSize, 10);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.style.height = (navbarHeight - navbarHeight/5) + "px";
            navbarTitle.style.fontSize = (titleSize - titleSize/5) + "px";
            navbarHome.style.fontSize = (homeSize - homeSize/5) + "px";
            navbarDonate.style.fontSize = (donateSize - donateSize/5) + "px";
            navbarContact.style.fontSize = (contactSize - contactSize/5) + "px";
        }
        else {
            navbar.style.height = navbarHeight + "px";
            navbarTitle.style.fontSize = titleSize + "px";
            navbarHome.style.fontSize = homeSize + "px";
            navbarDonate.style.fontSize = donateSize + "px";
            navbarContact.style.fontSize = contactSize + "px";
        }
    });
}

function toggleModal(modal) {
    if (modal.style.display === "none" || modal.style.display === "") {
        modal.style.display = "flex";
        document.body.classList.add("no-scroll");
        mainContent.classList.add('dimmed');
        modal.classList.add("animateModal");
    } else {
        modal.style.display = "none";        
        document.body.classList.remove("no-scroll");
        mainContent.classList.remove('dimmed');
        modal.classList.remove('animateModal');
    }
}

function outsideModalClicked(modal, button, event) {
    if (!modal.contains(event.target) && !button.contains(event.target) && (modal.style.display === "flex")) {
        return(true);
    }
}

const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', function() {
    console.log("brah");
    this.classList.toggle('active');
    const navPopup = document.getElementById('navPopup');
    navPopup.classList.toggle('hidden');
    console.log(navPopup.classList.contains('hidden'));
});
window.onclick = function(event) {
    if (!event.target.matches('.hamburger-icon, .hamburger-icon *')) {
        var dropdowns = document.getElementsByClassName("hidden");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (!openDropdown.classList.contains('hidden')) {
                openDropdown.classList.add('hidden');
            }
        }
    }
};