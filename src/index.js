import { el } from "date-fns/locale";
import "./styles.css"

function createGreyBackground() {
    let container = document.createElement("div");
    container.id = "grey-background";
    container.style.position = "absolute";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.backgroundColor = "rgb(0 0 0 /0.5";

    return container
}

function insertElement (element, position) {
    let body = document.querySelector("body");
    body.insertBefore(element, position);
}

function showElement (id) {
    let element = document.getElementById(id);
    element.style.display = "block";
    element.style.position = "absolute";
    element.style.top = "-100%";
    element.style.animation = "slide 0.2s forwards";
    // element.style.animationDelay = "2s";
}

function hideElement (id) {
    let element = document.getElementById(id);
    element.style.display = "none";
}

function deleteElement (id) {
    let element = document.getElementById(id);
    element.remove();
}

function showDropdown () {
    let wrapper = document.getElementById("wrapper");
    let greyBackgroundContainer = createGreyBackground();
    insertElement(greyBackgroundContainer, wrapper);
    showElement("dropdown-list");

    let greyBackground = document.getElementById("grey-background");
    greyBackground.addEventListener("click", function() {
    hideDropdown();
})
}

function hideDropdown () {
    hideElement("dropdown-list");
    deleteElement("grey-background");
}

let button = document.getElementById("dropdown-button");
button.addEventListener("click", function() {
    showDropdown();
})



