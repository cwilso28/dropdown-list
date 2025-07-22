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
    body.append(element);
}

let greyBackgroundContainer = createGreyBackground();
insertElement(greyBackgroundContainer);
