// animate the navbar with the elements from the donate page
setupNavbar("donateNavbar", "donateNavbarTitle", "donateNavbarHome", "donateNavbarDonate", "donateNavbarContact");

let whyDonateButton = document.getElementById("whyDonateButton");
let donateModal = document.getElementById("donateModal");

window.onclick = function(event) {
    // Close miloModal if it's active and the click is outside its content
    if (outsideModalClicked(donateModal, whyDonateButton, event)) {
        toggleModal(donateModal);
    }
}

whyDonateButton.onclick = function() {
    toggleModal(donateModal);
}

closeDonateModal.onclick = function() {
    toggleModal(donateModal);
}