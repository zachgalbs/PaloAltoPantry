document.getElementById("tellMeMoreButton").addEventListener('click', function() {
    document.getElementById("tellMeMoreTarget").scrollIntoView( {
        behavior: "smooth"
    });
});

let miloButton = document.getElementById("miloButton");
let oliverButton = document.getElementById("oliverButton");
let miloModal = document.getElementById("miloModal");
let oliverModal = document.getElementById("oliverModal");

miloButton.onclick = function() {
    if (miloModal.style.display == "none" || miloModal.style.display == "") {
        miloModal.style.display = "block"
        document.body.classList.add("no-scroll");
    } 
    else {
        miloModal.style.display = "none";
        document.body.classList.remove("no-scroll");
    }
}
oliverButton.onclick = function() {
    
}
window.onclick = function(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

function toggleModal() {

}