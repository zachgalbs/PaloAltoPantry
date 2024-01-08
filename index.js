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
let closeMiloModal = document.getElementById("closeMiloModal");
let closeOliverModal = document.getElementById("closeOliverModal");
let closeChristianModal = document.getElementById("closeChristianModal");

miloButton.onclick = function() {
    toggleModal(miloModal);
}
closeMiloModal.onclick = function() {
    toggleModal(miloModal);
}
oliverButton.onclick = function() {
    toggleModal(oliverModal);
}
closeOliverModal.onclick = function() {
    toggleModal(oliverModal);
}
christianButton.onclick = function() {
    toggleModal(christianModal);
}
closeChristianModal.onclick = function() {
    toggleModal(christianModal);
}

window.onclick = function(event) {
    // Close miloModal if it's active and the click is outside its content
    if (outsideModalClicked(miloModal, miloButton, event)) {
        toggleModal(miloModal);
    }

    // Close oliverModal if it's active and the click is outside its content
    if (outsideModalClicked(oliverModal, oliverButton, event)) {
        toggleModal(oliverModal);
    }

    // Close christianModal if it's active and the click is outside its content
    if (outsideModalClicked(christianModal, christianButton, event)) {
        toggleModal(christianModal);
    }
}

// animate the navbar with the elements from the home page
setupNavbar("navbar", "navbarTitle", "navbarHome", "navbarDonate", "navbarContact");