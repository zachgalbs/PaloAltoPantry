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
    console.log(!miloModal.contains(event.target));
    console.log(miloModal.style.display);
    console.log("toggle Modal " + !miloModal.contains(event.target) && miloModal.style.display === "block")
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


function toggleModal(modal) {
    // Toggle the 'active' class to show/hide the modal
    modal.classList.toggle('active');
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

// animate the navbar with the elements from the home page
setupNavbar("navbar", "navbarTitle", "navbarHome", "navbarDonate");