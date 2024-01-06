document.getElementById("tellMeMoreButton").addEventListener('click', function() {
    let target = document.getElementById("tellMeMoreTarget");
    target.scrollIntoView({
        behavior: "smooth"
    });

    // Add animation classes from Animate.css
    target.classList.add("animateScroll");
});


let miloButton = document.getElementById("miloButton");
let oliverButton = document.getElementById("oliverButton");
let christianButton = document.getElementById("christianButton");
let miloModal = document.getElementById("miloModal");
let oliverModal = document.getElementById("oliverModal");
let christianModal = document.getElementById("christianModal");
let mainContent = document.getElementById("mainContent");

miloButton.onclick = function() {
    toggleModal(miloModal);
}

oliverButton.onclick = function() {
    toggleModal(oliverModal);
}
christianButton.onclick = function() {
    toggleModal(christianModal);
}

window.onclick = function(event) {
    if (event.target === miloModal || event.target === oliverModal) {
        toggleModal(event.target);
    }
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

// animate the navbar with the elements from the home page
setupNavbar("navbar", "navbarTitle", "navbarHome", "navbarDonate");