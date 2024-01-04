document.getElementById("tellMeMoreButton").addEventListener('click', function() {
    document.getElementById("tellMeMoreTarget").scrollIntoView({
        behavior: "smooth"
    });
});

let miloButton = document.getElementById("miloButton");
let oliverButton = document.getElementById("oliverButton");
let miloModal = document.getElementById("miloModal");
let oliverModal = document.getElementById("oliverModal");
let mainContent = document.getElementById("mainContent");

miloButton.onclick = function() {
    toggleModal(miloModal);
}

oliverButton.onclick = function() {
    toggleModal(oliverModal);
}

window.onclick = function(event) {
    if (event.target === miloModal || event.target === oliverModal) {
        toggleModal(event.target);
    }
}

function toggleModal(modal) {
    if (modal.style.display === "none" || modal.style.display === "") {
        modal.style.display = "block";
        document.body.classList.add("no-scroll");
        mainContent.classList.add('dimmed');
        modal.classList.add("animateModal");
    } else {
        modal.style.display = "none";        
        document.body.classList.remove("no-scroll");
        mainContent.classList.remove('dimmed');
        modal.classList.remove('animate-modal');
    }
}




